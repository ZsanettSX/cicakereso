**CatCard** — the central listing card for one adoptable cat. Photo with availability badge + favourite heart; below, name with coat dot, attribute tags, and location/shelter. Lifts on hover. Use in the browse grid.

```jsx
<CatCard
  name="Mázli" photo="/cats/mazli.jpg"
  age="2 éves" sex="kandúr" breed="Európai rövidszőrű"
  coatColor="var(--cat-orange)" coatLabel="Vörös cirmos"
  location="Budapest" shelter="Mancs Menhely"
  status="available" favorite onFavorite={...} onClick={...}
/>
```

Composes `Badge` + `Tag`. `status`: available / reserved / urgent. Designed for a 2–4 col responsive grid (~300px wide).
