/**
 * Guilloché for the portrait medallion: the fine, interlaced line work of banknotes,
 * share certificates and policy documents. Drawn once per size into a canvas; the
 * medallion turns the canvases with CSS, so animating it costs nothing per frame.
 *
 * Every pattern is a family of identical curves, each turned a little from the last.
 * Where the copies cross they weave the lattice that makes engraving hard to copy.
 */

const TAU = Math.PI * 2;
/** Overall strength of the line work. 1 is the original weight; raise it to darken the medallion. */
const TONE = 1.12;
const ink = (a: number) => `rgba(10,10,10,${Math.min(1, a * TONE).toFixed(3)})`;

type Ctx = CanvasRenderingContext2D;

/** A closed polar curve r(θ), centred on the canvas. */
function polar(ctx: Ctx, c: number, r: (t: number) => number, steps: number) {
  ctx.beginPath();
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * TAU;
    const rr = r(t);
    const x = c + rr * Math.cos(t);
    const y = c + rr * Math.sin(t);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

function circle(ctx: Ctx, c: number, r: number) {
  ctx.beginPath();
  ctx.arc(c, c, r, 0, TAU);
  ctx.stroke();
}

function prepare(canvas: HTMLCanvasElement, cssSize: number) {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  const px = Math.round(cssSize * dpr);
  if (canvas.width !== px) canvas.width = px;
  if (canvas.height !== px) canvas.height = px;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssSize, cssSize);
  ctx.lineJoin = "round";
  // Hairlines: thinner than a CSS pixel reads as engraving rather than drawing.
  ctx.lineWidth = Math.max(0.5, 0.55 / Math.max(1, dpr / 2));
  return ctx;
}

/**
 * The outer ring, which turns clockwise: a double rim, a milled edge of fine ticks and
 * the main woven band.
 */
export function drawOuter(canvas: HTMLCanvasElement, size: number) {
  const ctx = prepare(canvas, size);
  if (!ctx) return;
  const c = size / 2;
  const R = size / 2 - 1;

  ctx.strokeStyle = ink(0.42);
  circle(ctx, c, R);
  ctx.strokeStyle = ink(0.2);
  circle(ctx, c, R * 0.988);
  circle(ctx, c, R * 0.902);
  ctx.strokeStyle = ink(0.34);
  circle(ctx, c, R * 0.895);

  // Milled edge: radial ticks just inside the microprint ring.
  ctx.strokeStyle = ink(0.2);
  ctx.beginPath();
  const ticks = 360;
  for (let i = 0; i < ticks; i++) {
    const t = (i / ticks) * TAU;
    const long = i % 10 === 0;
    const r0 = R * (long ? 0.902 : 0.906);
    const r1 = R * 0.918;
    ctx.moveTo(c + r0 * Math.cos(t), c + r0 * Math.sin(t));
    ctx.lineTo(c + r1 * Math.cos(t), c + r1 * Math.sin(t));
  }
  ctx.stroke();

  // Woven band: one wave, turned sixteen times through a single lobe.
  const n = 18;
  const K = 16;
  ctx.strokeStyle = ink(0.15);
  for (let k = 0; k < K; k++) {
    const ph = (k / K) * TAU;
    polar(ctx, c, (t) => R * (0.8 + 0.068 * Math.sin(n * t + ph) * (0.78 + 0.22 * Math.cos(3 * t))), 900);
  }
}

/**
 * The inner ring, which turns the other way: a finer counter-band that crosses the outer
 * band, so the two drift through each other as a slow moiré.
 */
export function drawInner(canvas: HTMLCanvasElement, size: number) {
  const ctx = prepare(canvas, size);
  if (!ctx) return;
  const c = size / 2;
  const R = size / 2 - 1;

  ctx.strokeStyle = ink(0.1);
  const n = 19;
  const K = 12;
  for (let k = 0; k < K; k++) {
    const ph = (k / K) * TAU;
    polar(ctx, c, (t) => R * (0.79 + 0.05 * Math.sin(n * t - ph)), 900);
  }

  ctx.strokeStyle = ink(0.24);
  circle(ctx, c, R * 0.705);
  ctx.strokeStyle = ink(0.12);
  circle(ctx, c, R * 0.69);
}
