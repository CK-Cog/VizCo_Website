"use client";

import { useEffect, useRef } from "react";

/**
 * The signature hero visual, with no words: a field of square cells on a faint dot
 * grid, coloured on a sunrise ramp (lilac, violet, orchid, rose, orange, amber, yellow)
 * by how much "energy" each cell holds.
 *
 * - Alive on its own: slow, domain-warped colour currents, occasional twinkles, and
 *   small drops that ripple outwards.
 * - Every cell is a spring: size pops with a little overshoot and settles back.
 * - The cursor parts the cells like a lens and warms them; moving leaves a heat trail
 *   (faster is hotter) that cools back through the ramp. A click sends a shockwave.
 * - A soft haze under the warm cells makes it read as light, not pixels.
 *
 * It flows around any element in the same section marked `data-field-avoid`
 * (`data-field-avoid="text"` gives tight, per-line shapes around type), so it never
 * sits behind words. Runs only while on screen and the tab is visible; reduced motion
 * gets one still frame.
 */

/* ---------- Colour ramp ---------- */

const STOPS: [number, string][] = [
  [0.0, "#d9d8d2"],
  [0.1, "#d6cbf3"],
  [0.24, "#b79ef7"],
  [0.38, "#8a6cf3"],
  [0.52, "#c652b9"],
  [0.64, "#f24a6c"],
  [0.76, "#ff5a1f"],
  [0.88, "#ff8f1c"],
  [1.0, "#ffcb3d"],
];
const STEPS = 96;

function hex(h: string) {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function buildRamp() {
  const rgb: number[][] = [];
  const css: string[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    let k = 0;
    while (k < STOPS.length - 2 && t > STOPS[k + 1][0]) k++;
    const [t0, c0] = STOPS[k];
    const [t1, c1] = STOPS[k + 1];
    const u = Math.min(1, Math.max(0, (t - t0) / (t1 - t0)));
    const a = hex(c0);
    const b = hex(c1);
    const c = [0, 1, 2].map((j) => Math.round(a[j] + (b[j] - a[j]) * u));
    rgb.push(c);
    css.push(`rgb(${c[0]},${c[1]},${c[2]})`);
  }
  return { rgb, css };
}

/* ---------- 2D simplex noise (after Gustavson) ---------- */

function makeNoise(seed = 1) {
  const p = new Uint8Array(256);
  for (let i = 0; i < 256; i++) p[i] = i;
  let s = seed * 2654435761;
  for (let i = 255; i > 0; i--) {
    s = (s * 1664525 + 1013904223) >>> 0;
    const j = s % (i + 1);
    [p[i], p[j]] = [p[j], p[i]];
  }
  const perm = new Uint8Array(512);
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  const G = [1, 1, -1, 1, 1, -1, -1, -1, 1, 0, -1, 0, 0, 1, 0, -1];
  const F2 = 0.5 * (Math.sqrt(3) - 1);
  const G2 = (3 - Math.sqrt(3)) / 6;
  return (xin: number, yin: number) => {
    const s2 = (xin + yin) * F2;
    const i = Math.floor(xin + s2);
    const j = Math.floor(yin + s2);
    const t = (i + j) * G2;
    const x0 = xin - (i - t);
    const y0 = yin - (j - t);
    const i1 = x0 > y0 ? 1 : 0;
    const j1 = x0 > y0 ? 0 : 1;
    const x1 = x0 - i1 + G2;
    const y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2;
    const y2 = y0 - 1 + 2 * G2;
    const ii = i & 255;
    const jj = j & 255;
    let n = 0;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 > 0) {
      const g = (perm[ii + perm[jj]] & 7) * 2;
      t0 *= t0;
      n += t0 * t0 * (G[g] * x0 + G[g + 1] * y0);
    }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 > 0) {
      const g = (perm[ii + i1 + perm[jj + j1]] & 7) * 2;
      t1 *= t1;
      n += t1 * t1 * (G[g] * x1 + G[g + 1] * y1);
    }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 > 0) {
      const g = (perm[ii + 1 + perm[jj + 1]] & 7) * 2;
      t2 *= t2;
      n += t2 * t2 * (G[g] * x2 + G[g + 1] * y2);
    }
    return 70 * n; // about -1..1
  };
}

