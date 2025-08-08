# Lost Track — Image Starter Pack (SVG)

This pack includes **editable** SVG templates you can drop into `public/img/`:

- `song_cover_template.svg` — 1200×1200, for per-song covers (Spotify/Apple friendly).
- `og_template.svg` — 1200×630, for OpenGraph/Twitter social cards.
- `character_frame_template.svg` — 1000×1200 portrait frame for character bios.
- `bg_grid.svg` — subtle grid background (400×400 tile, set as CSS background, repeat).

## How to use
1. Open the SVGs in Figma, Illustrator, Affinity Designer, or a code editor.
2. Replace text layers:
   - `SONG TITLE`, `Optional subtitle or act`
   - `PAGE OR POST TITLE`
   - `CHARACTER NAME`
3. Export as PNG (leave at original size). Suggested outputs:
   - Covers: 1200×1200 (`public/img/songs/<slug>-1200.png`)
   - OG: 1200×630 (`public/img/og/<slug>.png`)
   - Portraits: 1000×1200 (`public/img/characters/<name>.png`)

## Optional site wiring
- For **Astro OG images**, we can add a small endpoint to render SVG to PNG at build-time or use static PNGs.
- For consistent color themes per song, we can make 3–4 gradient presets and reuse them.

If you tell me:
- your preferred **style direction** (Neon Pastels, Noir Monochrome, Retro-UI Futurism), and
- the first **3 songs** to cover,

I’ll generate polished, song-specific covers from these templates and wire them into your pages.
