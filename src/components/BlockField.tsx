"use client";

import { useEffect, useRef } from "react";

/**
 * The signature hero visual, with no words: a field of faint dots ("silent") that
 * crystallise into solid ink blocks ("covered"), the same block as the logo's "Co".
 * A sparse scan sweeps across and flashes the signal orange as it finds and covers,
 * and the field answers the cursor. It flows around any element in the same
 * section marked `data-field-avoid` (use `data-field-avoid="text"` for tight,
 * per-line shapes around type), so it never sits behind words.
 *
 * Runs only while on screen and the tab is visible. Reduced motion gets one still frame.
 */

const DOT = [214, 214, 208];
const INK = [10, 10, 10];
const SIGNAL = [255, 90, 31];
const VS = 32;
const OS = 8;

type Box = { l: number; t: number; r: number; b: number };

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
  /** 0 to 1: how much of the field settles into solid blocks. */
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
    const MAX = pitch - 7;
    const MIN = 2.2;

    const lut: string[] = [];
    for (let i = 0; i <= VS; i++) {
      for (let j = 0; j <= OS; j++) {
        const a = i / VS;
        const b = j / OS;
        const c = [0, 1, 2].map((k) => {
          const base = DOT[k] + (INK[k] - DOT[k]) * a;
          return Math.round(base + (SIGNAL[k] - base) * b);
        });
        lut.push(`rgb(${c[0]},${c[1]},${c[2]})`);
      }
    }

    let W = 0;
    let H = 0;
    let cols = 0;
    let rows = 0;
    let v = new Float32Array(0);
    let o = new Float32Array(0);
    let mask = new Float32Array(0);
    let rnd = new Float32Array(0);
    let raf = 0;
    let running = false;
    let onScreen = false;
    let introDone = reduce;
    const t0 = performance.now();
    const ptr = { cx: -1e5, cy: -1e5, x: -1e5, y: -1e5 };

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
      const keepV = v.length === n ? v : null;
      v = keepV ?? new Float32Array(n);
      o = new Float32Array(n);
      mask = new Float32Array(n);
      rnd = new Float32Array(n);
      for (let i = 0; i < n; i++) rnd[i] = Math.random();

      const boxes: Box[] = [];
      host.querySelectorAll<HTMLElement>("[data-field-avoid]").forEach((el) => {
        for (const q of shapesOf(el)) boxes.push({ l: q.left - r.left, t: q.top - r.top, r: q.right - r.left, b: q.bottom - r.top });
      });

      for (let row = 0; row < rows; row++) {
        for (let c = 0; c < cols; c++) {
          const x = c * pitch + pitch / 2;
          const y = row * pitch + pitch / 2;
          const fx = smooth((x / W - fadeFrom) / Math.max(0.01, fadeTo - fadeFrom));
          const fy = smooth(Math.min(y, H - y) / 90);
          let d = 1e9;
          for (const b of boxes) {
            const dx = Math.max(b.l - x, 0, x - b.r);
            const dy = Math.max(b.t - y, 0, y - b.b);
            const dd = Math.hypot(dx, dy);
            if (dd < d) d = dd;
          }
          const fa = smooth((d - 16) / 44);
          mask[row * cols + c] = fx * fy * fa;
        }
      }
    };

    const draw = (time: number, still: boolean) => {
      const intro = still ? 1 : smooth(time / 1800);
      if (!still && intro >= 1) introDone = true;
      const rect = canvas.getBoundingClientRect();
      const px = ptr.cx - rect.left;
      const py = ptr.cy - rect.top;
      ptr.x += (px - ptr.x) * 0.2;
      ptr.y += (py - ptr.y) * 0.2;
      if (Math.abs(px) > 1e4) {
        ptr.x = px;
        ptr.y = py;
      }
      const R = 120;

      const diag = cols + rows * 0.55;
      const period = 7200;
      const front = still ? -1e3 : ((time % period) / period) * (diag + 20) - 10;
      const T = still ? 5200 : time;

      ctx.clearRect(0, 0, W, H);
      for (let row = 0; row < rows; row++) {
        for (let c = 0; c < cols; c++) {
          const i = row * cols + c;
          const m = mask[i];
          if (m < 0.015) continue;
          const x = c * pitch + pitch / 2;
          const y = row * pitch + pitch / 2;

          const n =
            Math.sin(c * 0.21 + T * 0.00031) +
            Math.sin(row * 0.27 - T * 0.00024) +
            Math.sin((c + row) * 0.115 + T * 0.00019) +
            0.85 * Math.sin((c - row) * 0.16 - T * 0.00027);
          const target = smooth((n - 1.75) / 0.8) * density * intro;

          if (still) {
            v[i] = target;
          } else {
            if (Math.abs(c + row * 0.55 - front) < 0.5 && rnd[i] < 0.16) {
              o[i] = 1;
              v[i] = 1;
            }
            const dist = Math.hypot(x - ptr.x, y - ptr.y);
            if (dist < R) {
              const k = (1 - dist / R) ** 2;
              if (v[i] < k) v[i] = k;
              if (dist < pitch * 0.85) o[i] = Math.max(o[i], 0.9);
            }
            v[i] += (target - v[i]) * 0.032;
            o[i] *= 0.93;
          }

          const vv = Math.min(1, Math.max(0, v[i]));
          const oo = Math.min(1, o[i]);
          const size = Math.max(MIN + (MAX - MIN) * vv, MIN + (MAX - MIN) * oo);
          ctx.globalAlpha = m;
          ctx.fillStyle = lut[Math.round(vv * VS) * (OS + 1) + Math.round(oo * OS)];
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now: number) => {
      if (!running) return;
      draw(now - t0, false);
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (reduce || running || !onScreen || document.hidden) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const redraw = () => {
      measure();
      if (reduce) draw(0, true);
      else if (!running && introDone) draw(performance.now() - t0, false);
    };

    measure();
    if (reduce) draw(0, true);

    const ro = new ResizeObserver(redraw);
    ro.observe(canvas);
    document.fonts?.ready.then(redraw).catch(() => {});

    const io = new IntersectionObserver(([e]) => {
      onScreen = e.isIntersecting;
      if (onScreen) start();
      else stop();
    });
    io.observe(canvas);

    const onVis = () => (document.hidden ? stop() : start());
    const onMove = (e: PointerEvent) => {
      ptr.cx = e.clientX;
      ptr.cy = e.clientY;
    };
    const onLeave = () => {
      ptr.cx = -1e5;
      ptr.cy = -1e5;
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [density, fadeFrom, fadeTo, pitch]);

  return <canvas ref={ref} aria-hidden className={className} />;
}
