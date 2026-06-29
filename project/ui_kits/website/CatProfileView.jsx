// Single cat profile. Exposes window.CatProfileView.
function CatProfileView({ catId, onNav, onOpenCat, onOpenShelter }) {
  const { Tag, Badge, Button, Avatar, CatCard } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const cat = D.cats.find(c => c.id === catId) || D.cats[0];
  const [fav, setFav] = React.useState(false);
  const similar = D.cats.filter(c => c.id !== cat.id && c.ageGroup === cat.ageGroup).slice(0, 3);
  const statusLabel = { available: 'Örökbe fogadható', reserved: 'Foglalt', urgent: 'Sürgős' }[cat.status];

  const health = [
    ['syringe', 'Oltott', true], ['scissors', 'Ivartalanított', true],
    ['scan-line', 'Chippel ellátott', true], ['heart-pulse', 'Egészséges', true],
  ];

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '24px 28px 0' }}>
      <a onClick={() => onNav('browse')} style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-display)', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginBottom: 18 }}>
        <Icon name="chevron-left" size={16} /> Vissza a cicákhoz
      </a>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.9fr', gap: 36, alignItems: 'start' }}>
        {/* GALLERY */}
        <div>
          <div style={{ position: 'relative', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            background: 'var(--cream-100)', aspectRatio: '4/3', boxShadow: 'var(--shadow-md)' }}>
            <img src="../../assets/mascot-cat.png" alt={cat.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: cat.filter }} />
            <div style={{ position: 'absolute', top: 16, left: 16 }}>
              <Badge status={cat.status}>{statusLabel}</Badge>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginTop: 12 }}>
            {[0, 1, 2, 3].map(i => (
              <div key={i} style={{ aspectRatio: '1', borderRadius: 'var(--radius-md)', overflow: 'hidden',
                background: 'var(--cream-100)', border: i === 0 ? '2px solid var(--forest-700)' : '1px solid var(--cream-200)' }}>
                <img src="../../assets/mascot-cat.png" alt="" style={{ width: '100%', height: '100%',
                  objectFit: 'cover', filter: cat.filter }} />
              </div>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 style={{ margin: 0, fontSize: 'var(--text-3xl)' }}>{cat.name}</h1>
            <span style={{ width: 16, height: 16, borderRadius: '50%', background: cat.coatColor,
              boxShadow: 'inset 0 0 0 1px rgba(104,66,48,0.15)' }} />
          </div>
          <p style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)',
            color: 'var(--text-muted)', margin: '8px 0 16px' }}>
            <Icon name="map-pin" size={16} /> {cat.city} · {cat.shelter}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
            <Tag tone="sage">{cat.age}</Tag>
            <Tag tone="neutral">{cat.sex}</Tag>
            <Tag tone="neutral">{cat.breed}</Tag>
            <Tag dot={cat.coatColor}>{cat.coat}</Tag>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: 20 }}>
            {cat.name} egy {cat.traits.join(', ').toLowerCase()} cica, aki türelmes, szerető gazdira vár.
            Jól érzi magát társaságban, és imádja a napsütötte ablakpárkányt.
          </p>

          {/* traits */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 22 }}>
            {cat.traits.map(t => (
              <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--surface-cream)',
                border: '1px solid var(--cream-200)', borderRadius: 'var(--radius-pill)', padding: '6px 12px',
                fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', color: 'var(--cocoa-700)' }}>
                <Icon name="sparkles" size={14} color="var(--camel-600)" /> {t}
              </span>
            ))}
          </div>

          {/* health */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10, marginBottom: 24 }}>
            {health.map(([icon, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--success-bg)',
                borderRadius: 'var(--radius-md)', padding: '10px 14px' }}>
                <Icon name="check" size={18} color="var(--success)" />
                <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', fontSize: 'var(--text-sm)' }}>{label}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, marginBottom: 22 }}>
            <Button variant="primary" size="lg" fullWidth iconLeft={<Icon name="paw-print" size={18} />}>
              Örökbe fogadom
            </Button>
            <Button variant="secondary" size="lg" onClick={() => setFav(!fav)}
              iconLeft={<Icon name="heart" size={18} color={fav ? 'var(--danger)' : 'currentColor'} />}>
              {fav ? 'Mentve' : 'Kedvenc'}
            </Button>
          </div>

          {/* shelter card */}
          <div onClick={() => onOpenShelter(D.shelters.find(s => s.name === cat.shelter)?.id)}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, background: 'var(--white)',
            border: '1px solid var(--cream-200)', borderRadius: 'var(--radius-lg)', padding: '14px 16px', boxShadow: 'var(--shadow-xs)' }}>
            <Avatar name={cat.shelter} size={48} ring />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--cocoa-800)' }}>{cat.shelter}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{cat.city} · Ellenőrzött menhely</div>
            </div>
            <Icon name="chevron-right" size={20} color="var(--camel-600)" />
          </div>
        </div>
      </div>

      {/* SIMILAR */}
      <section style={{ marginTop: 56 }}>
        <h2 style={{ marginBottom: 20 }}>Hasonló cicák</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {similar.map(c => (
            <CatCard key={c.id} name={c.name} photo="../../assets/mascot-cat.png" photoFilter={c.filter}
              age={c.age} sex={c.sex} breed={c.breed} coatColor={c.coatColor}
              location={c.city} shelter={c.shelter} status={c.status} onClick={() => onOpenCat(c.id)} />
          ))}
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { CatProfileView });
