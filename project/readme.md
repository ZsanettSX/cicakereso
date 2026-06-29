# CicaKereső — Design System

> **CicaKereső** ("Cat Finder") — a Hungarian cat-adoption aggregator at **cicakereso.hu**.
> Users browse adoptable cats from shelters across Hungary, filtering by **age, colour, breed, sex and location**. The site also hosts **shelter profiles**, **cat-service providers** (grooming, boarding/panzió, breeders) and a **donation** feature.

The mood is **friendly, warm and trustworthy** — never the clinical "animal-shelter" feeling. Think a lovable, modern cat brand: soft creams, sage greens, a hand-drawn ginger mascot, and rounded, pillowy shapes.

---

## Source materials

This system was built from the brand assets supplied by the client (no codebase or Figma was provided):

- `assets/brand-board.png` — official brand board (logo, 7-colour palette, type pairing)
- `assets/logo-circle.png` — primary circular logo (mascot + hand-lettered wordmark)
- `assets/mascot-cat.png` — "Kabala cica" mascot illustration, transparent PNG

> ⚠️ There is **no production codebase or Figma file** behind this system yet. The UI kit screens are an **original interpretation** of the product described above, built on the brand board — they are a proposed direction, not a recreation of a shipped product. Please share any live designs, a repo, or a Figma file and I'll align the kit exactly.

---

## Index / manifest

**Foundations**
- `styles.css` — root entry, `@import`s only. Consumers link this.
- `tokens/colors.css` · `typography.css` · `spacing.css` · `effects.css` · `fonts.css` · `base.css`

**Specimen cards** (Design System tab) — `guidelines/*.html`

**Components** — `components/<group>/` (see list below)

**UI kit** — `ui_kits/website/` (home, browse, cat profile, shelter, donate)

**Skill** — `SKILL.md` (portable Agent Skill wrapper)

---

## Brand foundations at a glance

| | |
|---|---|
| **Palette** | Cream `#faf1e4` / `#f2ebdf` · Sage `#d6dfce` / `#b7c9a8` · Forest `#47553c` · Camel `#d4a373` · Cocoa `#684230` |
| **Display / headings** | **Arima** (rounded humanist sans, Bold/ExtraBold weight) |
| **Body / long-form** | **Alegreya** (warm old-style serif; Light, Regular, Bold) |
| **Wordmark** | Hand-lettered "CicaKereső" brush script — **logo asset only**, never set live |
| **Primary action** | Forest green `#47553c` |
| **Accent** | Camel `#d4a373`, cocoa `#684230` |
| **Shape language** | Generous rounding (16–30px), pill buttons, soft cocoa-tinted shadows |

