/**
 * Build the site icons from the round badge in design/favicon/source.webp.
 *
 * Run from the repo root (uses sharp, which ships with Next.js):
 *
 *     node design/favicon/build-icons.mjs
 *
 * Writes:
 *     src/app/favicon.ico        16, 32 and 48px (browser tabs, bookmarks, Google)
 *     src/app/icon.png           512px (modern browsers, search engines, the JSON-LD logo)
 *     src/app/icon1.png          32px, the 32px frame again as a PNG
 *     src/app/apple-icon.png     180px on a paper square (iPhone home screen)
 *     design/favicon/preview.png the set on light and dark tab bars
 *
 * Next.js links the src/app files from <head> automatically. See docs/favicon.md for the why.
 */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");
const SRC = join(ROOT, "design/favicon/source.webp");
const APP = join(ROOT, "src/app");
const PREVIEW = join(ROOT, "design/favicon/preview.png");

const PAPER = { r: 250, g: 250, b: 248 }; // page paper, same as the hero portrait's PAPER
// How far inside the ring's traced outer edge to cut, in source pixels, so none of the
// white the badge was drawn on survives as a pale fringe.
const INSET = 1.25;
// Light sharpening after downscaling, per size. The engraving's fine lines average out
// to grey at tab sizes; this keeps the eyes, nose and ring edge readable.
const SHARPEN = { 16: 0.6, 32: 0.5, 48: 0.4 };

