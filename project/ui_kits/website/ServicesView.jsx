// Cat-service providers directory. Exposes window.ServicesView.
function ServicesView() {
  const { Button, Tag, Avatar, Badge } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const [cat, setCat] = React.useState('all');

  const providers = [
    { name: 'Bajusz Cicakozmetika', type: 'kozmetika', icon: 'scissors', city: 'Budapest', rating: 4.9, tag: 'Kozmetika' },
    { name: 'Dorombo Panzió', type: 'panzio', icon: 'house', city: 'Szeged', rating: 4.8, tag: 'Panzió' },
    { name: 'Vörös Tappancs Tenyészet', type: 'tenyeszto', icon: 'award', city: 'Győr', rating: 5.0, tag: 'Tenyésztő' },
    { name: 'Dr. Kandúr Állatorvos', type: 'orvos', icon: 'stethoscope', city: 'Debrecen', rating: 4.9, tag: 'Állatorvos' },
    { name: 'Cirmos Szépségszalon', type: 'kozmetika', icon: 'scissors', city: 'Pécs', rating: 4.7, tag: 'Kozmetika' },
    { name: 'Maine Coon Otthon', type: 'tenyeszto', icon: 'award', city: 'Budapest', rating: 4.9, tag: 'Tenyésztő' },
  ];
  const shown = providers.filter(p => cat === 'all' || p.type === cat);

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '32px 28px 0' }}>
      <p className="ck-eyebrow">Cicás szolgáltatók</p>
      <h1 style={{ margin: '6px 0 4px', fontSize: 'var(--text-2xl)' }}>Megbízható szolgáltatók a cicádnak</h1>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: 24 }}>
        Kozmetika, panzió, tenyésztők és állatorvosok egy helyen.
      </p>

      <div style={{ display: 'flex', gap: 10, marginBottom: 26, flexWrap: 'wrap' }}>
        {[['all', 'Összes', 'layout-grid'], ...D.services.map(s => [s.id, s.label, s.icon])].map(([id, lab, icon]) => (
          <button key={id} onClick={() => setCat(id)} style={{ display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '8px 15px', borderRadius: 'var(--radius-pill)', cursor: 'pointer', fontFamily: 'var(--font-display)',
            fontWeight: 500, fontSize: 'var(--text-sm)',
            background: cat === id ? 'var(--forest-700)' : 'var(--white)',
            color: cat === id ? 'var(--cream-50)' : 'var(--cocoa-700)',
            border: `1.5px solid ${cat === id ? 'var(--forest-700)' : 'var(--sage-300)'}` }}>
            <Icon name={icon} size={15} /> {lab}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, paddingBottom: 8 }}>
        {shown.map(p => (
          <div key={p.name} style={{ background: 'var(--white)', border: '1px solid var(--cream-200)',
            borderRadius: 'var(--radius-lg)', padding: '20px', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--camel-300)',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={p.icon} size={24} color="var(--cocoa-800)" /></span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: 'var(--font-display)',
                fontWeight: 700, color: 'var(--camel-600)' }}>
                <Icon name="star" size={15} color="var(--camel-500)" /> {p.rating}
              </span>
            </div>
            <div>
              <h3 style={{ margin: '0 0 4px', fontSize: 'var(--text-lg)' }}>{p.name}</h3>
              <p style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)',
                color: 'var(--text-muted)', fontSize: 'var(--text-sm)', margin: 0 }}>
                <Icon name="map-pin" size={14} /> {p.city}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
              <Tag tone="sage">{p.tag}</Tag>
              <Button variant="ghost" size="sm" iconRight={<Icon name="arrow-right" size={15} />}>Profil</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Object.assign(window, { ServicesView });
