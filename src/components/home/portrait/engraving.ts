/**
 * The portrait's intro, in WebGL: the engraving develops outward from the eyes. Inside
 * the advancing front the darkest strokes print first and the fine light hatching last,
 * and each stroke lands in the signal orange and cools to ink behind the front. The
 * paper inside the silhouette arrives with the ink, so the medallion behind is covered as
 * the portrait prints.
 *
 * The layer exists only for the intro. Once it finishes, the plate shows the <img>, which
 * the browser draws at the screen's full resolution, and this context is released.
 *
 * The image is redrawn into a canvas at exactly the canvas's pixel size before upload, so
 * the shader samples it 1:1 and the fine hatching never aliases.
 */

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = vec2(a_pos.x * 0.5 + 0.5, 0.5 - a_pos.y * 0.5);
  gl_Position = vec4(a_pos, 0.0, 1.0);
}`;

const FRAG = `
precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_img;
uniform float u_front;
uniform vec2 u_eye;
uniform float u_aspect;
uniform vec3 u_paper;
uniform vec3 u_signal;

const float SOFT = 0.34;

void main() {
  vec4 s = texture2D(u_img, v_uv);
  // Split the pixel into paper and ink: k is ink coverage, inkC the ink's own colour
  // (black for the line work, amber in the eyes).
  vec3 k3 = 1.0 - s.rgb / u_paper;
  float k = clamp(max(max(k3.r, k3.g), k3.b), 0.0, 1.0);
  vec3 inkC = k > 0.002 ? clamp((s.rgb - u_paper * (1.0 - k)) / k, 0.0, 1.0) : vec3(0.0);

  float dist = length((v_uv - u_eye) * vec2(1.0, u_aspect));
  float local = clamp((u_front - dist) / SOFT, 0.0, 1.0);

  // Darkest strokes first, finest last.
  float th = 1.0 - local * 1.3;
  float vis = smoothstep(th, th + 0.3, k);
  float paperA = s.a * smoothstep(0.1, 0.75, local);

  // New strokes land warm and cool to ink.
  float warm = 1.0 - smoothstep(0.0, 0.9, local);
  vec3 col = mix(inkC, u_signal, warm * 0.92);

  float ka = k * vis * s.a;
  float a = ka + paperA * (1.0 - ka);
  gl_FragColor = vec4(col * ka + u_paper * paperA * (1.0 - ka), a);
}`;

/** The front travels this far (in portrait widths) to clear the far corners. */
const FRONT_END = 1.5;
const INTRO_MS = 2600;

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function hexToRgb(hex: string): [number, number, number] {
  const m = hex.trim().replace("#", "");
  const v = m.length === 3 ? m.split("").map((ch) => ch + ch).join("") : m;
  const n = parseInt(v, 16);
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

export type Engraving = {
  /** Match the canvas to its box and re-upload the image at that size. */
  resize: () => void;
  /** Play the develop-in. `onDone` fires once the last stroke has cooled. */
  intro: (onDone: () => void) => void;
  dispose: () => void;
};

export function createEngraving(
  canvas: HTMLCanvasElement,
  img: HTMLImageElement,
  opts: { eye: [number, number]; paper: string; signal: string },
): Engraving | null {
  const gl = canvas.getContext("webgl", { premultipliedAlpha: true, alpha: true, antialias: false, preserveDrawingBuffer: false });
  if (!gl) return null;

  const vs = compile(gl, gl.VERTEX_SHADER, VERT);
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
  const prog = gl.createProgram();
  if (!vs || !fs || !prog) return null;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, "a_pos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  const u = (name: string) => gl.getUniformLocation(prog, name);
  const uFront = u("u_front");
  const uAspect = u("u_aspect");
  gl.uniform1i(u("u_img"), 0);
  gl.uniform2f(u("u_eye"), opts.eye[0], opts.eye[1]);
  gl.uniform3fv(u("u_paper"), hexToRgb(opts.paper));
  gl.uniform3fv(u("u_signal"), hexToRgb(opts.signal));

  const tex = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

  let front = 0;
  let raf = 0;
  let start = -1;
  let done: (() => void) | null = null;
  let disposed = false;
  const scratch = document.createElement("canvas");

  const draw = () => {
    gl.uniform1f(uFront, front);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  const frame = (now: number) => {
    raf = 0;
    if (disposed) return;
    if (start < 0) start = now;
    const p = Math.min(1, (now - start) / INTRO_MS);
    front = easeInOut(p) * FRONT_END;
    draw();
    if (p < 1) {
      raf = requestAnimationFrame(frame);
      return;
    }
    const cb = done;
    done = null;
    cb?.();
  };

  const resize = () => {
    if (disposed) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return;
    // Full device resolution (up to 3x), so the intro is as crisp as the image it hands over to.
    const dpr = Math.min(3, window.devicePixelRatio || 1);
    const w = Math.round(rect.width * dpr);
    const h = Math.round(rect.height * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    gl.viewport(0, 0, w, h);
    gl.uniform1f(uAspect, rect.height / rect.width);

    // Downsample with the browser's high-quality filter, then sample 1:1.
    scratch.width = w;
    scratch.height = h;
    const c2 = scratch.getContext("2d");
    if (!c2) return;
    c2.imageSmoothingEnabled = true;
    c2.imageSmoothingQuality = "high";
    c2.clearRect(0, 0, w, h);
    c2.drawImage(img, 0, 0, w, h);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, scratch);
    draw();
  };

  const onLost = (e: Event) => {
    e.preventDefault();
    disposed = true;
    cancelAnimationFrame(raf);
  };
  canvas.addEventListener("webglcontextlost", onLost);

  resize();

  return {
    resize,
    intro(onDone) {
      front = 0;
      start = -1;
      done = onDone;
      if (!raf && !disposed) raf = requestAnimationFrame(frame);
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      cancelAnimationFrame(raf);
      canvas.removeEventListener("webglcontextlost", onLost);
      scratch.width = scratch.height = 0;
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    },
  };
}
