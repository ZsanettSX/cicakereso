**Input** — single-line text field. Rounded 16px, cream border, sage focus ring. Pair a `iconLeft` for search.

```jsx
<Input label="Keresés" placeholder="Cica neve…" iconLeft={icon('search')} />
<Input label="E-mail" type="email" error="Kötelező mező" />
```

Props: `label`, `iconLeft`, `helper`, `error` (terracotta state), `disabled`, plus native input props.