/** The badge cut out of its white background, as a square RGBA PNG. */
async function cutOut() {
  const { data, info } = await sharp(SRC).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  // Darkest channel per pixel: the white page is ~254 everywhere, and every colour in the
  // ring (grey, tan, orange) has at least one channel far below that.
  const dark = new Float32Array(W * H);
  for (let i = 0; i < W * H; i++) dark[i] = Math.min(data[i * 3], data[i * 3 + 1], data[i * 3 + 2]);
  const at = (x, y) => {
    if (x < 0 || y < 0 || x >= W - 1 || y >= H - 1) return 255;
    const x0 = Math.floor(x), y0 = Math.floor(y), fx = x - x0, fy = y - y0, i = y0 * W + x0;
    return (dark[i] * (1 - fx) + dark[i + 1] * fx) * (1 - fy) + (dark[i + W] * (1 - fx) + dark[i + W + 1] * fx) * fy;
  };

  // Centre: the middle of everything that isn't page white
  let x0 = W, x1 = 0, y0 = H, y1 = 0;
  for (let y = 0; y < H; y++)
    for (let x = 0; x < W; x++)
      if (dark[y * W + x] < 235) {
        x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
      }
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;

  // The ring is drawn by hand, so trace its outer edge rather than assume a circle:
  // walk in from outside along each ray until the ring starts.
  const N = 720;
  const reach = Math.max(x1 - x0, y1 - y0) / 2 + 24;
  const edge = Array.from({ length: N }, (_, k) => {
    const a = (k / N) * 2 * Math.PI, dx = Math.cos(a), dy = Math.sin(a);
    for (let r = reach; r > 0; r -= 0.25) if (at(cx + dx * r, cy + dy * r) < 150) return r;
    return 0;
  });
  // Smooth out pixel noise in the trace (about 2 degrees either side)
  const radius = edge.map((_, k) => {
    let sum = 0;
    for (let j = -4; j <= 4; j++) sum += edge[(k + j + N) % N];
    return sum / 9 - INSET;
  });

  const path = radius
    .map((r, k) => {
      const a = (k / N) * 2 * Math.PI;
      return `${k ? "L" : "M"}${(cx + Math.cos(a) * r).toFixed(2)} ${(cy + Math.sin(a) * r).toFixed(2)}`;
    })
    .join("") + "Z";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><path d="${path}" fill="#fff"/></svg>`;
  const alpha = await sharp(Buffer.from(svg)).extractChannel(3).raw().toBuffer();

  // Two passes: sharp crops before it joins channels, so in one chain the mask would land
  // offset from the picture.
  const masked = await sharp(data, { raw: { width: W, height: H, channels: 3 } })
    .joinChannel(alpha, { raw: { width: W, height: H, channels: 1 } })
    .png()
    .toBuffer();
  const side = Math.ceil(2 * Math.max(...radius)) + 2;
  return sharp(masked)
    .extract({ left: Math.round(cx - side / 2), top: Math.round(cy - side / 2), width: side, height: side })
    .png()
    .toBuffer();
}

const frame = (badge, size) => {
  let img = sharp(badge).resize(size, size, { kernel: "lanczos3" });
  if (SHARPEN[size]) img = img.sharpen({ sigma: SHARPEN[size] });
  return img.png({ compressionLevel: 9 }).toBuffer();
};

/** A .ico holding PNG frames (supported by every current browser). */
function ico(frames) {
  const head = Buffer.alloc(6 + 16 * frames.length);
  head.writeUInt16LE(1, 2); // type: icon
  head.writeUInt16LE(frames.length, 4);
  let offset = head.length;
  frames.forEach(({ size, png }, i) => {
    const e = 6 + 16 * i;
    head.writeUInt8(size % 256, e);
    head.writeUInt8(size % 256, e + 1);
    head.writeUInt16LE(1, e + 4); // colour planes
    head.writeUInt16LE(32, e + 6); // bits per pixel
    head.writeUInt32LE(png.length, e + 8);
    head.writeUInt32LE(offset, e + 12);
    offset += png.length;
  });
  return Buffer.concat([head, ...frames.map((f) => f.png)]);
}

/** The set at real size and enlarged, on a light and a dark tab bar. */
async function preview(frames, apple, icon) {
  const big = (png, size, scale) => sharp(png).resize(size * scale, size * scale, { kernel: "nearest" }).png().toBuffer();
  const W = 760, ROW = 220;
  const rows = [
    { top: 0, bg: { r: 222, g: 225, b: 230 } },
    { top: ROW, bg: { r: 32, g: 33, b: 36 } },
  ];
  const layers = [];
  for (const { top, bg } of rows) {
    layers.push({ input: { create: { width: W, height: ROW, channels: 4, background: bg } }, left: 0, top });
    let x = 24;
    for (const { size, png } of frames) {
      layers.push({ input: png, left: x, top: top + 24 });
      x += size + 16;
    }
    x = 24;
    for (const [size, scale] of [[16, 8], [32, 4], [48, 3]]) {
      layers.push({ input: await big(frames.find((f) => f.size === size).png, size, scale), left: x, top: top + 76 });
      x += size * scale + 20;
    }
    layers.push({ input: await sharp(icon).resize(128, 128).png().toBuffer(), left: x + 4, top: top + 76 });
    layers.push({ input: await sharp(apple).resize(128, 128).png().toBuffer(), left: x + 152, top: top + 76 });
  }
  return sharp({ create: { width: W, height: ROW * 2, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite(layers)
    .png({ compressionLevel: 9 })
    .toBuffer();
}

const badge = await cutOut();
const frames = await Promise.all([16, 32, 48].map(async (size) => ({ size, png: await frame(badge, size) })));
// About 250KB as true colour; a 256-colour palette keeps the engraving and the ring's
// gradient intact at two thirds of that.
const icon = await sharp(badge).resize(512, 512, { kernel: "lanczos3" }).png({ palette: true, colours: 256, dither: 0.6 }).toBuffer();
// iOS rounds the corners itself and fills transparency with black, so this one is an
// opaque paper square with the badge inset from the edges.
const apple = await sharp({ create: { width: 180, height: 180, channels: 3, background: PAPER } })
  .composite([{ input: await sharp(badge).resize(164, 164, { kernel: "lanczos3" }).png().toBuffer(), left: 8, top: 8 }])
  .removeAlpha()
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(join(APP, "favicon.ico"), ico(frames));
writeFileSync(join(APP, "icon.png"), icon);
writeFileSync(join(APP, "icon1.png"), frames.find((f) => f.size === 32).png);
writeFileSync(join(APP, "apple-icon.png"), apple);
writeFileSync(PREVIEW, await preview(frames, apple, icon));
console.log("wrote favicon.ico, icon.png, icon1.png, apple-icon.png, preview.png");
