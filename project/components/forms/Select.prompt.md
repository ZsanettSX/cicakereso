**Select** — styled dropdown for the browse filters (kor, szín, fajta, nem, helyszín).

```jsx
<Select label="Kor" placeholder="Bármely"
  options={['Kölyök', 'Fiatal', 'Felnőtt', 'Idős']} />
```

`options` accepts plain strings or `{value,label}`. `placeholder` becomes a muted empty option.
