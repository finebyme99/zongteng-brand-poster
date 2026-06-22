---
name: zongteng-brand-poster
description: Create Zongteng-branded posters, culture campaign visuals, values posters, meeting-room projection posters, HRAS sub-brand graphics, event posters, recognition posters, and social media poster layouts using bundled Zongteng logo, VI rules, brand colors, typography, value IP mascots, and poster templates. Use when the user wants a poster or visual design that should clearly feel like Zongteng without re-providing brand materials.
---

# Zongteng Brand Poster

Create posters and campaign visuals that carry recognizable Zongteng Group identity and culture elements.

## Core Rule

Use the bundled brand assets and references. Do not ask the user to provide Zongteng logo, values, mascot roles, colors, or meeting-room poster rules unless they want to override or add new materials.

Never redraw, reinterpret, recolor, stretch, or invent the Zongteng logo. Use exact files from `assets/group-logo/` or `assets/hras-logo/` and composite them into the final poster when a logo is needed.

## Workflow

1. Identify the poster type from the request.
2. Read the relevant reference files only.
3. Select the matching style family from `references/style-index.json`.
4. Create the poster in the requested format:
   - For image output: generate the background/illustration first, then place exact logo/IP assets on top when possible.
   - For editable output: create an HTML/CSS poster or source layout using exact bundled assets.
   - For prompts/specs only: write a production prompt and layout spec that explicitly references the required assets.
5. Verify brand fit before delivery: logo integrity, color palette, value/IP mapping, legibility, spacing, and format ratio.

## Reference Routing

- Always read `references/brand-core.md` and `references/visual-rules.md` for Zongteng Group posters.
- Read `references/values-ip.md` for values, culture, employee engagement, mascot, or IP posters.
- Read `references/hras-subbrand.md` only for HRAS or 人力综合条线 posters.
- Read `references/poster-formats.md` when the output size, meeting-room projection, long poster, social image, or print format matters.
- Read `references/asset-map.md` when choosing logo, mascot, or template source files.
- Read `references/style-index.json` before choosing a style family.

## Poster Type Selection

- Use `corporate-blue-orange` for formal group communication, external-facing posters, serious internal announcements, infrastructure/service positioning, strategy, brand promotion, and executive contexts.
- Use `values-ip-card` for culture posters, value posters, employee engagement, festival/internal activities, recognition, and friendly HR/culture messages.
- Use `meeting-room-screen` for Feishu/meeting-room projection posters and 16:9 screen layouts.
- Use `hras-subbrand` for HRAS, 人力综合条线, HR shared service, employee service, and people-operations visuals.
- Use `event-campaign` for lightweight internal campaigns, activity posters, holiday greetings, and mixed culture/brand communication.

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

## Output Expectations

Deliver the final poster file, editable layout, or prompt/spec requested by the user. Include file links for anything the user needs to run or open.

When the user asks for a "Zongteng-style poster" without specifying details, default to:

- `event-campaign` for general internal posters.
- 1080 x 1440 vertical social/internal poster.
- Zongteng Group horizontal logo.
- Zongteng Blue and Orange accents.
- A clean corporate layout with one culture/IP element if the topic is people or culture.
