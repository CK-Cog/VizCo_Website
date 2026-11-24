/**
 * Build the affiliation logos (the band under the home hero) from the originals in
 * design/affiliations/source.
 *
 * Run from the repo root (uses sharp, which ships with Next.js):
 *
 *     node design/affiliations/build-logos.mjs
 *
 * Writes one file per logo to public/affiliations/, all in solid ink (#0a0a0a) on
 * transparent, cropped tight to the artwork:
 *     *.svg   vector sources: every colour set to ink, metadata and editor markup removed,
 *             the viewBox cut to the drawn shapes
 *     *.png   raster sources: the shape kept from the alpha channel, filled with ink
 * and design/affiliations/preview.png, every logo stacked on paper.
 *
 * Tight crops matter: the band sizes each logo by height, so any padding in a file would
 * make that logo look smaller than the rest. See docs/affiliations.md for sources and rules.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "../..");
const SRC = join(ROOT, "design/affiliations/source");
const OUT = join(ROOT, "public/affiliations");
const PREVIEW = join(ROOT, "design/affiliations/preview.png");

const INK = "#0a0a0a";
const PAPER = { r: 250, g: 250, b: 248 };
// Raster logos are scaled to this height. About 4x their largest size in the band on a
// high-density screen, and Next.js serves a smaller copy anyway.
const RASTER_HEIGHT = 240;

const VECTORS = ["stanford", "mit", "berkeley", "yale", "ucl", "microsoft", "coca-cola", "hm", "ing", "enkrypt-ai"];
const RASTERS = { "enterprise-ireland": "enterprise-ireland.png", hban: "hban.webp" };

/** Every fill and stroke to ink, with editor namespaces, comments and metadata removed. */
function toInk(svg) {
  // White and "none" stay: in these files white only appears inside clip paths.
  const keep = (c) => /^(none|white|#fff(fff)?|transparent|url\(.*)$/i.test(c.trim());
  return svg
    .replace(/<\?xml[^>]*\?>|<!DOCTYPE[^>]*>|<!--[\s\S]*?-->/gi, "")
    .replace(/<metadata[\s\S]*?<\/metadata>/g, "")
    .replace(/<sodipodi:[^>]*\/>|<sodipodi:[\s\S]*?<\/sodipodi:[^>]*>/g, "")
    // Yale's file spells it "viewbox", which browsers ignore
    .replace(/\sviewbox=/g, " viewBox=")
    // inkscape:, sodipodi:, xml: and other prefixed attributes, and their declarations
    .replace(/\s(?!xlink:)(?!xmlns)[A-Za-z][\w.-]*:[\w-]+="[^"]*"/g, "")
    .replace(/\sxmlns:(?!xlink)[\w-]+="[^"]*"/g, "")
    .replace(/(fill|stroke)="([^"]+)"/g, (m, k, c) => (keep(c) ? m : `${k}="${INK}"`))
    .replace(/(fill|stroke)\s*:\s*([^;"}]+)/g, (m, k, c) => (keep(c) ? m : `${k}:${INK}`))
    .replace(/>\s+</g, "><")
    .trim();
}

/** The root <svg> tag and its coordinate box (viewBox, or width and height without one). */
function rootBox(svg) {
  const open = svg.match(/<svg\b[^>]*>/)[0];
  const num = (n) => {
    const m = open.match(new RegExp(`\\s${n}="([\\d.]+)(px)?"`));
    return m ? parseFloat(m[1]) : null;
  };
  const vb = open.match(/\sviewBox="([^"]+)"/);
  const [x, y, w, h] = vb ? vb[1].trim().split(/[\s,]+/).map(Number) : [0, 0, num("width"), num("height")];
  return { open, x, y, w, h };
}

/** Renders the SVG large, measures the drawn pixels, and cuts the viewBox to them. */
async function buildVector(name) {
  const svg = toInk(readFileSync(join(SRC, `${name}.svg`), "utf8"));
  const { open, x, y, w, h } = rootBox(svg);

  const k = 2400 / w; // render scale, px per user unit
  const probeOpen = open
    .replace(/\s(width|height|viewBox|x|y|enable-background|style)="[^"]*"/g, "")
    .replace("<svg", `<svg width="${w * k}" height="${h * k}" viewBox="${x} ${y} ${w} ${h}"`);
  const { info } = await sharp(Buffer.from(svg.replace(open, probeOpen)))
    .png()
    .trim({ threshold: 1 })
    .toBuffer({ resolveWithObject: true });

  const r = (n) => +n.toFixed(2);
  const bx = r(x - info.trimOffsetLeft / k);
  const by = r(y - info.trimOffsetTop / k);
  const bw = r(info.width / k);
  const bh = r(info.height / k);
  // Root attributes worth keeping (inherited fill rules, the xlink namespace if used)
  const kept = (open.match(/\s(fill|fill-rule|clip-rule|xmlns:xlink)="[^"]*"/g) || []).join("");
  const out = svg.replace(
    open,
    `<svg xmlns="http://www.w3.org/2000/svg" width="${bw}" height="${bh}" viewBox="${bx} ${by} ${bw} ${bh}"${kept}>`,
  );
  writeFileSync(join(OUT, `${name}.svg`), out);
  return { name, file: `${name}.svg`, width: bw, height: bh, buffer: Buffer.from(out) };
}

/** Keeps the logo's shape from its alpha channel, fills it with ink, and trims it. */
async function buildRaster(name, file) {
  const scaled = sharp(join(SRC, file)).ensureAlpha().resize({ height: RASTER_HEIGHT * 1.2 });
  const { data: alpha, info } = await scaled.extractChannel("alpha").raw().toBuffer({ resolveWithObject: true });
  const ink = await sharp({ create: { width: info.width, height: info.height, channels: 3, background: INK } })
    .joinChannel(alpha, { raw: { width: info.width, height: info.height, channels: 1 } })
    .png()
    .toBuffer();
  const trimmed = await sharp(ink).trim({ threshold: 1 }).toBuffer();
  const { data, info: out } = await sharp(trimmed)
    .resize({ height: RASTER_HEIGHT })
    .png({ compressionLevel: 9, palette: false })
    .toBuffer({ resolveWithObject: true });
  writeFileSync(join(OUT, `${name}.png`), data);
  return { name, file: `${name}.png`, width: out.width, height: out.height, buffer: data };
}

/** Every logo at the same height, one per row, on page paper. */
async function preview(logos) {
  const ROW = 96;
  const GAP = 40;
  const tiles = await Promise.all(
    logos.map((l) =>
      sharp(l.buffer, l.file.endsWith(".svg") ? { density: (72 * ROW) / l.height } : {})
        .resize({ height: ROW })
        .png()
        .toBuffer({ resolveWithObject: true }),
    ),
  );
  const width = Math.max(...tiles.map((t) => t.info.width)) + GAP * 2;
  let top = GAP;
  const layers = tiles.map((t) => {
    const layer = { input: t.data, top, left: GAP };
    top += ROW + GAP;
    return layer;
  });
  await sharp({ create: { width, height: top, channels: 3, background: PAPER } })
    .composite(layers)
    .png()
    .toFile(PREVIEW);
}

const logos = [
  ...(await Promise.all(VECTORS.map(buildVector))),
  ...(await Promise.all(Object.entries(RASTERS).map(([n, f]) => buildRaster(n, f)))),
];
await preview(logos);
for (const l of logos) console.log(`${l.file.padEnd(24)} ${String(l.width).padStart(8)} x ${l.height}`);
