**FilterChip** — toggleable pill for quick filters above the cat grid. Selected state fills forest green.

```jsx
<FilterChip selected={f==='kolyök'} count={42}
  onClick={() => setF('kolyök')}>Kölyök</FilterChip>
```

Props: `selected`, `onClick`, `icon`, `count` (trailing bubble), `disabled`.
