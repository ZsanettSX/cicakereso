---
name: cicakereso-design
description: Use this skill to generate well-branded interfaces and assets for CicaKereső (cicakereso.hu), a Hungarian cat-adoption aggregator — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colours, type, fonts, assets, and UI-kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `readme.md` — full brand guide: content & visual foundations, iconography, manifest.
- `styles.css` — single CSS entry point (link this); `@import`s all tokens under `tokens/`.
- `tokens/` — colours, typography, spacing, effects, fonts (CSS custom properties).
- `assets/` — `logo-circle.png` (primary lockup), `mascot-cat.png` (hero illustration), `brand-board.png`.
- `components/` — React primitives (Button, Tag, Badge, Avatar, Input, Select, Checkbox, FilterChip, CatCard, ColorSwatch).
- `ui_kits/website/` — interactive site recreation (home, browse, profile, shelter, services, donate).
- `guidelines/` — foundation specimen cards.

## Essentials
- **Palette:** cream `#faf1e4`/`#f2ebdf`, sage `#d6dfce`/`#b7c9a8`, forest `#47553c` (primary), camel `#d4a373`, cocoa `#684230` (text). Warm, never clinical.
- **Type:** Arima (display/headings, bold, rounded) + Alegreya (body serif). Both on Google Fonts.
- **Shape:** generous rounding, pill buttons, soft cocoa-tinted shadows, sage focus ring.
- **Voice:** Hungarian, informal *te*, warm and reassuring. "cica" over "macska". Paw-print 🐾 is the signature mark; emoji used sparingly.
- **Icons:** Lucide (outline) — a substitution; replace if a brand set exists.
