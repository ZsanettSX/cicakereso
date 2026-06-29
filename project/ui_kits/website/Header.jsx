// Site header / nav. Exposes window.Header.
function Header({ view, onNav }) {
  const { Button } = window.CicaKeresDesignSystem_1a6097;
  const links = [
    ['browse', 'Cicák'],
    ['shelters', 'Menhelyek'],
    ['services', 'Szolgáltatók'],
    ['donate', 'Támogatás'],
  ];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(250,241,228,0.86)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--cream-200)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)', margin: '0 auto', padding: '12px 28px',
        display: 'flex', alignItems: 'center', gap: 24,
      }}>
        <a onClick={() => onNav('home')} style={{ cursor: 'pointer', display: 'flex' }}>
          <WordMark height={42} />
        </a>
        <nav style={{ display: 'flex', gap: 4, marginLeft: 12 }}>
          {links.map(([id, label]) => {
            const active = view === id;
            return (
              <a key={id} onClick={() => onNav(id)} style={{
                cursor: 'pointer', padding: '8px 14px', borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-display)', fontWeight: active ? 700 : 500,
                fontSize: 'var(--text-base)',
                color: active ? 'var(--forest-700)' : 'var(--cocoa-700)',
                background: active ? 'var(--sage-100)' : 'transparent',
                textDecoration: 'none',
              }}>{label}</a>
            );
          })}
        </nav>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          <a onClick={() => onNav('browse')} style={{ cursor: 'pointer', display: 'flex', color: 'var(--cocoa-700)' }} title="Keresés">
            <Icon name="search" size={22} />
          </a>
          <a style={{ cursor: 'pointer', display: 'flex', color: 'var(--cocoa-700)' }} title="Kedvencek">
            <Icon name="heart" size={22} />
          </a>
          <Button variant="accent" size="sm" iconLeft={<Icon name="paw-print" size={16} />} onClick={() => onNav('donate')}>
            Támogatom
          </Button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { Header });
