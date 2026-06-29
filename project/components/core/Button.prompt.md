**Button** — the primary call-to-action; pill-shaped, warm, with a gentle press-shrink. Use for any tappable action; pick `variant` by emphasis.

```jsx
<Button variant="primary" size="lg" iconLeft={icon('paw-print')}>
  Cicák böngészése
</Button>
```

Variants: `primary` (forest green — main CTA), `accent` (camel — warm secondary), `secondary` (sage outline on white), `ghost` (low-emphasis). Sizes: `sm` `md` `lg`. Props: `iconLeft`/`iconRight` (ReactNode), `fullWidth`, `disabled`. Hover darkens, active shrinks to 0.97.
