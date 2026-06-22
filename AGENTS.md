# Zongteng Brand Poster Agent Guide

Use this repository to create Zongteng-branded posters and culture visuals with any capable AI coding/design agent.

## Core Rules

- Use the bundled Zongteng assets and references. Do not ask users to re-provide the group logo, brand colors, values, value IP mascots, HRAS identity, or meeting-room poster rules unless they want to override them.
- Never redraw, reinterpret, recolor, stretch, or invent the Zongteng logo. Use exact files from `assets/group-logo/` or `assets/hras-logo/`.
- Produce posters, not presentations. Do not create PPT/PPTX, slide decks, or deck-like multi-slide outputs unless the user explicitly asks for a presentation.
- Use HTML/CSS as the primary production format. Keep Chinese and required copy as real HTML text, then export the rendered poster to PNG/PDF. Do not use AI image generation for a full poster containing Chinese text.
- When generating illustration or atmosphere, use generated imagery only for background art, texture, or non-text decoration, then layer real HTML text and exact logo assets on top.

## Workflow

1. Decide whether to run guided mode or automatic mode.
   - Guided mode: if the user has not provided enough details, ask the questions from `references/guided-brief.md`.
   - Automatic mode: if the user says to decide for them, skips fields, or gives only a topic, infer missing answers and continue.
2. Identify poster type, audience, format, visual style, copy needs, and required assets.
3. Read `references/style-index.json` first, then read only the reference files needed for the selected poster type.
4. Build the poster as HTML/CSS using bundled assets.
5. Export PNG/PDF with `scripts/export-html-poster.mjs` when an image or print file is requested.
6. Check brand fit before delivery: logo integrity, color palette, value/IP mapping, legibility, spacing, target format, and real-text Chinese rendering.

## Reference Routing

- Always read `references/brand-core.md` and `references/visual-rules.md` for Zongteng Group posters.
- Read `references/values-ip.md` for values, culture, employee engagement, mascot, or IP posters.
- Read `references/hras-subbrand.md` only for HRAS or 人力综合条线 posters.
- Read `references/poster-formats.md` when output size, meeting-room projection, long poster, social image, or print format matters.
- Read `references/asset-map.md` when choosing logo, mascot, or template source files.
- Read `references/style-index.json` before choosing a style family.
- Read `references/visual-style-catalog.md` when presenting or selecting visual styles.
- Read `references/html-poster-output.md` before generating final poster files.

## Guided Brief

Ask all key questions together. Let the user leave any field blank.

1. Poster visual style: choose a built-in style, mix two styles, describe the desired style, or leave blank for automatic selection.
2. Audience: employees, managers, candidates, partners/customers, executives, visitors/public, or other.
3. Format: vertical poster, long poster, square social card, meeting-room 16:9 screen, horizontal banner, A4/A3 print, or other.
4. Content layout: hero statement, event announcement, value/IP card, timeline/agenda, data/report, multi-section long poster, story/case, or free layout.
5. Copy: title, subtitle, body points, time/place/person/CTA, or ask the agent to write copy.
6. Must-use elements: Zongteng Group logo, HRAS logo, value mascot, all values, meeting-room template, photo, QR code, or none.
7. Other requirements: tone, colors to avoid, mandatory wording, export type, deadline, editable source, or approval constraints.

If the user describes a desired style, translate it into mood, typography, layout density, color temperature, texture, imagery, and web-design inspiration cues. Match it to the closest built-in style or create a custom Zongteng-compliant HTML/CSS direction.

## Defaults

When the user asks for a Zongteng-style poster without details:

- Use `event-campaign` for general internal posters.
- Use `1080 x 1440` vertical format.
- Use the horizontal Zongteng Group logo.
- Use Zongteng Blue `#051D49` and Zongteng Orange `#EF7622` as anchors.
- Add one culture/IP element when the topic is people, culture, recognition, values, or employee engagement.

## Output

Deliver the requested poster source or files. If files are produced, include links to the HTML source, PNG, PDF, or script commands the user needs to run.
