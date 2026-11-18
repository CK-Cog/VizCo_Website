"""Flatten the 1x RGBA cut-out onto the page paper (#fafaf8): the upscaler's input.

    python3 flatten.py <work>/proc/portrait-full.png <work>/sr/input.png
"""
import sys

import numpy as np
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
im = np.array(Image.open(src)).astype(np.float32)
a = im[..., 3:] / 255
paper = np.array([250, 250, 248], np.float32)
rgb = im[..., :3] * a + paper * (1 - a)
Image.fromarray(rgb.round().astype(np.uint8)).save(dst)
