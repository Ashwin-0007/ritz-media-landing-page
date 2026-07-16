# Ritz Media World — Homepage

A pixel-faithful React build of the **Ritz Media World** homepage from Figma
(node `262-19`, "R_Homepage"), built with **Vite + React + Tailwind CSS**.

## Stack
- **Vite** (React) — dev server & build
- **Tailwind CSS** — styling with exact Figma values (colors, spacing, type)
- **Fonts** — League Spartan (headings) + Montserrat (body), loaded from Google Fonts

## Getting started
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the build
```

## How it's structured
The design is authored on a fixed **1440 px** canvas. `App.jsx` scales that
canvas to fit narrower viewports (`transform: scale`) so proportions stay exact.

Sections (top → bottom), each in `src/components/`:

| Component | Figma frame | Notes |
|---|---|---|
| `Header` | header | Navy bar, gold logo, nav + hamburger |
| `Hero` | Frame 105437 | Full-bleed cinematic image |
| `AboutBand` | Group 105457 | Topographic strip + glass wash + "About US" pill |
| `Monogram` | Component 9 | Decorative outlined "R" |
| `Services` | Frame 106306 | Numbered 01–06 list + overlapping model image |
| `Testimonials` | Frame 106307 | Quote, Eldeco Group, pagination dots |
| `WordCloud` | Frame 117 | Scattered service names over red-washed image |
| `Footer` | footer | Link columns, partner logos, "RITZ MEDIAWORLD" wordmark |

## Assets
All images in `public/assets/` were exported directly from the Figma file via
the REST API, so they are the original design assets.

## Videos (hero + monogram)
The Figma **prototype** plays a background video in the **hero** and inside the
**"R" monogram**. Figma's REST API does **not** expose video files, so the clip
was supplied manually as `public/assets/video-about.mp4`.

- **Hero** — the video plays full-bleed (auto-play, looped, muted).
- **Monogram** — the same video is masked to the letter silhouette. The mask
  (`public/assets/monogram-mask.png`) was reconstructed from the Figma vector's
  `vectorNetwork` and rasterised to align 1:1 with the outline. The crisp
  outline (`monogram.png`) is layered on top.

To swap the clip, replace `video-about.mp4` (keep the same filename).

## Colors
- Header navy `#0d1334` · Footer/word-cloud navy `#0e1125`
- Gold logo gradient `#eda021 → #875b13`
- Quote red `#631c09`
