// Forest-green footer band. Exposes window.Footer.
function Footer({ onNav }) {
  const cols = [
    ['Örökbefogadás', ['Cicák böngészése', 'Hogyan működik?', 'Gyakori kérdések', 'Sikertörténetek']],
    ['Menhelyeknek', ['Menhely regisztráció', 'Cica feltöltése', 'Partnerprogram']],
    ['CicaKereső', ['Rólunk', 'Kapcsolat', 'Adatvédelem', 'ÁSZF']],
  ];
  return (
    <footer style={{ background: 'var(--forest-700)', color: 'var(--cream-50)', marginTop: 'var(--space-10)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 32px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <WordMark height={44} light />
          <p style={{ fontFamily: 'var(--font-body)', marginTop: 16, maxWidth: 280,
            color: 'rgba(250,241,228,0.78)', lineHeight: 1.6 }}>
            Találd meg álmaid cicáját Magyarország menhelyeinek örökbe fogadható lakói között.
          </p>
        </div>
        {cols.map(([title, items]) => (
          <div key={title}>
            <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-md)',
              color: 'var(--cream-50)', margin: '0 0 14px' }}>{title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {items.map(i => (
                <li key={i}><a style={{ cursor: 'pointer', fontFamily: 'var(--font-body)',
                  color: 'rgba(250,241,228,0.72)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>{i}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid rgba(250,241,228,0.16)', padding: '18px 28px',
        maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-xs)', color: 'rgba(250,241,228,0.6)' }}>
        <span>© 2026 CicaKereső · cicakereso.hu</span>
        <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>Készült 🐾-tal Magyarországon</span>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
