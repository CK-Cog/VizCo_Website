import sys
from PIL import Image
import numpy as np
from scipy import ndimage as ndi

src, outdir = sys.argv[1], sys.argv[2]
a = np.array(Image.open(src).convert('RGB')).astype(np.float32)
H, W, _ = a.shape
L = a.mean(2)
sat = a.max(2) - a.min(2)

PX, PHX = 27.535, 1.60
PY, PHY = 27.34, 1.40
xx = np.arange(W)[None, :]
yy = np.arange(H)[:, None]
sx = np.clip(np.cos(2 * np.pi * xx / PX - PHX) * 5, -1, 1)
sy = np.clip(np.cos(2 * np.pi * yy / PY - PHY) * 5, -1, 1)
model = 238.0 + 15.5 * sx * sy
res = np.abs(L - model)

bgish = (res < 11) & (sat < 14)
# seeds: border pixels that are bg-ish
seed = np.zeros_like(bgish)
seed[0, :] = bgish[0, :]; seed[-1, :] = bgish[-1, :]
seed[:, 0] = bgish[:, 0]; seed[:, -1] = bgish[:, -1]
lab, n = ndi.label(bgish, structure=[[0,1,0],[1,1,1],[0,1,0]])
keep = np.unique(lab[seed])
keep = keep[keep > 0]
bg = np.isin(lab, keep)
# Enclosed pockets of checkerboard (between wisps, not connected to the border): a pocket
# that spans both gray and white squares is background; a patch of plain white fur is not.
gray_loc = model < 238
cnt_gray = ndi.sum(gray_loc & bgish, lab, range(1, n + 1))
cnt_white = ndi.sum(~gray_loc & bgish, lab, range(1, n + 1))
# Only near the outline: a pocket deep inside the figure is shirt or fur, not background.
near = ndi.distance_transform_edt(~bg) <= 28
cnt_near = ndi.sum(near, lab, range(1, n + 1))
pockets = [i + 1 for i in range(n) if cnt_gray[i] >= 30 and cnt_white[i] >= 30 and cnt_near[i] > 0]
holes = np.isin(lab, pockets)
Image.fromarray((holes * 255).astype(np.uint8)).save(f'{outdir}/pockets.png')
bg |= holes
print('pockets', len(pockets))
# Close tiny holes inside background (noise pixels), but not into the figure
bg = ndi.binary_closing(bg, iterations=1) | bg
# Remove small enclosed figure specks floating in the background
fig = ~bg
lab2, n2 = ndi.label(fig)
sizes = ndi.sum(fig, lab2, range(1, n2 + 1))
print('figure components', n2, 'largest', sorted(sizes)[-5:])
big = np.argmax(sizes) + 1
# keep components larger than 40px (hair wisps), drop specks
keepf = np.isin(lab2, [i + 1 for i, s in enumerate(sizes) if s >= 40])
fig = keepf
Image.fromarray((fig * 255).astype(np.uint8)).save(f'{outdir}/fig_mask.png')
Image.fromarray((bg * 255).astype(np.uint8)).save(f'{outdir}/bg_mask.png')
print('bg frac', bg.mean())

# ---- Compose the cut-out ----
dist = ndi.distance_transform_edt(fig)  # distance to background, inside figure
band = fig & (dist <= 4)
INK = 40.0
m3 = model[..., None]
fixed = INK + (a - INK) * (255 - INK) / np.maximum(m3 - INK, 1)
out = np.where(band[..., None], np.clip(fixed, 0, 255), a)
# Neutralise everything except the eyes
lum = out @ np.array([0.2126, 0.7152, 0.0722], dtype=np.float32)
sat2 = out.max(2) - out.min(2)
eyes = np.zeros((H, W), bool)
for (cx, cy) in [(548, 254), (806, 257)]:
    eyes |= ((xx - cx) ** 2 + (yy - cy) ** 2) < 26 ** 2
eye_w = np.clip((sat2 - 6) / 20, 0, 1) * eyes
eye_w = ndi.gaussian_filter(eye_w.astype(np.float32), 0.8)
neutral = np.repeat(lum[..., None], 3, 2)
out = neutral * (1 - eye_w[..., None]) + out * eye_w[..., None]
# Paper tone: white becomes the page colour (#fafaf8)
paper = np.array([250, 250, 248], np.float32) / 255
out = out * paper
alpha = ndi.gaussian_filter(fig.astype(np.float32), 0.6)
alpha = np.clip((alpha - 0.15) / 0.7, 0, 1)
rgba = np.dstack([np.clip(out, 0, 255), alpha * 255]).round().astype(np.uint8)
img = Image.fromarray(rgba, 'RGBA')
img.save(f'{outdir}/portrait-full.png')
for w in (1200, 760):
    im2 = img if w >= W else img.resize((w, round(H * w / W)), Image.LANCZOS)
    im2.save(f'{outdir}/wolfhound-{w}.webp', quality=int(sys.argv[3]) if len(sys.argv)>3 else 86, alpha_quality=90, method=6)
print('eyes px', (eye_w > 0.5).sum())
