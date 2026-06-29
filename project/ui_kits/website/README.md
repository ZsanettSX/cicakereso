# CicaKereső — Website UI kit

An interactive click-through of the CicaKereső cat-adoption website, composed from the design-system components.

> ⚠️ **Proposed direction, not a recreation.** No production code or Figma was provided, so these screens interpret the brief (a Hungarian cat-adoption aggregator) on the brand board. Treat as a starting point and align to live designs when available. Cat imagery reuses the brand mascot with subtle CSS filters — swap in real photography.

## Run
Open `index.html`. Everything is fake/in-memory; navigation works.

## Screens / flow
- **home** (`HomeView.jsx`) — hero, coat quick-filter, featured cats, how-it-works, services teaser, donation band.
- **browse** (`BrowseView.jsx`) — sticky filter sidebar (kor, nem, helyszín, szín, checkboxes) + live-filtering cat grid with empty state.
- **cat** (`CatProfileView.jsx`) — gallery, attributes, health checklist, adopt CTA, shelter card, similar cats.
- **shelters** (`ShelterView.jsx`) — shelter list + single shelter detail with its cats.
- **services** (`ServicesView.jsx`) — provider directory (kozmetika, panzió, tenyésztők, állatorvos) with type filter.
- **donate** (`DonateView.jsx`) — shelter pick, amount selector, custom amount, impact line, monthly toggle.

Shared: `Header.jsx`, `Footer.jsx`, `icons.jsx` (Lucide helper + `WordMark`), `data.js` (`window.CK_DATA`).

## Composition
Screens use the published primitives from `window.CicaKeresDesignSystem_1a6097` — `CatCard`, `Button`, `Tag`, `Badge`, `Avatar`, `Input`, `Select`, `Checkbox`, `FilterChip`, `ColorSwatch` — plus the CSS tokens from `styles.css`. Icons come from **Lucide** (CDN; a substitution — no original icon set was provided).
