"use client";

import { useEffect, useRef } from "react";

/**
 * The hero field: Conway's Game of Life on a faint dot grid.
 *
 * Restrained by design. A newborn cell appears in the signal orange and cools through
 * coral to warm stone as it ages, so stable structures sit quietly and only the living
 * fronts carry colour. Cells ease in and out instead of blinking.
 *
 * - Moving the cursor sparks a little life along its path; nearby cells swell slightly.
 * - A click launches a glider in the direction the cursor was moving.
 * - Gliders and the odd methuselah enter on their own, so the field never settles.
 *
 * Cells live only where the field is visible: it fades in from the left and flows around
 * anything in the same section marked `data-field-avoid` (`="text"` for tight, per-line
 * shapes around type), so it never sits behind words.
 *
 * Nothing runs until the browser is idle after load, so first paint is untouched. It
 * pauses off screen and in background tabs; reduced motion gets one still frame.
 */

const AGE_STOPS: [number, [number, number, number]][] = [
  [0, [255, 90, 31]],
  [1, [255, 124, 72]],
  [2, [244, 156, 122]],
  [4, [228, 189, 170]],
  [7, [212, 203, 193]],
  [12, [196, 190, 182]],
];
const MAX_AGE = 12;

function ageRamp() {
  const out: string[] = [];
  for (let a = 0; a <= MAX_AGE; a++) {
    let k = 0;
    while (k < AGE_STOPS.length - 2 && a > AGE_STOPS[k + 1][0]) k++;
    const [a0, c0] = AGE_STOPS[k];
    const [a1, c1] = AGE_STOPS[k + 1];
    const u = Math.min(1, Math.max(0, (a - a0) / (a1 - a0)));
    const c = [0, 1, 2].map((j) => Math.round(c0[j] + (c1[j] - c0[j]) * u));
    out.push(`rgb(${c[0]},${c[1]},${c[2]})`);
  }
  return out;
}

/* Patterns as [x, y] cells. */
const GLIDER: [number, number][] = [
  [1, 0],
  [2, 1],
  [0, 2],
  [1, 2],
  [2, 2],
]; // travels +x, +y
const R_PENTOMINO: [number, number][] = [
  [1, 0],
  [2, 0],
  [0, 1],
  [1, 1],
  [1, 2],
];
const ACORN: [number, number][] = [
  [1, 0],
  [3, 1],
  [0, 2],
  [1, 2],
  [4, 2],
  [5, 2],
  [6, 2],
];

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

type Deadline = { timeRemaining: () => number };
type IdleWindow = {
  requestIdleCallback?: (cb: (d: Deadline) => void, opts?: { timeout: number }) => number;
  cancelIdleCallback?: (id: number) => void;
};

/** Run when the browser is idle (after load and hydration), or shortly after where unsupported. */
function whenIdle(cb: (d: Deadline) => void): () => void {
  const w = window as unknown as IdleWindow;
  if (w.requestIdleCallback && w.cancelIdleCallback) {
    const id = w.requestIdleCallback(cb, { timeout: 2000 });
    return () => w.cancelIdleCallback?.(id);
  }
  const id = window.setTimeout(() => cb({ timeRemaining: () => 0 }), 300);
  return () => window.clearTimeout(id);
}

