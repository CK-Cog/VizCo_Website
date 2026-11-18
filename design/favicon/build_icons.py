"""Build the site icons from the hound mark in design/favicon/source.webp.

Run from the repo root (needs Pillow and numpy):

    python3 design/favicon/build_icons.py

Writes:
    src/app/favicon.ico      16, 32 and 48px, tuned per size (browser tabs, Google)
    src/app/icon.png         512px (modern browsers, search engines, the JSON-LD logo)
    src/app/icon1.png        32px, the tuned 32px frame again as a PNG
    src/app/apple-icon.png   180px with the double ring (iPhone home screen)

Next.js links all of them from <head> automatically. See docs/favicon.md for the why.
"""

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "design/favicon/source.webp"
APP = ROOT / "src/app"

INK = (10, 10, 10, 255)  # --ink-ish near-black, the site's text and block colour
PAPER = (250, 250, 248, 255)  # page paper, same as the hero portrait's PAPER

# Stroke thickening, in output pixels, for the small sizes. The source is line art,
# so without this the thin outline of the face drops below a pixel and vanishes.
BOLDEN = {16: 0.9, 32: 0.7, 48: 0.5}


def load_ink() -> np.ndarray:
    """Ink coverage 0..1 from the black on white source, flipped to face right."""
    lum = np.asarray(Image.open(SRC).convert("L")).astype(np.float32) / 255
    ink = np.clip((0.85 - lum) / (0.85 - 0.25), 0, 1)  # >=0.85 paper, <=0.25 solid ink
    return ink[:, ::-1]


def square_crop(a: np.ndarray, pad: float) -> Image.Image:
    ys, xs = np.where(a > 0.5)
    cx, cy = (xs.min() + xs.max()) / 2, (ys.min() + ys.max()) / 2
    s = max(xs.max() - xs.min(), ys.max() - ys.min()) * (1 + 2 * pad)
    img = Image.fromarray((a * 255).astype(np.uint8))
    return img.crop((int(cx - s / 2), int(cy - s / 2), int(cx + s / 2), int(cy + s / 2)))


def masks() -> tuple[Image.Image, Image.Image]:
    ink = load_ink()
    h, w = ink.shape
    ys, xs = np.where(ink > 0.5)
    cx, cy = (xs.min() + xs.max()) / 2, (ys.min() + ys.max()) / 2
    r = (xs.max() - xs.min()) / 2
    yy, xx = np.mgrid[0:h, 0:w]
    head = ink * (np.hypot(xx - cx, yy - cy) < r * 0.80)  # drop the double ring
    return square_crop(head, 0.06), square_crop(ink, 0.02)


def tile(mask: Image.Image, size: int, inset: float, shape: str, bolden: float = 0.0) -> Image.Image:
    work = min(2048, size * 16)  # supersample, then box-filter down
    inner = int(work * (1 - 2 * inset))
    m = mask.resize((inner, inner), Image.LANCZOS)
    r = int(round(bolden * work / size / 2))
    if r > 0:
        m = m.filter(ImageFilter.MaxFilter(2 * r + 1))
    shape_mask = Image.new("L", (work, work), 0)
    d = ImageDraw.Draw(shape_mask)
    if shape == "round":
        d.rounded_rectangle((0, 0, work - 1, work - 1), radius=int(work * 0.22), fill=255)
    else:
        d.rectangle((0, 0, work, work), fill=255)
    out = Image.new("RGBA", (work, work), (0, 0, 0, 0))
    out.paste(Image.new("RGBA", (work, work), INK), (0, 0), shape_mask)
    off = int(work * inset)
    out.paste(Image.new("RGBA", m.size, PAPER), (off, off), m)
    return out.resize((size, size), Image.BOX if size <= 64 else Image.LANCZOS)


def main() -> None:
    head, full = masks()

    small = [tile(head, s, 0.06, "round", BOLDEN[s]) for s in (16, 32, 48)]
    small[-1].save(APP / "favicon.ico", sizes=[(s, s) for s in (16, 32, 48)], append_images=small[:-1])
    # Next.js labels the .ico sizes="16x16", so a high-resolution screen (which wants
    # 32px) would otherwise shrink the 512px PNG and lose the thickened strokes.
    small[1].save(APP / "icon1.png", optimize=True)

    # Two colours plus anti-aliasing, so a small palette loses nothing visible.
    tile(head, 512, 0.06, "round").quantize(64, method=Image.Quantize.FASTOCTREE).save(
        APP / "icon.png", optimize=True
    )

    # iOS rounds the corners itself and fills transparency with black, so this one is
    # a full, opaque square. At 180px the hand-drawn double ring survives, so keep it.
    tile(full, 180, 0.07, "square").convert("RGB").quantize(64).save(APP / "apple-icon.png", optimize=True)

    for name in ("favicon.ico", "icon.png", "icon1.png", "apple-icon.png"):
        p = APP / name
        print(f"{p.relative_to(ROOT)}  {p.stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
