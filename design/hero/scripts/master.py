"""Build the 4x RGBA master from the super-resolved RGB and the 1x matte, then web sizes."""
import sys
import numpy as np
from PIL import Image, ImageFilter
from scipy import ndimage as ndi

d = sys.argv[1]
Image.MAX_IMAGE_PIXELS = None
sr = np.asarray(Image.open(d + 'sr/full-ultrasharp.png').convert('RGB')).astype(np.float32)
base = Image.open(d + 'proc/portrait-full.png')  # 1x RGBA with the matte
H, W, _ = sr.shape

# Alpha: upscale the 1x matte, then tighten the edge back to ~1px at 1x.
alpha = np.asarray(base.getchannel('A').resize((W, H), Image.LANCZOS)).astype(np.float32) / 255
alpha = np.clip((alpha - 0.3) / 0.4, 0, 1)
alpha = alpha * alpha * (3 - 2 * alpha)

# Paper: measure the SR output's paper tone where we know it is pure paper, and map it
# back to the site's paper exactly, keeping black at black.
paper = np.array([250, 250, 248], np.float32)
outside = alpha < 0.01
measured = np.median(sr[outside], axis=0)
print('measured paper', measured)
sr = sr * (paper / measured)

# Neutral ink everywhere except the eyes (SR can leave faint colour fringes in the hatching).
yy, xx = np.mgrid[0:H, 0:W]
eyes = np.zeros((H, W), bool)
for cx, cy in [(548 * 4, 254 * 4), (806 * 4, 257 * 4)]:
    eyes |= (xx - cx) ** 2 + (yy - cy) ** 2 < (27 * 4) ** 2
sat = sr.max(2) - sr.min(2)
eye_w = ndi.gaussian_filter((np.clip((sat - 8) / 22, 0, 1) * eyes).astype(np.float32), 3)
lum = sr @ np.array([0.2126, 0.7152, 0.0722], np.float32)
neutral = np.stack([lum * paper[0] / paper[1], lum, lum * paper[2] / paper[1]], -1)
rgb = neutral * (1 - eye_w[..., None]) + sr * eye_w[..., None]

# Ink: a gentle S on the darks so the line work prints rich, with paper untouched.
t = np.clip(rgb / paper, 0, 1)
t = np.where(t < 0.5, 0.5 * (2 * t) ** 1.12, t)
rgb = np.clip(t * paper, 0, 255)

master = Image.fromarray(np.dstack([rgb, alpha * 255]).round().astype(np.uint8), 'RGBA')
master.save(d + 'sr/master-4x.png', optimize=False)
print('master', master.size)

for w in (1600, 1200, 800):
    h = round(H * w / W)
    im = master.resize((w, h), Image.LANCZOS)
    rgbch = im.convert('RGB').filter(ImageFilter.UnsharpMask(radius=0.7, percent=45, threshold=1))
    im = Image.merge('RGBA', (*rgbch.split(), im.getchannel('A')))
    q = 82 if w > 1000 else 84
    im.save(d + f'sr/wolfhound-{w}.webp', quality=q, alpha_quality=90, method=6)
    print(w, h)
