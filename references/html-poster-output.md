# HTML Poster Output

Use this reference before generating final poster files.

## Output Contract

Default output is a designed poster built with HTML/CSS, not a PowerPoint deck.

Create:

- `poster.html`: editable source with inline CSS and real text.
- `poster.png`: exported raster image for sharing.
- Optional `poster.pdf`: print/share export if requested.

Do not create:

- `.pptx` files.
- Multi-slide decks.
- Screenshot mockups of slides.
- Full AI-generated images containing Chinese text.

## Text Rule

All final Chinese text, English text, dates, names, departments, QR labels, and slogans must be real HTML text. This prevents AI image models from distorting Chinese characters.

Allowed AI-generated imagery:

- Abstract background.
- Texture.
- Illustration without final copy.
- Decorative shapes.
- Non-text atmosphere.

After generating any background art, overlay exact brand assets and real HTML text in the poster source.

## Canvas

Set the poster canvas to exact pixels with CSS:

```css
.poster {
  position: relative;
  width: 1080px;
  height: 1440px;
  overflow: hidden;
  background: #fff;
}
```

Use the chosen dimensions from `poster-formats.md`.

## Asset Paths

Use relative paths from the generated HTML file to bundled assets or copied local assets.

Prefer:

```html
<img class="logo" src="assets/group-logo/20260622-102250.png" alt="Zongteng Group">
```

Do not embed absolute local filesystem paths in final HTML unless the user explicitly only needs a local-only draft.

## Export

Use the bundled export script:

```bash
node scripts/export-html-poster.mjs poster.html poster.png --width 1080 --height 1440
node scripts/export-html-poster.mjs poster.html poster.pdf --width 1080 --height 1440 --pdf
```

The script uses Playwright. If Playwright is missing, install or run:

```bash
npx playwright install chromium
```

## Verification

Before delivering:

- Open or screenshot the exported PNG.
- Check that Chinese text is correct and readable.
- Check that the logo is sharp and unmodified.
- Check that no text is clipped or overflowing.
- Check that the poster ratio matches the requested format.
