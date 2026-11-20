# Favicon and app icons

The browser tab icon is the hound badge: the engraved wolfhound from the hero, head and shoulders, inside a round frame whose ring fades from grey to the signal orange. It replaced the flat hound mark (and before that the white "Co" tile) in November 2026.

![Icon set](../design/favicon/preview.png)

## Files

| File | Size | Used for |
|---|---|---|
| `design/favicon/source.webp` | 1254 x 1254 | The badge as drawn, on a white square. Keep this; everything else is generated from it. |
| `design/favicon/build-icons.mjs` | | Builds the four files below and the preview. |
| `src/app/favicon.ico` | 16, 32, 48 | Browser tabs, bookmarks, Google results. |
| `src/app/icon.png` | 512 | Modern browsers and search engines. Also the `logo` in the Organization structured data (`src/lib/seo.ts`), so keep the name. |
| `src/app/icon1.png` | 32 | The 32px frame again, as a PNG. Next.js labels the `.ico` `sizes="16x16"`, so without this a high-resolution screen would shrink the 512px file instead. |
| `src/app/apple-icon.png` | 180 | iPhone and iPad home screen. |

Next.js picks up all four from `src/app/` and writes the `<link rel="icon">` and `<link rel="apple-touch-icon">` tags, with a hash in the URL so browsers drop stale copies. Don't also put a `favicon.ico` in `public/`: both would claim the same URL.

## Rebuild

```bash
node design/favicon/build-icons.mjs
```

It uses `sharp`, which ships with Next.js, so `npm ci` is all it needs. It writes straight into `src/app/` and `design/favicon/preview.png`.

## What the script does to the source, and why

1. **Cuts the badge out of its white square.** The ring is drawn by hand and isn't a perfect circle, so the script traces its outer edge (walking in from outside along 720 rays until the ring starts) and cuts just inside that line. Outside the badge is transparent, so it sits as a round icon on light and dark tab bars with no white corners or pale fringe.
2. **Keeps the art as drawn.** No flip, recolour or crop beyond the cut-out: the badge already faces right, into the page, and the orange in the eyes and ring is the brand colour.
3. **Draws 16, 32 and 48px as separate frames** in the `.ico`, each downscaled from the full-size badge and lightly sharpened. Without the sharpening the engraving's fine lines average out to grey and the eyes and nose disappear.
4. **Puts the 180px Apple icon on an opaque paper square** (`#fafaf8`) with the badge inset 8px. iOS rounds the corners itself and fills transparency with black.
5. **Saves `icon.png` with a 256-colour palette.** It keeps the engraving and the ring's gradient and cuts the file from about 250KB to about 170KB.

## Checking a change

Look at the real thing, not the 512px file. A tab shows 16px on a normal screen and 32px on a high-resolution one.

- Light and dark tab bars, normal and high-resolution screens, and a pinned tab.
- Next to Gmail, Slack and Notion tabs: you should find ours at a glance.
- On an iPhone home screen (Share, Add to Home Screen).
- Browsers cache favicons hard. Use a private window, or open `/favicon.ico` directly and reload.
- Google can take weeks to pick up a new favicon in search results.

## Not done yet

- At 16px the engraving is too fine to read as a face; it shows as a pale disc with the grey and orange ring. If that matters, the tab sizes could use a tighter crop on the head, or a simplified mark.
- No `icon.svg`, so the icon is not vector-sharp at odd sizes. The 512px PNG covers most uses.
- No web app manifest, so no 192px Android icon.
