export default function RolunkPage() {
  return (
    <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: '56px 28px 80px' }}>
      <p className="ck-eyebrow" style={{ marginBottom: 12 }}>A projektről</p>
      <h1 style={{ marginBottom: 24 }}>Rólunk</h1>

      <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start', marginBottom: 48, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>
            A <strong>CicaKereső</strong> egy szívügyünk — olyan platformot hoztunk létre, ahol Magyarország összes partner menhelyének örökbefogadható cicái egy helyen megtalálhatóak.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 20 }}>
            Célunk, hogy az örökbefogadás egyszerű, átlátható és biztonságos legyen: ne kelljen tucatnyi oldalt végigbogarászni, hogy megtaláld álmaid szőrmókát. Szűrj kor, szín, fajta és helyszín szerint – és találkozz a tiedével.
          </p>
          <p style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8, color: 'var(--text-body)', marginBottom: 0 }}>
            A cicák elhelyezéséért, gondozásáért és az örökbefogadási folyamatért a partner menhelyek felelnek. Mi az összekötők vagyunk: a felületet, az adatbázist és a szűrőket biztosítjuk.
          </p>
        </div>
        <div style={{ flexShrink: 0 }}>
          <img src="/mascot-cat.png" alt="Kabala cica" style={{ width: 200, filter: 'drop-shadow(0 10px 20px rgba(104,66,48,0.2))' }} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }} className="ck-about-grid">
        {[
          { title: 'Transzparencia', body: 'Minden menhely ellenőrzött és megbízható. Csak olyan szervezetekkel dolgozunk, amelyeket személyesen is ismerünk.' },
          { title: 'Egyszerűség', body: 'Egy keresés, egy platform – hogy ne kelljen órákat tölteni a böngészéssel. A cicák ott várnak, ahol lenniük kell: közel hozzád.' },
          { title: 'Szeretet', body: 'Ez egy szenvedélyből született projekt. Minden fejlesztés mögött az a cél húzódik, hogy még több cica találhasson szerető otthont.' },
        ].map(({ title, body }) => (
          <div key={title} style={{ background: 'var(--sage-100)', borderRadius: 'var(--radius-lg)', padding: '24px 20px' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: 'var(--text-lg)', color: 'var(--forest-700)' }}>{title}</h3>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', margin: 0, lineHeight: 1.6 }}>{body}</p>
          </div>
        ))}
      </div>

      <div style={{ background: 'var(--forest-700)', borderRadius: 'var(--radius-xl)', padding: '36px 40px', color: 'var(--cream-50)' }}>
        <h2 style={{ color: 'var(--cream-50)', margin: '0 0 12px' }}>Szeretnél partner menhely lenni?</h2>
        <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(250,241,228,0.85)', margin: '0 0 20px', lineHeight: 1.6 }}>
          Ha menhelyet vezetsz és szeretnéd, hogy cicáid felkerüljenek a CicaKeresőre, írj nekünk! Az adatbevitelt és a feltöltést mi végezzük – neked csak az adatokat kell megadni.
        </p>
        <a href="mailto:hello@cicakereso.hu?subject=Partner menhely jelentkezés" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--camel-500)', color: 'var(--cocoa-800)', fontFamily: 'var(--font-display)', fontWeight: 700, padding: '12px 24px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
          Kapcsolatfelvétel →
        </a>
      </div>

      <style>{`@media(max-width:640px){.ck-about-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  )
}