export default function LifeField({
  className = "",
  quiet = false,
  fadeFrom = 0.36,
  fadeTo = 0.74,
  pitch = 16,
}: {
  className?: string;
  /** Sparser, for page heroes. */
  quiet?: boolean;
  fadeFrom?: number;
  fadeTo?: number;
  pitch?: number;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    if (!canvas || !host) return;

    let disposed = false;
    let cleanup: (() => void) | null = null;
    let cancel: (() => void) | null = null;

    const init = () => {
      if (disposed) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const ramp = ageRamp();
      const CELL = pitch - 6;
      const DOT = 1.6;
      const PERIOD = 260;
      const LENS = 96;

      const dots = document.createElement("canvas");
      const dctx = dots.getContext("2d");

      // Live readouts anywhere in the same section (see LifeCaption)
      const genEls = Array.from(host.querySelectorAll<HTMLElement>("[data-life-gen]"));
      const popEls = Array.from(host.querySelectorAll<HTMLElement>("[data-life-pop]"));
      const readout = () => {
        const g = String(gen).padStart(4, "0");
        for (const el of genEls) el.textContent = g;
        for (const el of popEls) el.textContent = String(pop);
      };

      let W = 0;
      let H = 0;
      let cols = 0;
      let rows = 0;
      let dpr = 1;
      let alive = new Uint8Array(0);
      let next = new Uint8Array(0);
      let age = new Uint8Array(0);
      let wall = new Uint8Array(0);
      let vis = new Float32Array(0);
      let mask = new Float32Array(0);
      let live = new Int32Array(0);
      let core = new Int32Array(0); // well inside the visible field
      let centre = { c: 0, r: 0 };
      let gen = 0;
      let pop = 0;

      const idx = (c: number, r: number) => r * cols + c;
      const setAlive = (c: number, r: number) => {
        if (c < 0 || r < 0 || c >= cols || r >= rows) return;
        const i = idx(c, r);
        if (wall[i] || alive[i]) return;
        alive[i] = 1;
        age[i] = 0;
      };
      const place = (pattern: [number, number][], c: number, r: number, sx = 1, sy = 1) => {
        const w = Math.max(...pattern.map((p) => p[0]));
        const h = Math.max(...pattern.map((p) => p[1]));
        for (const [x, y] of pattern) setAlive(c + (sx > 0 ? x : w - x), r + (sy > 0 ? y : h - y));
      };

      // Measuring is split so the first pass can run in small idle slices.
      let boxes: { l: number; t: number; r: number; b: number }[] = [];
      let vis1: number[] = [];
      let core1: number[] = [];
      let sc = 0;
      let sr = 0;

      const measureStart = () => {
        const rect = canvas.getBoundingClientRect();
        if (rect.width < 2 || rect.height < 2) return false;
        W = rect.width;
        H = rect.height;
        dpr = Math.min(2, window.devicePixelRatio || 1);
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        cols = Math.ceil(W / pitch);
        rows = Math.ceil(H / pitch);
        const n = cols * rows;
        alive = new Uint8Array(n);
        next = new Uint8Array(n);
        age = new Uint8Array(n);
        wall = new Uint8Array(n);
        vis = new Float32Array(n);
        mask = new Float32Array(n);
        boxes = [];
        host.querySelectorAll<HTMLElement>("[data-field-avoid]").forEach((el) => {
          for (const q of shapesOf(el)) boxes.push({ l: q.left - rect.left, t: q.top - rect.top, r: q.right - rect.left, b: q.bottom - rect.top });
        });
        vis1 = [];
        core1 = [];
        sc = 0;
        sr = 0;
        return true;
      };

      const maskRows = (r0: number, r1: number) => {
        for (let r = r0; r < Math.min(rows, r1); r++) {
          for (let c = 0; c < cols; c++) {
            const x = c * pitch + pitch / 2;
            const y = r * pitch + pitch / 2;
            const fx = smooth((x / W - fadeFrom) / Math.max(0.01, fadeTo - fadeFrom));
            const fy = smooth(Math.min(y, H - y) / 110);
            const i = idx(c, r);
            if (fx * fy < 0.015) {
              wall[i] = 1;
              continue;
            }
            let d = 1e9;
            for (const b of boxes) {
              const dx = Math.max(b.l - x, 0, x - b.r);
              const dy = Math.max(b.t - y, 0, y - b.b);
              const dd = Math.hypot(dx, dy);
              if (dd < d) d = dd;
            }
            const m = fx * fy * smooth((d - 14) / 46);
            mask[i] = m;
            if (m < 0.08) wall[i] = 1;
            if (m > 0.015) vis1.push(i);
            if (m > 0.6) {
              core1.push(i);
              sc += c;
              sr += r;
            }
          }
        }
      };

      const measureEnd = () => {
        live = Int32Array.from(vis1);
        core = Int32Array.from(core1);
        centre = core1.length ? { c: sc / core1.length, r: sr / core1.length } : { c: cols / 2, r: rows / 2 };
      };

      const measure = () => {
        if (!measureStart()) return false;
        maskRows(0, rows);
        measureEnd();
        return true;
      };

      // The dot grid never changes, so draw it once per size.
      const drawDots = () => {
        dots.width = canvas.width;
        dots.height = canvas.height;
        if (dctx) {
          dctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          dctx.clearRect(0, 0, W, H);
          dctx.fillStyle = "#0a0a0a";
          for (let k = 0; k < live.length; k++) {
            const i = live[k];
            dctx.globalAlpha = mask[i] * 0.13;
            const c = i % cols;
            const r = (i / cols) | 0;
            dctx.fillRect(c * pitch + pitch / 2 - DOT / 2, r * pitch + pitch / 2 - DOT / 2, DOT, DOT);
          }
          dctx.globalAlpha = 1;
        }
      };

      const seed = () => {
        const density = quiet ? 0.1 : 0.15;
        for (let k = 0; k < core.length; k++) {
          const i = core[k];
          if (Math.random() < density * mask[i]) {
            alive[i] = 1;
            age[i] = MAX_AGE;
          }
        }
        for (let s = 0; s < (quiet ? 1 : 3) && core.length; s++) {
          const i = core[(Math.random() * core.length) | 0];
          place(R_PENTOMINO, i % cols, (i / cols) | 0);
        }
      };

      const glideInward = () => {
        if (!core.length) return;
        // Enter from the outer part of the field, heading towards its centre
        for (let tries = 0; tries < 20; tries++) {
          const i = core[(Math.random() * core.length) | 0];
          const c = i % cols;
          const r = (i / cols) | 0;
          const far = Math.hypot(c - centre.c, r - centre.r);
          if (far < Math.min(cols, rows) * 0.25) continue;
          place(GLIDER, c, r, centre.c >= c ? 1 : -1, centre.r >= r ? 1 : -1);
          return;
        }
      };

      const step = () => {
        let count = 0;
        for (let r = 0; r < rows; r++) {
          const up = r > 0;
          const down = r < rows - 1;
          for (let c = 0; c < cols; c++) {
            const i = r * cols + c;
            if (wall[i]) {
              next[i] = 0;
              continue;
            }
            const left = c > 0;
            const right = c < cols - 1;
            let n = 0;
            if (up) {
              const u = i - cols;
              n += alive[u];
              if (left) n += alive[u - 1];
              if (right) n += alive[u + 1];
            }
            if (down) {
              const d = i + cols;
              n += alive[d];
              if (left) n += alive[d - 1];
              if (right) n += alive[d + 1];
            }
            if (left) n += alive[i - 1];
            if (right) n += alive[i + 1];
            const a = alive[i];
            const lives = a ? n === 2 || n === 3 : n === 3;
            next[i] = lives ? 1 : 0;
            if (lives) {
              age[i] = a ? Math.min(MAX_AGE, age[i] + 1) : 0;
              count++;
            }
          }
        }
        const t = alive;
        alive = next;
        next = t;
        pop = count;
        gen++;

        // New entries keep the piece moving, never crowding it
        const cap = core.length * (quiet ? 0.1 : 0.16);
        if (pop < cap) {
          if (gen % (quiet ? 26 : 16) === 0) glideInward();
          if (pop < cap * 0.35 && gen % 45 === 0 && core.length) {
            const i = core[(Math.random() * core.length) | 0];
            place(Math.random() < 0.5 ? R_PENTOMINO : ACORN, i % cols, (i / cols) | 0);
          }
        }
        readout();
      };

      const ptr = {
        x: -1e5,
        y: -1e5,
        inside: false,
        down: false,
        travel: 0,
        vx: 0,
        vy: 0,
        lx: 0,
        ly: 0,
      };

      const render = (ease: number) => {
        ctx.clearRect(0, 0, W, H);
        ctx.drawImage(dots, 0, 0, W, H);
        const lens = ptr.inside && !reduce;
        const strength = quiet ? 0.75 : 1;
        for (let k = 0; k < live.length; k++) {
          const i = live[k];
          const target = alive[i];
          let v = vis[i];
          v += (target - v) * ease;
          vis[i] = v;
          if (v < 0.03) continue;
          const c = i % cols;
          const r = (i / cols) | 0;
          const x = c * pitch + pitch / 2;
          const y = r * pitch + pitch / 2;
          const grow = 1 - (1 - v) * (1 - v);
          let s = DOT + (CELL - DOT) * grow;
          if (lens) {
            const d = Math.hypot(x - ptr.x, y - ptr.y);
            if (d < LENS) {
              const f = 1 - d / LENS;
              s *= 1 + 0.38 * f * f;
            }
          }
          ctx.globalAlpha = mask[i] * (0.3 + 0.7 * v) * strength;
          ctx.fillStyle = ramp[age[i]];
          ctx.fillRect(x - s / 2, y - s / 2, s, s);
        }
        ctx.globalAlpha = 1;
      };

      const reveal = () => {
        for (let k = 0; k < live.length; k++) vis[live[k]] = alive[live[k]];
        render(1);
        canvas.style.opacity = "1";
      };

      if (!measureStart()) return;

      // Set up in small slices of idle time, never in one long task: measure, draw the
      // grid, seed, then settle the soup off screen so the first thing seen is organic.
      const queue: (() => void)[] = [];
      const ROWS_PER_SLICE = 10;
      for (let r = 0; r < Math.ceil(H / pitch) + ROWS_PER_SLICE; r += ROWS_PER_SLICE) queue.push(() => maskRows(r, r + ROWS_PER_SLICE));
      queue.push(measureEnd, drawDots, seed);
      for (let g = 0; g < 5; g++)
        queue.push(() => {
          for (let k = 0; k < 8; k++) step();
        });
      queue.push(reveal);
      if (!reduce) queue.push(() => begin());
      const pump = (d: Deadline) => {
        if (disposed) return;
        do {
          queue.shift()?.();
        } while (queue.length && d.timeRemaining() > 8);
        if (queue.length) cancel = whenIdle(pump);
      };
      cancel = whenIdle(pump);
      return;

      function begin() {
        if (!canvas) return;
        let raf = 0;
        let running = false;
        let onScreen = true;
        let last = performance.now();
        let acc = 0;

        const frame = (now: number) => {
          if (!running) return;
          const dt = Math.min(80, now - last);
          last = now;
          acc += dt;
          if (acc >= PERIOD) {
            acc = acc % PERIOD;
            step();
          }
          render(1 - Math.pow(1 - 0.13, dt / 16.67));
          raf = requestAnimationFrame(frame);
        };
        const start = () => {
          if (running || !onScreen || document.hidden) return;
          running = true;
          last = performance.now();
          raf = requestAnimationFrame(frame);
        };
        const stop = () => {
          running = false;
          cancelAnimationFrame(raf);
        };

        let resizeTimer = 0;
        const ro = new ResizeObserver(() => {
          window.clearTimeout(resizeTimer);
          resizeTimer = window.setTimeout(() => {
            const prevW = W;
            const prevH = H;
            const r = canvas.getBoundingClientRect();
            if (Math.abs(r.width - prevW) < 1 && Math.abs(r.height - prevH) < 1) return;
            if (!measure()) return;
            drawDots();
            seed();
            for (let g = 0; g < 16; g++) step();
            reveal();
          }, 180);
        });
        ro.observe(canvas);

        const io = new IntersectionObserver(([e]) => {
          onScreen = e.isIntersecting;
          if (onScreen) start();
          else stop();
        });
        io.observe(canvas);

        const local = (cx: number, cy: number) => {
          const r = canvas.getBoundingClientRect();
          return {
            x: cx - r.left,
            y: cy - r.top,
            inside: cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom,
          };
        };
        const blocked = (t: EventTarget | null) => t instanceof Element && !!t.closest("a, button, input, textarea, summary, [data-note], [data-life-ui]");

        const onMove = (ev: PointerEvent) => {
          const p = local(ev.clientX, ev.clientY);
          const dx = p.x - ptr.lx;
          const dy = p.y - ptr.ly;
          ptr.vx = ptr.vx * 0.7 + dx * 0.3;
          ptr.vy = ptr.vy * 0.7 + dy * 0.3;
          ptr.lx = p.x;
          ptr.ly = p.y;
          ptr.x = p.x;
          ptr.y = p.y;
          ptr.inside = p.inside && !blocked(ev.target);
          if (!ptr.inside) return;
          ptr.travel += Math.hypot(dx, dy);
          const gap = ptr.down ? pitch * 0.6 : pitch * 1.1;
          if (ptr.travel < gap) return;
          ptr.travel = 0;
          const c = Math.floor(p.x / pitch);
          const r = Math.floor(p.y / pitch);
          if (ptr.down) {
            setAlive(c, r);
            setAlive(c + (Math.random() < 0.5 ? 1 : -1), r);
          } else if (Math.random() < 0.55) {
            setAlive(c + ((Math.random() * 3) | 0) - 1, r + ((Math.random() * 3) | 0) - 1);
            if (Math.random() < 0.5) setAlive(c + ((Math.random() * 3) | 0) - 1, r + ((Math.random() * 3) | 0) - 1);
          }
        };
        const onDown = (ev: PointerEvent) => {
          if (ev.button !== 0 || blocked(ev.target)) return;
          const p = local(ev.clientX, ev.clientY);
          if (!p.inside) return;
          ptr.down = true;
          const sx = Math.abs(ptr.vx) > 0.3 ? Math.sign(ptr.vx) : Math.random() < 0.5 ? -1 : 1;
          const sy = Math.abs(ptr.vy) > 0.3 ? Math.sign(ptr.vy) : 1;
          place(GLIDER, Math.floor(p.x / pitch) - 1, Math.floor(p.y / pitch) - 1, sx, sy);
        };
        const onUp = () => {
          ptr.down = false;
        };
        const onLeave = () => {
          ptr.inside = false;
          ptr.down = false;
        };
        const onVis = () => (document.hidden ? stop() : start());

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerdown", onDown, { passive: true });
        window.addEventListener("pointerup", onUp, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);
        document.addEventListener("visibilitychange", onVis);
        start();

        cleanup = () => {
          stop();
          window.clearTimeout(resizeTimer);
          ro.disconnect();
          io.disconnect();
          window.removeEventListener("pointermove", onMove);
          window.removeEventListener("pointerdown", onDown);
          window.removeEventListener("pointerup", onUp);
          document.documentElement.removeEventListener("pointerleave", onLeave);
          document.removeEventListener("visibilitychange", onVis);
        };
      }
    };

    // Wait for fonts (the field flows around the type) and for an idle moment.
    const ready = document.fonts?.ready ?? Promise.resolve();
    ready
      .catch(() => undefined)
      .then(() => {
        if (!disposed) cancel = whenIdle(init);
      });

    return () => {
      disposed = true;
      cancel?.();
      cleanup?.();
    };
  }, [quiet, fadeFrom, fadeTo, pitch]);

  return <canvas ref={ref} aria-hidden className={`opacity-0 transition-opacity duration-[1800ms] ease-out ${className}`} />;
}