Both Arima and Alegreya are the **exact** fonts named on the brand board and are loaded from Google Fonts — **no substitution**. (The compiler reports "Fonts: none" only because they arrive via a remote `@import` rather than bundled binaries; they render correctly for consumers. If you want them self-hosted/offline, send the licensed files and I'll add `@font-face`.)

---

## CONTENT FUNDAMENTALS — how CicaKereső writes

**Language:** Hungarian (hu-HU). All product copy is Hungarian; this document is in English for the design team.

**Voice:** warm, encouraging, gently playful — a friend helping you find a companion, not a database. Trust matters (you're adopting a living animal), so copy is **reassuring and concrete**, never saccharine or over-cute.

**Person & address:** speaks **to the user** using informal Hungarian **te** ("Találd meg álmaid cicáját" — *Find your dream cat*). Warm and personal, not the formal *Ön*. The brand speaks as **"mi"** (we) when referring to itself.

**Casing:** Sentence case for UI and body. Headlines in Arima are sentence case, not ALL-CAPS (caps reserved for tiny eyebrows/labels with wide tracking). The wordmark's internal capital — **CicaKereső** — is a fixed lockup; don't restyle it.

**Tone examples (Hungarian, with gloss):**
- Hero: *"Találd meg álmaid cicáját — néhány kattintással."* (Find your dream cat — in a few clicks.)
- CTA: *"Cicák böngészése"* (Browse cats) · *"Örökbe fogadom"* (I'll adopt) · *"Támogatom a menhelyt"* (I support the shelter)
- Empty state: *"Még nincs találat — próbálj tágítani a szűrőkön."* (No results yet — try widening your filters.)
- Reassurance: *"Minden cica oltott, ivartalanított és egészségügyileg ellenőrzött."* (Every cat is vaccinated, neutered and health-checked.)

**Rules of thumb**
- Lead with the cat's **name** and one warm trait, then the facts (age, sex, location).
- Numbers/facts are plain and honest — adoption is a commitment.
- Use **"cica"** (kitty) far more than the neutral *"macska"* — it's the brand's affectionate register.
- **Emoji:** used **sparingly** as soft accents in friendly contexts (a single 🐾 / 🐱 in a toast or success state) — never stacked, never in headings or formal flows. The **paw-print** is the signature mark; prefer the brand paw glyph/icon over emoji where possible.

---

## VISUAL FOUNDATIONS

**Overall feel:** soft, warm, hand-made. A cream "paper" page, sage-green and camel accents, the ginger mascot, and rounded shapes throughout. Reads more like a children's-book-meets-modern-product than a utility directory.

**Colour usage**
- **Backgrounds:** the page is almost always cream `--cream-50`. Alternate sections use warm cream `--cream-100` or soft sage `--sage-200` to create rhythm. Forest green `--forest-700` is used for high-impact full-bleed bands (footer, donation CTA) with cream text.
- **Primary green** `#47553c` = trust + primary actions. **Camel** `#d4a373` = warmth + secondary accents, the paw mark, highlights. **Cocoa** `#684230` = text and the wordmark.
- Imagery (the mascot, cat photos) is **warm-toned** — ginger, honey, cream. Keep photography warm and softly lit; avoid cold/blue or harsh high-contrast crops.
- Status colours are **muted and earthy** (sage success, amber-camel warning, terracotta danger) — never neon. Clinical/medical blues are avoided.

**Type**
- Headlines: **Arima** Bold, tight leading (`1.08–1.25`), slight negative tracking. Friendly rounded terminals carry the warmth.
- Body: **Alegreya** Regular, relaxed leading (`1.7`) for comfortable reading; Light for large intros, Bold for emphasis.
- Eyebrows/labels: Arima semibold, UPPERCASE, wide tracking (`0.12em`), in camel.

**Spacing & layout**
- 4px base grid. Generous whitespace — content breathes. Max content width `1200px`; long-form `760px`.
- Card grids for cat listings (responsive 2–4 columns). Sticky filter sidebar/bar on browse.

**Corners & shape**
- Everything rounded: cards `--radius-lg` (22px), buttons `--radius-pill`, inputs `--radius-md` (16px), avatars/mascot circles. **No sharp 90° corners** on interactive surfaces. The circular logo lockup echoes this.

**Borders**
- Hairline, low-contrast: cream `--cream-200` or sage `--sage-300`. Borders are quiet; elevation comes from shadow, not heavy strokes.

**Shadows / elevation**
- Soft, **cocoa-tinted** (`rgba(104,66,48,…)`), low opacity, generous blur — pillowy not crisp. Cards `--shadow-sm/md`; hovered/floating `--shadow-lg`. No hard black drop shadows.
- Focus uses a **sage ring** (`--shadow-focus`), not browser blue.

**Backgrounds / texture**
- Predominantly flat warm fills. The mascot and paw-print are the recurring **illustrative motifs**; occasional very subtle paw-print pattern or organic blob shapes are on-brand. **Avoid** heavy gradients (especially blue/purple), grain, or photographic hero washes unless using warm cat photography.

**Motion**
- Gentle and brief. Fades + small rises on entrance (`--dur-base`, `--ease-out`). Playful taps may use a tiny overshoot (`--ease-soft`) — a subtle "pounce/bounce". Nothing fast, flashy, or looping.

**Interaction states**
- **Hover:** primary buttons darken (`--forest-800`); cards lift (raise shadow + ~2px translateY); links underline. Camel accents go to `--camel-600`.
- **Press/active:** slight shrink (`scale(0.97)`) — the bouncy, tactile feel.
- **Disabled:** reduced opacity (~0.5), no shadow, `cursor: not-allowed`.
- **Selected (filters/chips):** fill with sage/forest, cream text.

**Transparency / blur**
- Used lightly: a sticky header may use a translucent cream with backdrop blur; overlays use a cocoa scrim `--surface-overlay`. Not a "glassmorphism" brand — keep it subtle.

---

## ICONOGRAPHY

- **No bespoke icon font shipped** with the brand assets. The system uses **[Lucide](https://lucide.dev)** (outline, ~2px stroke, rounded line-caps) as the working icon set — its soft, rounded, hand-friendly stroke matches the brand far better than sharp/filled sets. **This is a substitution** (no original icon set was provided); swap for the brand's own set if one exists. Lucide is linked from CDN in the kits.
- **Signature mark:** the **paw print** 🐾 is CicaKereső's own glyph — it appears inside the wordmark's "i" dot and should be used as the brand bullet/accent and favicon motif. Prefer Lucide's `paw-print` or the brand paw asset over the emoji in product UI.
- **The mascot** (`assets/mascot-cat.png`) is the hero illustration — used large on empty states, hero, loading, and 404. It is **illustration, not an icon**; don't shrink it to icon size.
- **Emoji:** sparingly, as described under Content Fundamentals — soft accents only (🐾 🐱), never in headings.
- **Cat-attribute chips** use small solid colour swatches (`--cat-*` tokens) rather than icons to denote coat colour.
- Never hand-roll bespoke SVG icons that compete with Lucide's weight; stay consistent with one set.

---

## Components

`components/<group>/` — React primitives, styled purely via the CSS tokens. Mount via `window.CicaKeresDesignSystem_1a6097`.

- **core/** — `Button`, `Tag`, `Badge`, `Avatar`
- **forms/** — `Input`, `Select`, `Checkbox`, `FilterChip`
- **catalog/** — `CatCard`, `ColorSwatch`

(See each directory's `*.prompt.md` for usage and the `@dsCard` card for live states.)

## UI kit

`ui_kits/website/` — an interactive click-through of the marketing + product site: home/hero, browse with filters, a cat profile, a shelter profile, and the donation flow. Composes the components above. See its `README.md`.
