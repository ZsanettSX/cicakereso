// Donation flow. Exposes window.DonateView.
function DonateView() {
  const { Button, Input, Tag } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const amounts = [2000, 5000, 10000, 20000];
  const [amount, setAmount] = React.useState(5000);
  const [custom, setCustom] = React.useState('');
  const [shelter, setShelter] = React.useState('mancs');
  const [monthly, setMonthly] = React.useState(false);
  const fmt = n => n.toLocaleString('hu-HU') + ' Ft';
  const value = custom ? parseInt(custom.replace(/\D/g, '') || '0', 10) : amount;

  const impact = value >= 20000 ? 'egy hónap eledel egy cicának'
    : value >= 10000 ? 'egy teljes oltási csomag'
    : value >= 5000 ? 'két hét meleg étel'
    : 'egy zacskó minőségi tápot';

  return (
    <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: '36px 28px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <img src="../../assets/mascot-cat.png" alt="" style={{ width: 130, marginBottom: 6,
          filter: 'drop-shadow(0 12px 22px rgba(104,66,48,0.18))' }} />
        <p className="ck-eyebrow">🐾 Támogatás</p>
        <h1 style={{ margin: '6px 0 8px', fontSize: 'var(--text-3xl)' }}>Adományozz egy cicáért</h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', lineHeight: 1.6, maxWidth: 480, margin: '0 auto' }}>
          Adományod 100%-a a választott menhelyhez kerül — eledel, oltás és meleg fekhely a gazdira váró cicáknak.
        </p>
      </div>

      <div style={{ background: 'var(--white)', border: '1px solid var(--cream-200)', borderRadius: 'var(--radius-xl)',
        padding: '28px 30px', boxShadow: 'var(--shadow-md)' }}>
        {/* shelter pick */}
        <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--cocoa-700)', display: 'block', marginBottom: 10 }}>
          Melyik menhelyet támogatod?
        </label>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 24 }}>
          {D.shelters.map(s => (
            <button key={s.id} onClick={() => setShelter(s.id)} style={{ flex: 1, minWidth: 140, cursor: 'pointer',
              textAlign: 'left', padding: '12px 14px', borderRadius: 'var(--radius-md)',
              background: shelter === s.id ? 'var(--sage-100)' : 'var(--white)',
              border: `1.5px solid ${shelter === s.id ? 'var(--forest-700)' : 'var(--cream-200)'}`,
              fontFamily: 'var(--font-display)' }}>
              <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--cocoa-800)' }}>{s.name}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{s.city}</div>
            </button>
          ))}
        </div>

        {/* amount */}
        <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--cocoa-700)', display: 'block', marginBottom: 10 }}>
          Összeg
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, marginBottom: 12 }}>
          {amounts.map(a => (
            <button key={a} onClick={() => { setAmount(a); setCustom(''); }} style={{ cursor: 'pointer',
              padding: '14px 8px', borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-display)', fontWeight: 700,
              fontSize: 'var(--text-md)',
              background: (!custom && amount === a) ? 'var(--forest-700)' : 'var(--white)',
              color: (!custom && amount === a) ? 'var(--cream-50)' : 'var(--cocoa-800)',
              border: `1.5px solid ${(!custom && amount === a) ? 'var(--forest-700)' : 'var(--cream-200)'}` }}>
              {a.toLocaleString('hu-HU')} Ft
            </button>
          ))}
        </div>
        <Input placeholder="Egyéni összeg (Ft)" value={custom} onChange={e => setCustom(e.target.value)}
          iconLeft={<Icon name="wallet" size={18} />} />

        {/* impact */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'var(--surface-cream)',
          borderRadius: 'var(--radius-md)', padding: '14px 16px', margin: '18px 0' }}>
          <span style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--camel-300)', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="gift" size={20} color="var(--cocoa-800)" /></span>
          <p style={{ margin: 0, fontFamily: 'var(--font-body)', color: 'var(--text-body)', fontSize: 'var(--text-sm)' }}>
            <b style={{ fontFamily: 'var(--font-display)' }}>{fmt(value)}</b> = {impact}.
          </p>
        </div>

        <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', marginBottom: 20 }}>
          <span onClick={() => setMonthly(!monthly)} style={{ width: 44, height: 26, borderRadius: 'var(--radius-pill)',
            background: monthly ? 'var(--forest-700)' : 'var(--cream-200)', position: 'relative', transition: 'background var(--dur-base)' }}>
            <span style={{ position: 'absolute', top: 3, left: monthly ? 21 : 3, width: 20, height: 20, borderRadius: '50%',
              background: 'var(--white)', boxShadow: 'var(--shadow-sm)', transition: 'left var(--dur-base) var(--ease-soft)' }} />
          </span>
          <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)' }}>Havi rendszeres támogatás</span>
        </label>

        <Button variant="primary" size="lg" fullWidth iconLeft={<Icon name="paw-print" size={18} />}>
          {fmt(value)} adományozása{monthly ? ' havonta' : ''}
        </Button>
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: '14px 0 0' }}>
          <Icon name="lock" size={12} /> Biztonságos fizetés · Az adomány 100%-a a menhelyé
        </p>
      </div>
    </div>
  );
}
Object.assign(window, { DonateView });