/* ---------- Geometry helpers ---------- */

type Box = { l: number; t: number; r: number; b: number };
type Ripple = { x: number; y: number; t0: number; speed: number; strength: number; width: number; push: number; reach: number };

const smooth = (x: number) => {
  const t = Math.min(1, Math.max(0, x));
  return t * t * (3 - 2 * t);
};

function shapesOf(el: HTMLElement): DOMRect[] {
  if (el.dataset.fieldAvoid === "text") {
    const range = document.createRange();
    range.selectNodeContents(el);
    const rects = Array.from(range.getClientRects()).filter((r) => r.width > 1 && r.height > 1);
    if (rects.length) return rects;
  }
  return [el.getBoundingClientRect()];
}

export default function BlockField({
  className = "",
  density = 1,
  fadeFrom = 0.34,
  fadeTo = 0.72,
  pitch = 18,
}: {
  className?: string;
  /** 0 to 1: how warm the resting field runs. */
  density?: number;
  /** Fraction of the width where the field starts to appear, and where it reaches full strength. */
  fadeFrom?: number;
  fadeTo?: number;
  pitch?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { rgb, css } = buildRamp();
    const noise = makeNoise(7);
    const noise2 = makeNoise(13);

    const MIN = 2.2;
    const MAX = pitch - 6;
    const HOVER_R = 150;
    const PUSH = 11;

    // Haze: one pixel per cell, blurred and scaled up beneath the squares.
    const haze = document.createElement("canvas");
    const hctx = haze.getContext("2d");
    const mid = document.createElement("canvas");
    const mctx = mid.getContext("2d");
    const canFilter = !!mctx && "filter" in mctx;
    const MID = 4;
    let img: ImageData | null = null;

    let W = 0;
    let H = 0;
    let cols = 0;
    let rows = 0;
    let e = new Float32Array(0); // energy
    let sz = new Float32Array(0); // size
    let vs = new Float32Array(0); // size velocity
    let dx = new Float32Array(0); // displacement
    let dy = new Float32Array(0);
    let vx = new Float32Array(0);
    let vy = new Float32Array(0);
    let mask = new Float32Array(0);
    let warmth = new Float32Array(0); // per-row hue shift: cooler at the top, warmer toward the bottom
    let live: Int32Array = new Int32Array(0); // indices of visible cells

    let raf = 0;
    let running = false;
    let onScreen = false;
    let last = performance.now();
    let clock = 0;
    let nextDrop = 1800;
    const ripples: Ripple[] = [];
    const ptr = { x: -1e5, y: -1e5, inside: false, lastX: 0, lastY: 0, lastT: 0, has: false };
    const trail: { x: number; y: number; amt: number }[] = [];
    let introFired = false;

    const measure = () => {
      const r = canvas.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return;
      W = r.width;
      H = r.height;
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(W / pitch);
      rows = Math.ceil(H / pitch);
      const n = cols * rows;
      e = new Float32Array(n);
      sz = new Float32Array(n).fill(MIN);
      vs = new Float32Array(n);
      dx = new Float32Array(n);
      dy = new Float32Array(n);
      vx = new Float32Array(n);
      vy = new Float32Array(n);
      mask = new Float32Array(n);
      warmth = new Float32Array(rows);
      for (let row = 0; row < rows; row++) warmth[row] = 0.24 * smooth((row * pitch) / Math.max(1, H) - 0.1);

      haze.width = cols;
      haze.height = rows;
      mid.width = cols * MID;
      mid.height = rows * MID;
      img = hctx ? hctx.createImageData(cols, rows) : null;

      const boxes: Box[] = [];
      host.querySelectorAll<HTMLElement>("[data-field-avoid]").forEach((el) => {
        for (const q of shapesOf(el)) boxes.push({ l: q.left - r.left, t: q.top - r.top, r: q.right - r.left, b: q.bottom - r.top });
      });

      const vis: number[] = [];
      for (let row = 0; row < rows; row++) {
        for (let c = 0; c < cols; c++) {
          const x = c * pitch + pitch / 2;
          const y = row * pitch + pitch / 2;
          const fx = smooth((x / W - fadeFrom) / Math.max(0.01, fadeTo - fadeFrom));
          const fy = smooth(Math.min(y, H - y) / 90);
          let d = 1e9;
          for (const b of boxes) {
            const ddx = Math.max(b.l - x, 0, x - b.r);
            const ddy = Math.max(b.t - y, 0, y - b.b);
            const dd = Math.hypot(ddx, ddy);
            if (dd < d) d = dd;
          }
          const fa = smooth((d - 18) / 48);
          const m = fx * fy * fa;
          mask[row * cols + c] = m;
          if (m > 0.015) vis.push(row * cols + c);
        }
      }
      live = Int32Array.from(vis);
    };

    const ambient = (c: number, row: number, t: number) => {
      const f = 0.045;
      const wx = noise2(c * f * 0.6 + 3.1, row * f * 0.6 + t * 0.000045);
      const wy = noise2(c * f * 0.6 - 7.4 + t * 0.00004, row * f * 0.6 + 1.7);
      const n = noise(c * f + wx * 1.4 + t * 0.00003, row * f + wy * 1.4 - t * 0.000022);
      // Mostly quiet; currents rise into lilac and violet, now and then into rose.
      return smooth((n - 0.04) / 0.82) * 0.6 * density;
    };

    const toLocal = (cx: number, cy: number) => {
      const r = canvas.getBoundingClientRect();
      return { x: cx - r.left, y: cy - r.top, inside: cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom };
    };

    const addRipple = (x: number, y: number, strength: number, speed = 0.75, width = 34, push = 0.8, reach = 480) => {
      ripples.push({ x, y, t0: clock, speed, strength, width, push, reach });
      if (ripples.length > 8) ripples.shift();
    };

    const step = (dt: number, still: boolean) => {
      const t = clock;
      const k = Math.min(2, dt / 16.67); // frame-rate independence
      const relax = 1 - Math.pow(1 - 0.022, k);

      // Drop finished ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        if ((t - ripples[i].t0) * ripples[i].speed > ripples[i].reach + ripples[i].width) ripples.splice(i, 1);
      }

      // Deposit the pointer's heat trail
      if (trail.length) {
        const sigma = 42;
        const reach = Math.ceil((sigma * 2.2) / pitch);
        for (const p of trail) {
          const pc = Math.floor(p.x / pitch);
          const pr = Math.floor(p.y / pitch);
          for (let rr = pr - reach; rr <= pr + reach; rr++) {
            if (rr < 0 || rr >= rows) continue;
            for (let cc = pc - reach; cc <= pc + reach; cc++) {
              if (cc < 0 || cc >= cols) continue;
              const i = rr * cols + cc;
              if (mask[i] < 0.015) continue;
              const ddx = cc * pitch + pitch / 2 - p.x;
              const ddy = rr * pitch + pitch / 2 - p.y;
              const g = Math.exp(-(ddx * ddx + ddy * ddy) / (2 * sigma * sigma));
              e[i] = Math.min(1, e[i] + g * p.amt);
            }
          }
        }
        trail.length = 0;
      }

      // Twinkles
      if (!still && live.length) {
        for (let s = 0; s < 1; s++) {
          if (Math.random() < 0.35 * k) {
            const i = live[(Math.random() * live.length) | 0];
            if (mask[i] > 0.4) e[i] = Math.max(e[i], 0.45 + Math.random() * 0.35);
          }
        }
      }

      const px = ptr.x;
      const py = ptr.y;
      const hover = ptr.inside && !still;

      for (let n = 0; n < live.length; n++) {
        const i = live[n];
        const c = i % cols;
        const row = (i / cols) | 0;
        const x = c * pitch + pitch / 2;
        const y = row * pitch + pitch / 2;

        const a = ambient(c, row, t);
        if (still) {
          e[i] = a;
        } else {
          // Hot cells cool quickly at first, then settle slowly back to the current
          const over = e[i] - a;
          e[i] += (a - e[i]) * Math.min(1, relax * (over > 0 ? 1 + over * 3 : 1));
        }

        let tx = 0;
        let ty = 0;
        if (hover) {
          const ddx = x - px;
          const ddy = y - py;
          const d = Math.hypot(ddx, ddy);
          if (d < HOVER_R) {
            const f = 1 - d / HOVER_R;
            const ff = f * f;
            // A small sun under the cursor: yellow core, orange, rose, a lilac halo
            const warm = smooth(f) * 0.86;
            if (e[i] < warm) e[i] += (warm - e[i]) * 0.3 * k;
            if (d > 0.001) {
              tx = (ddx / d) * ff * PUSH;
              ty = (ddy / d) * ff * PUSH;
            }
          }
        }

        for (let q = 0; q < ripples.length; q++) {
          const rp = ripples[q];
          const radius = (t - rp.t0) * rp.speed;
          const ddx = x - rp.x;
          const ddy = y - rp.y;
          const d = Math.hypot(ddx, ddy);
          const off = Math.abs(d - radius);
          if (off < rp.width) {
            const band = 1 - off / rp.width;
            const life = Math.max(0, 1 - radius / rp.reach);
            const hit = band * band * rp.strength * life;
            if (e[i] < hit) e[i] = hit;
            if (d > 0.001) {
              vx[i] += (ddx / d) * rp.push * band * life * k;
              vy[i] += (ddy / d) * rp.push * band * life * k;
            }
          }
        }

        if (still) {
          sz[i] = MIN + (MAX - MIN) * e[i];
        } else {
          // Displacement spring (lens around the cursor, kicks from ripples)
          vx[i] += (tx - dx[i]) * 0.085 * k;
          vy[i] += (ty - dy[i]) * 0.085 * k;
          vx[i] *= Math.pow(0.8, k);
          vy[i] *= Math.pow(0.8, k);
          dx[i] += vx[i] * k;
          dy[i] += vy[i] * k;

          // Size spring, with a little overshoot
          const ee = e[i];
          const target = MIN + (MAX - MIN) * (ee < 0.1 ? ee * 0.6 : 0.06 + (ee - 0.1) * 1.05);
          vs[i] += (target - sz[i]) * 0.2 * k;
          vs[i] *= Math.pow(0.7, k);
          sz[i] += vs[i] * k;
        }
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      // Haze
      if (img && hctx && mctx) {
        const d = img.data;
        d.fill(0);
        for (let n = 0; n < live.length; n++) {
          const i = live[n];
          const ee = e[i];
          if (ee < 0.2) continue;
          const hue = Math.min(1, ee + warmth[(i / cols) | 0] * smooth(ee / 0.3));
          const c = rgb[Math.round(hue * STEPS)];
          const o = i * 4;
          d[o] = c[0];
          d[o + 1] = c[1];
          d[o + 2] = c[2];
          d[o + 3] = Math.min(255, Math.pow((ee - 0.2) / 0.8, 1.3) * 255 * mask[i]);
        }
        hctx.putImageData(img, 0, 0);
        mctx.clearRect(0, 0, mid.width, mid.height);
        mctx.imageSmoothingEnabled = true;
        if (canFilter) mctx.filter = "blur(5px)";
        mctx.drawImage(haze, 0, 0, mid.width, mid.height);
        if (canFilter) mctx.filter = "none";
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.globalAlpha = 0.42;
        ctx.drawImage(mid, 0, 0, cols * pitch, rows * pitch);
      }

      // Cells
      for (let n = 0; n < live.length; n++) {
        const i = live[n];
        const c = i % cols;
        const row = (i / cols) | 0;
        const s = Math.max(0.6, sz[i]);
        const ee = Math.min(1, Math.max(0, e[i]));
        const x = c * pitch + pitch / 2 + dx[i];
        const y = row * pitch + pitch / 2 + dy[i];
        const hue = Math.min(1, ee + warmth[row] * smooth(ee / 0.3));
        ctx.globalAlpha = mask[i] * (ee < 0.1 ? 0.75 + ee * 2.5 : 1);
        ctx.fillStyle = css[Math.round(hue * STEPS)];
        ctx.fillRect(x - s / 2, y - s / 2, s, s);
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now: number) => {
      if (!running) return;
      const dt = Math.min(64, now - last);
      last = now;
      clock += dt;

      if (!introFired && clock > 350) {
        introFired = true;
        addRipple(W * 0.78, H * 0.52, 0.72, 0.6, 56, 1.1, Math.hypot(W, H));
      }
      nextDrop -= dt;
      if (nextDrop <= 0) {
        nextDrop = 2400 + Math.random() * 2600;
        if (live.length) {
          for (let tries = 0; tries < 12; tries++) {
            const i = live[(Math.random() * live.length) | 0];
            if (mask[i] > 0.6) {
              addRipple((i % cols) * pitch + pitch / 2, ((i / cols) | 0) * pitch + pitch / 2, 0.45 + Math.random() * 0.2, 0.3, 24, 0.35, 240);
              break;
            }
          }
        }
      }

      step(dt, false);
      render();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (reduce || running || !onScreen || document.hidden) return;
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const still = () => {
      step(16, true);
      render();
    };

    const redraw = () => {
      measure();
      if (reduce || !running) still();
    };

    measure();
    still();

    const ro = new ResizeObserver(redraw);
    ro.observe(canvas);
    document.fonts?.ready.then(redraw).catch(() => {});

    const io = new IntersectionObserver(([en]) => {
      onScreen = en.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    io.observe(canvas);

    const onVis = () => (document.hidden ? stop() : start());

    const onMove = (ev: PointerEvent) => {
      const p = toLocal(ev.clientX, ev.clientY);
      ptr.x = p.x;
      ptr.y = p.y;
      ptr.inside = p.inside;
      const now = performance.now();
      if (ptr.has && p.inside && !reduce) {
        const sx = ptr.lastX;
        const sy = ptr.lastY;
        const dist = Math.hypot(p.x - sx, p.y - sy);
        const dtm = Math.max(8, now - ptr.lastT);
        const speed = dist / dtm; // px per ms
        const heat = Math.min(0.11, 0.012 + speed * 0.04);
        const stepPx = 10;
        const steps = Math.min(60, Math.ceil(dist / stepPx));
        for (let s = 1; s <= steps; s++) {
          const u = s / steps;
          trail.push({ x: sx + (p.x - sx) * u, y: sy + (p.y - sy) * u, amt: heat });
        }
      }
      ptr.lastX = p.x;
      ptr.lastY = p.y;
      ptr.lastT = now;
      ptr.has = p.inside;
    };
    const onDown = (ev: PointerEvent) => {
      if (reduce) return;
      const p = toLocal(ev.clientX, ev.clientY);
      if (!p.inside) return;
      addRipple(p.x, p.y, 0.98, 0.62, 30, 0.9, 520);
    };
    const onLeave = () => {
      ptr.inside = false;
      ptr.has = false;
    };

    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [density, fadeFrom, fadeTo, pitch]);

  return <canvas ref={ref} aria-hidden className={className} />;
}
