// Home / landing view. Exposes window.HomeView.
function HomeView({ onNav, onOpenCat }) {
  const { Button, CatCard, Tag } = window.CicaKeresDesignSystem_1a6097;
  const D = window.CK_DATA;
  const featured = D.cats.slice(0, 4);

  const steps = [
    ['search', 'Böngéssz', 'Szűrj kor, szín, fajta, nem és helyszín szerint az ország cicái között.'],
    ['heart', 'Találj rá', 'Mentsd el a kedvenceidet és ismerd meg a történetüket, egészségi adataikat.'],
    ['paw-print', 'Fogadd örökbe', 'Vedd fel a kapcsolatot a menhellyel, és vidd haza új családtagod.'],
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ background: 'var(--cream-50)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 40px',
          display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 40, alignItems: 'center' }}>
          <div>
            <p className="ck-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <Icon name="paw-print" size={15} color="var(--camel-600)" /> Cica-örökbefogadás Magyarországon
            </p>
            <h1 style={{ fontSize: 'var(--text-4xl)', margin: '14px 0 18px', lineHeight: 1.04 }}>
              Találd meg álmaid cicáját — néhány kattintással.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--text-body)',
              lineHeight: 1.6, maxWidth: 460, marginBottom: 26 }}>
              Egy helyen az ország menhelyeinek örökbe fogadható cicái. Minden lakó oltott,
              ivartalanított és egészségügyileg ellenőrzött.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="primary" size="lg" iconLeft={<Icon name="search" size={18} />} onClick={() => onNav('browse')}>
                Cicák böngészése
              </Button>
              <Button variant="secondary" size="lg" onClick={() => onNav('shelters')}>
                Menhelyek
              </Button>
            </div>
            <div style={{ display: 'flex', gap: 26, marginTop: 30 }}>
              {[['1 240+', 'cica gazdira vár'], ['86', 'partner menhely'], ['9 300+', 'sikeres örökbefogadás']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--forest-700)' }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Hero art */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%',
              background: 'var(--sage-200)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%',
              border: '2px dashed var(--camel-300)', top: '50%', left: '50%',
              transform: 'translate(-46%,-54%)' }} />
            <img src="../../assets/mascot-cat.png" alt="CicaKereső mascot"
              style={{ position: 'relative', width: 360, filter: 'drop-shadow(0 18px 30px rgba(104,66,48,0.18))' }} />
            <div style={{ position: 'absolute', bottom: 18, left: 8, background: 'var(--white)',
              borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', padding: '10px 14px',
              display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 38, height: 38, borderRadius: '50%', background: 'var(--success-bg)',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="shield-check" size={20} color="var(--success)" /></span>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-body)' }}>
                <b style={{ fontFamily: 'var(--font-display)' }}>Ellenőrzött</b><br />menhelyek
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COAT QUICK FILTER */}
      <section style={{ background: 'var(--surface-cream)', borderTop: '1px solid var(--cream-200)', borderBottom: '1px solid var(--cream-200)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px 28px',
          display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--cocoa-700)' }}>Gyors keresés szín szerint:</span>
          {D.coats.map(([lab, c]) => (
            <button key={lab} onClick={() => onNav('browse')} style={{ display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--white)', border: '1.5px solid var(--sage-300)', borderRadius: 'var(--radius-pill)',
              padding: '6px 14px 6px 8px', cursor: 'pointer', fontFamily: 'var(--font-display)', fontWeight: 500,
              fontSize: 'var(--text-sm)', color: 'var(--cocoa-700)' }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: c, boxShadow: 'inset 0 0 0 1px rgba(104,66,48,0.15)' }} />
              {lab}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED CATS */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <p className="ck-eyebrow">🐾 Új lakók a héten</p>
            <h2 style={{ margin: '6px 0 0' }}>Cicák, akik gazdira várnak</h2>
          </div>
          <Button variant="ghost" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => onNav('browse')}>Összes cica</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {featured.map(cat => (
            <CatCard key={cat.id} name={cat.name}
              photo="../../assets/mascot-cat.png" photoFilter={cat.filter}
              age={cat.age} sex={cat.sex} breed={cat.breed}
              coatColor={cat.coatColor} location={cat.city} shelter={cat.shelter}
              status={cat.status} onClick={() => onOpenCat(cat.id)} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 0' }}>
        <h2 style={{ textAlign: 'center', marginBottom: 8 }}>Három lépés az új családtagig</h2>
        <p style={{ textAlign: 'center', fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: 36 }}>
          Az örökbefogadás egyszerű, átlátható és biztonságos.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {steps.map(([icon, title, body], i) => (
            <div key={title} style={{ background: 'var(--white)', border: '1px solid var(--cream-200)',
              borderRadius: 'var(--radius-lg)', padding: '28px 24px', boxShadow: 'var(--shadow-sm)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 18, right: 20, fontFamily: 'var(--font-display)',
                fontWeight: 700, fontSize: 38, color: 'var(--sage-200)' }}>{i + 1}</span>
              <span style={{ width: 54, height: 54, borderRadius: 'var(--radius-md)', background: 'var(--sage-100)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name={icon} size={26} color="var(--forest-700)" /></span>
              <h3 style={{ margin: '0 0 8px', fontSize: 'var(--text-lg)' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', margin: 0, lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <p className="ck-eyebrow">Cicás szolgáltatók</p>
            <h2 style={{ margin: '6px 0 0' }}>Minden, amire a cicádnak szüksége van</h2>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {D.services.map(s => (
            <button key={s.id} onClick={() => onNav('services')} style={{ textAlign: 'left', cursor: 'pointer',
              background: 'var(--surface-cream)', border: '1px solid var(--cream-200)', borderRadius: 'var(--radius-lg)',
              padding: '22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'var(--camel-300)',
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={s.icon} size={24} color="var(--cocoa-800)" /></span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--cocoa-800)' }}>{s.label}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>{s.count} szolgáltató</span>
            </button>
          ))}
        </div>
      </section>

      {/* DONATE BAND */}
      <section style={{ margin: '64px 0 0' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 28px' }}>
          <div style={{ background: 'var(--forest-700)', borderRadius: 'var(--radius-xl)', padding: '44px 48px',
            display: 'flex', alignItems: 'center', gap: 32, color: 'var(--cream-50)', position: 'relative', overflow: 'hidden' }}>
            <img src="../../assets/mascot-cat.png" alt="" style={{ width: 150, flexShrink: 0,
              filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }} />
            <div style={{ flex: 1 }}>
              <h2 style={{ color: 'var(--cream-50)', margin: '0 0 8px' }}>Támogass egy menhelyet</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(250,241,228,0.82)', margin: 0, maxWidth: 520, lineHeight: 1.6 }}>
                Adományoddal eledelt, oltást és meleg fekhelyet biztosítasz a gazdira váró cicáknak.
              </p>
            </div>
            <Button variant="accent" size="lg" iconLeft={<Icon name="paw-print" size={18} />} onClick={() => onNav('donate')}>
              Adományozok
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
Object.assign(window, { HomeView });
