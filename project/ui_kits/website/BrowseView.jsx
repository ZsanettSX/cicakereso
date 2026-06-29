// Browse / search view with a sticky filter sidebar. Exposes window.BrowseView.
function BrowseView({ onOpenCat }) {
  const { CatCard, Select, Checkbox, FilterChip, ColorSwatch, Button, Badge } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const [age, setAge] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [city, setCity] = React.useState('');
  const [coat, setCoat] = React.useState(null);
  const [onlyUrgent, setOnlyUrgent] = React.useState(false);
  const [fixed, setFixed] = React.useState(true);
  const [favs, setFavs] = React.useState({ mazli: true });

  const cities = [...new Set(D.cats.map(c => c.city))];

  const results = D.cats.filter(c =>
    (!age || c.ageGroup === age) &&
    (!sex || c.sex === sex.toLowerCase()) &&
    (!city || c.city === city) &&
    (!coat || c.coat.startsWith(coat)) &&
    (!onlyUrgent || c.status === 'urgent')
  );

  const reset = () => { setAge(''); setSex(''); setCity(''); setCoat(null); setOnlyUrgent(false); };

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '32px 28px 0' }}>
      <p className="ck-eyebrow">Örökbefogadható cicák</p>
      <h1 style={{ margin: '6px 0 4px', fontSize: 'var(--text-2xl)' }}>Böngéssz a cicák között</h1>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: 22 }}>
        Szűkítsd a keresést, és találd meg a hozzád illő cicát.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '264px 1fr', gap: 28, alignItems: 'start' }}>
        {/* SIDEBAR */}
        <aside style={{ position: 'sticky', top: 88, background: 'var(--white)', border: '1px solid var(--cream-200)',
          borderRadius: 'var(--radius-lg)', padding: '22px', boxShadow: 'var(--shadow-sm)',
          display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)',
              fontWeight: 700, color: 'var(--cocoa-800)' }}>
              <Icon name="sliders-horizontal" size={18} color="var(--forest-700)" /> Szűrők
            </span>
            <a onClick={reset} style={{ cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)',
              color: 'var(--camel-600)' }}>Törlés</a>
          </div>
          <Select label="Kor" value={age} onChange={e => setAge(e.target.value)} placeholder="Bármely"
            options={['Kölyök', 'Fiatal', 'Felnőtt', 'Idős']} />
          <Select label="Nem" value={sex} onChange={e => setSex(e.target.value)} placeholder="Bármely"
            options={['Nőstény', 'Kandúr']} />
          <Select label="Helyszín" value={city} onChange={e => setCity(e.target.value)} placeholder="Egész ország"
            options={cities} />
          <div>
            <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)',
              color: 'var(--cocoa-700)', display: 'block', marginBottom: 10 }}>Szín</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {D.coats.map(([lab, c]) => (
                <ColorSwatch key={lab} color={c} label={lab} selected={coat === lab}
                  onClick={() => setCoat(coat === lab ? null : lab)} />
              ))}
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--cream-200)', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Checkbox label="Csak ivartalanított" checked={fixed} onChange={e => setFixed(e.target.checked)} />
            <Checkbox label="Csak sürgős esetek" checked={onlyUrgent} onChange={e => setOnlyUrgent(e.target.checked)} />
          </div>
        </aside>

        {/* RESULTS */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
            <FilterChip selected={!age && !onlyUrgent} onClick={reset}>Összes</FilterChip>
            <FilterChip selected={age === 'Kölyök'} onClick={() => setAge(age === 'Kölyök' ? '' : 'Kölyök')}>Kölykök</FilterChip>
            <FilterChip selected={onlyUrgent} onClick={() => setOnlyUrgent(!onlyUrgent)}
              icon={<Icon name="alarm-clock" size={15} />}>Sürgős</FilterChip>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-display)', color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
              <b style={{ color: 'var(--forest-700)' }}>{results.length}</b> találat
            </span>
          </div>

          {results.length ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {results.map(cat => (
                <CatCard key={cat.id} name={cat.name}
                  photo="../../assets/mascot-cat.png" photoFilter={cat.filter}
                  age={cat.age} sex={cat.sex} breed={cat.breed} coatColor={cat.coatColor}
                  location={cat.city} shelter={cat.shelter} status={cat.status}
                  favorite={!!favs[cat.id]} onFavorite={() => setFavs(f => ({ ...f, [cat.id]: !f[cat.id] }))}
                  onClick={() => onOpenCat(cat.id)} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 20px', background: 'var(--surface-cream)',
              borderRadius: 'var(--radius-lg)', border: '1px dashed var(--border-sage)' }}>
              <img src="../../assets/mascot-cat.png" alt="" style={{ width: 120, opacity: 0.85, marginBottom: 14 }} />
              <h3 style={{ margin: '0 0 6px' }}>Még nincs találat</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '0 0 16px' }}>
                Próbálj tágítani a szűrőkön.
              </p>
              <Button variant="secondary" onClick={reset}>Szűrők törlése</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { BrowseView });
