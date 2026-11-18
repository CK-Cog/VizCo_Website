"""Super-resolve an image with an ESRGAN-family model via spandrel. Tiled, CPU."""
import sys, time
import numpy as np
import torch
from PIL import Image
from spandrel import ModelLoader

model_path, src, dst = sys.argv[1], sys.argv[2], sys.argv[3]
crop = tuple(map(int, sys.argv[4].split(','))) if len(sys.argv) > 4 and sys.argv[4] != '-' else None
torch.set_num_threads(4)
desc = ModelLoader().load_from_file(model_path)
model = desc.model.eval()
scale = desc.scale
im = Image.open(src).convert('RGB')
if crop: im = im.crop(crop)
x = torch.from_numpy(np.asarray(im).astype(np.float32) / 255).permute(2, 0, 1)[None]
_, _, H, W = x.shape
T, P = 192, 16  # tile and overlap padding
out = torch.zeros(1, 3, H * scale, W * scale)
t0 = time.time()
with torch.inference_mode():
    for y0 in range(0, H, T):
        for x0 in range(0, W, T):
            ya, yb = max(0, y0 - P), min(H, y0 + T + P)
            xa, xb = max(0, x0 - P), min(W, x0 + T + P)
            o = model(x[:, :, ya:yb, xa:xb])
            oy, ox = (y0 - ya) * scale, (x0 - xa) * scale
            hh, ww = min(T, H - y0) * scale, min(T, W - x0) * scale
            out[:, :, y0 * scale:y0 * scale + hh, x0 * scale:x0 * scale + ww] = o[:, :, oy:oy + hh, ox:ox + ww]
print(f'{model_path.split("/")[-1]} scale {scale} {W}x{H} -> {W*scale}x{H*scale} in {time.time()-t0:.1f}s')
arr = (out[0].clamp(0, 1).permute(1, 2, 0).numpy() * 255).round().astype(np.uint8)
Image.fromarray(arr).save(dst)
