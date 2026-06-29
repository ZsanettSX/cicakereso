// Shelters: list + single shelter detail. Exposes window.ShelterView.
function ShelterView({ shelterId, onOpenShelter, onOpenCat, onNav }) {
  const { Avatar, Button, CatCard, Tag, Badge } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;

  // LIST
  if (!shelterId) {
    return (
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '32px 28px 0' }}>
        <p className="ck-eyebrow">Partner menhelyek</p>
        <h1 style={{ margin: '6px 0 4px', fontSize: 'var(--text-2xl)' }}>Menhelyek Magyarországon</h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: 26 }}>
          Ellenőrzött menhelyek és alapítványok, akik a cicák jólétéért dolgoznak.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {D.shelters.map(s => (
            <div key={s.id} onClick={() => onOpenShelter(s.id)} style={{ cursor: 'pointer', background: 'var(--white)',
              border: '1px solid var(--cream-200)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ height: 88, background: 'var(--sage-200)', position: 'relative' }}>
                <div style={{ position: 'absolute', left: 20, bottom: -24 }}><Avatar name={s.name} size={56} ring /></div>
              </div>
              <div style={{ padding: '34px 20px 20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <h3 style={{ margin: 0, fontSize: 'var(--text-lg)' }}>{s.name}</h3>
                  <Icon name="badge-check" size={18} color="var(--forest-700)" />
                </div>
                <p style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)',
                  color: 'var(--text-muted)', fontSize: 'var(--text-sm)', margin: '6px 0 12px' }}>
                  <Icon name="map-pin" size={14} /> {s.city} · {s.since} óta
                </p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', fontSize: 'var(--text-sm)',
                  lineHeight: 1.6, margin: '0 0 14px' }}>{s.blurb}</p>
                <Tag tone="sage"><Icon name="cat" size={13} /> {s.cats} cica gazdira vár</Tag>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // DETAIL
  const s = D.shelters.find(x => x.id === shelterId) || D.shelters[0];
  const cats = D.cats.filter(c => c.shelter === s.name);
  return (
    <div>
      <div style={{ height: 180, background: 'linear-gradient(var(--sage-300), var(--sage-200))' }} />
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 28px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, marginTop: -48, marginBottom: 28 }}>
          <Avatar name={s.name} size={104} ring />
          <div style={{ flex: 1, paddingBottom: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <h1 style={{ margin: 0, fontSize: 'var(--text-2xl)' }}>{s.name}</h1>
              <Badge status="info"><Icon name="badge-check" size={14} /> Ellenőrzött</Badge>
            </div>
            <p style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)',
              color: 'var(--text-muted)', margin: '8px 0 0' }}>
              <Icon name="map-pin" size={15} /> {s.city} · Alapítva {s.since} · {s.cats} cica
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10, paddingBottom: 6 }}>
            <Button variant="secondary" iconLeft={<Icon name="phone" size={16} />}>Kapcsolat</Button>
            <Button variant="accent" iconLeft={<Icon name="paw-print" size={16} />} onClick={() => onNav('donate')}>Támogatom</Button>
          </div>
        </div>

        <div style={{ background: 'var(--surface-cream)', border: '1px solid var(--cream-200)',
          borderRadius: 'var(--radius-lg)', padding: '20px 24px', marginBottom: 32 }}>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>{s.blurb}</p>
        </div>

        <h2 style={{ marginBottom: 18 }}>{s.name} cicái</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, paddingBottom: 8 }}>
          {cats.map(c => (
            <CatCard key={c.id} name={c.name} photo="../../assets/mascot-cat.png" photoFilter={c.filter}
              age={c.age} sex={c.sex} breed={c.breed} coatColor={c.coatColor}
              location={c.city} shelter={c.shelter} status={c.status} onClick={() => onOpenCat(c.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { ShelterView });
