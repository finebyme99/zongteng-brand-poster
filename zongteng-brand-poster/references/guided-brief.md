# Guided Brief

Use this reference for every new poster request unless the user explicitly says to generate immediately. Ask all questions together. Let the user leave any field blank; infer missing answers after this one guided pass.

Do not create final poster files in the same response as the guided questions unless the user explicitly says "直接生成", "不用问", "按默认来", "其他你定", "decide for me", or equivalent.

## Guided Form

Show the style overview image first when the UI supports images:

- `assets/style-reference-cards/style-reference-overview.png`

Then ask:

1. Poster visual style: choose one from `visual-style-catalog.md`, mix two built-in styles, describe the desired style in your own words, or leave blank for automatic selection.
2. Audience: all employees, frontline teams, managers, executives, candidates, partners/customers, visitors/public, or other.
3. Poster format: vertical `1080 x 1440`, long poster, square `1080 x 1080`, meeting-room `1920 x 1080`, horizontal banner, A4/A3 print, or other.
4. Content layout: hero slogan, event announcement, value/IP card, timeline/agenda, data/report, multi-section long poster, story/case, or free layout.
5. Copy: provide title/subtitle/body/CTA, or say "help me write".
6. Must-use elements: group logo, HRAS logo, specific value mascot, all four values, meeting-room template, photo, QR code, or none.
7. Other requirements: tone, colors to avoid, mandatory wording, export type, deadline, editable source, or approval constraints.

Add this line after the questions:

> 可以只回答你确定的信息，其他留空我来判断；如果你想直接生成，也可以回复“按默认来”。

Do not ask whether the user wants PPT. This agent kit creates posters. If an export type is requested, offer HTML source, PNG, or PDF.

## Custom Style Descriptions

When the user describes a style instead of choosing a sample, do not force them back into the menu. Parse the description into:

- Mood: formal, energetic, youthful, warm, futuristic, premium, playful, calm, editorial, campaign-like.
- Visual language: big typography, Bento cards, glass layers, strict grid, collage, paper texture, neon/data, 3D/soft IP, photo-led, high-saturation color, restrained corporate minimalism.
- Usage constraints: audience, readability distance, amount of copy, brand formality, and whether values/IP assets should appear.

Then map the description to the closest built-in style or a blend of two styles. If the user says "像某个网站/品牌/网页首屏", use it as directional inspiration only. Do not copy protected screenshots, illustrations, or layouts directly; recreate an original poster direction with Zongteng assets and real HTML text.

## Automatic Defaults

If the user leaves fields blank:

- Choose `event-campaign` for general internal/culture posters.
- Choose `corporate-blue-orange` for formal group announcements.
- Choose `values-ip-card` if the topic mentions values, culture, respect, excellence, pragmatism, win-win, recognition, employee engagement, or mascot.
- Choose `hras-subbrand` if the topic mentions HRAS, HR, 人力, onboarding, employee services, or people operations.
- Choose `meeting-room-screen` if the topic mentions meeting room, projection, Feishu screen, 投屏, agenda screen, or 16:9.
- Choose `1080 x 1440` vertical if no format is given.
- Write concise copy if the user provides only a topic.
- Use the horizontal Zongteng Group logo unless HRAS or a special narrow layout requires another lockup.
- Use a campaign-poster composition with a dominant hero visual; never default to a PPT-like grid of cards.
- Create an HTML/CSS poster and export PNG if the user asks for an image.

## Response Pattern

After collecting or inferring the brief, summarize only the working assumptions that affect the output:

- Style direction.
- Audience.
- Format.
- Core message/copy approach.
- Required brand/IP assets.

Then wait for the user's answer before creating final poster files.

If the user explicitly asked for automatic generation, summarize the assumptions briefly and continue without waiting.
