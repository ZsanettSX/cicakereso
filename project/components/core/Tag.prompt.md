**Tag** — rounded pill for cat attributes (age, breed, sex, coat) and metadata. Quiet by default; use `tone` for emphasis and `dot` for coat-colour swatches.

```jsx
<Tag tone="sage">2 éves</Tag>
<Tag dot="var(--cat-orange)">Vörös cirmos</Tag>
<Tag tone="forest" icon={icon('map-pin')}>Budapest</Tag>
```

Tones: `neutral` `sage` `forest` `camel` `cocoa`. Sizes `sm`/`md`. `dot` renders a coloured circle (pass a `--cat-*` token).
