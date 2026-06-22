---
name: zongteng-brand-poster
description: Agent-compatible guide for creating Zongteng-branded posters, culture campaign visuals, values posters, meeting-room projection posters, HRAS sub-brand graphics, event posters, recognition posters, and social media poster layouts using bundled Zongteng logo, VI rules, brand colors, typography, value IP mascots, and poster templates. Use when the user wants a poster or visual design that should clearly feel like Zongteng without re-providing brand materials.
---

# Zongteng Brand Poster

This file is the OpenAI/Codex-compatible entry point for the agent-agnostic Zongteng poster kit. `AGENTS.md` is the canonical cross-agent instruction file. If this file is loaded directly, follow the rules below; if your agent can read repository instructions, read `AGENTS.md` first and use this file as a compatibility adapter.

Create guided or automatic HTML/CSS posters and campaign visuals that carry recognizable Zongteng Group identity and culture elements.

## Core Rule

Use the bundled brand assets and references. Do not ask the user to provide Zongteng logo, values, mascot roles, colors, or meeting-room poster rules unless they want to override or add new materials.

Never redraw, reinterpret, recolor, stretch, or invent the Zongteng logo. Use exact files from `assets/group-logo/` or `assets/hras-logo/` and composite them into the final poster when a logo is needed.

Produce posters, not presentations. Do not create PPT/PPTX, slide decks, or deck-like multi-slide outputs unless the user explicitly asks for a presentation. Default to one designed poster or one long poster.

Use HTML/CSS as the primary production format. Keep all Chinese and required copy as real HTML text, then export the rendered poster to PNG/PDF. Do not use AI image generation to create a full poster containing Chinese text, because generated Chinese text often becomes distorted or incorrect.

## Workflow

1. Decide whether to run guided mode or automatic mode.
   - Guided mode: if the user asks to create a poster and has not provided enough details, ask the guided questions from `references/guided-brief.md`.
   - Automatic mode: if the user says to decide for them, skips fields, or gives only content/topic, infer the missing answers and continue.
2. Identify the poster type and audience from the brief.
3. Read the relevant reference files only.
4. Read `references/style-index.json` and, when choosing visual style, read `references/visual-style-catalog.md`.
5. Select the matching brand style family and one visual style direction.
6. Create the poster in the requested format:
   - For image output: create an HTML/CSS poster first, then export it to PNG/PDF with `scripts/export-html-poster.mjs`.
   - For editable output: deliver the HTML/CSS poster source using exact bundled assets.
   - For generated illustration needs: generate only background art, texture, or mascot-like illustration without final Chinese text, then layer real HTML text and exact logo assets on top.
   - For prompts/specs only: write a production prompt and layout spec that explicitly references the required assets and the HTML text-rendering requirement.
7. Verify brand fit before delivery: logo integrity, color palette, value/IP mapping, legibility, spacing, and format ratio.

## Reference Routing

- Always read `references/brand-core.md` and `references/visual-rules.md` for Zongteng Group posters.
- Read `references/values-ip.md` for values, culture, employee engagement, mascot, or IP posters.
- Read `references/hras-subbrand.md` only for HRAS or 人力综合条线 posters.
- Read `references/poster-formats.md` when the output size, meeting-room projection, long poster, social image, or print format matters.
- Read `references/asset-map.md` when choosing logo, mascot, or template source files.
- Read `references/style-index.json` before choosing a style family.
- Read `references/guided-brief.md` when the user needs guided input collection.
- Read `references/visual-style-catalog.md` when presenting or selecting poster visual styles.
- Read `references/html-poster-output.md` before generating final poster files.

## Poster Type Selection

- Use `corporate-blue-orange` for formal group communication, external-facing posters, serious internal announcements, infrastructure/service positioning, strategy, brand promotion, and executive contexts.
- Use `values-ip-card` for culture posters, value posters, employee engagement, festival/internal activities, recognition, and friendly HR/culture messages.
- Use `meeting-room-screen` for Feishu/meeting-room projection posters and 16:9 screen layouts.
- Use `hras-subbrand` for HRAS, 人力综合条线, HR shared service, employee service, and people-operations visuals.
- Use `event-campaign` for lightweight internal campaigns, activity posters, holiday greetings, and mixed culture/brand communication.

## Guided Briefing

When using guided mode, ask all key questions together instead of one-by-one. If the current environment supports a structured question UI, use it. Otherwise show a concise numbered form.

Include:

- Poster visual style. Offer the style cards in `assets/style-reference-cards/style-reference-overview.png`, list the style names from `references/visual-style-catalog.md`, and let the user either choose a built-in style, mix two built-in styles, or describe the desired style in natural language.
- Audience: employees, managers, candidates, partners/customers, executives, or public/external.
- Format: vertical poster, long poster, square social card, meeting-room 16:9 screen, horizontal banner, or print.
- Content layout: hero statement, event announcement, value/IP card, timeline/agenda, data/report, multi-section long poster, or free layout.
- Copy: title, subtitle, body points, time/place/person/CTA, or ask the agent to write copy.
- Must-use elements: Zongteng Group logo, HRAS logo, value mascot, meeting-room template, photo, QR code, or none.
- Other constraints: tone, colors to avoid, deadline, export type, editable source needs, or any required text.

Allow the user to leave any field blank. Infer missing fields from the user's topic and explain only the important assumptions.

If the user describes a desired style instead of choosing a style card, translate the description into concrete design attributes: mood, typography, layout density, color temperature, image/texture treatment, and motion/interaction-inspired details. Match it to the closest one or two catalog styles when possible; if no catalog style fits, create a custom HTML/CSS poster direction while keeping the Zongteng logo, brand colors, values/IP mapping, and real-text output rules intact.

## Brand Checks

Before delivering, ensure:

- The logo is from bundled assets, not model-redrawn.
- The default group logo is the horizontal Zongteng Group lockup unless the format requires the vertical or icon-only variant.
- Zongteng Blue `#051D49` and Zongteng Orange `#EF7622` lead formal group visuals.
- Source Han Sans / Noto Sans CJK / 思源黑体 or a close equivalent is used for clean corporate typography.
- Value IP posters map the correct mascot to the correct value.
- HRAS logo is used only for HRAS or people-line scenarios.
- Text remains readable at the target display size.
- Long posters have strong hierarchy and section rhythm instead of simply stretching a screen layout.
- Chinese text is rendered as browser text in HTML, not baked into an AI-generated image.
- The output is a poster file or poster source, not a PPT or slide deck.

## Output Expectations

Deliver the final HTML poster, exported PNG/PDF, editable layout, or prompt/spec requested by the user. Include file links for anything the user needs to run or open.

When the user asks for a "Zongteng-style poster" without specifying details, default to:

- `event-campaign` for general internal posters.
- 1080 x 1440 vertical social/internal poster.
- Zongteng Group horizontal logo.
- Zongteng Blue and Orange accents.
- A clean corporate layout with one culture/IP element if the topic is people or culture.
