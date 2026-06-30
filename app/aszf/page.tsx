export default function AszfPage() {
  const sections = [
    { title: '1. Felek meghatározása', body: 'A jelen Általános Szerződési Feltételek (ÁSZF) a CicaKereső (cicakereso.hu, továbbiakban: Szolgáltató) és a weboldalt látogató és igénybe vevő felhasználók (továbbiakban: Felhasználó) közötti jogviszony feltételeit szabályozzák.' },
    { title: '2. A szolgáltatás leírása', body: 'A CicaKereső egy online aggregátor platform, amely partner menhelyektől gyűjti össze és jeleníti meg az örökbefogadható macskákra vonatkozó adatokat. A Szolgáltató nem közvetlenül biztosít örökbefogadást, és nem felelős a partner menhelyek által közzétett adatok pontosságáért.' },
    { title: '3. Felhasználási feltételek', body: 'A weboldal ingyenesen használható. A Felhasználó köteles a weboldalt a hatályos jogszabályoknak megfelelően, jóhiszeműen és rendeltetésszerűen igénybe venni. Tilos a weboldal tartalmát jogosulatlanul másolni, terjeszteni vagy kereskedelmi célra felhasználni.' },
    { title: '4. Adatok pontossága', body: 'A cicaadatokat a partner menhelyek bocsátják rendelkezésünkre. A Szolgáltató törekszik az adatok naprakész kezelésére, azonban nem szavatol azok teljes körű pontosságáért. Frissítési kéréssel közvetlenül a menhelyhez vagy hozzánk fordulhatsz.' },
    { title: '5. Felelősség korlátozása', body: 'A Szolgáltató nem vállal felelősséget az örökbefogadási folyamat során esetlegesen felmerülő károkért, a menhelyek által közölt adatok helytelenségéért, valamint a weboldal időszakos elérhetetlenségéért.' },
    { title: '6. Szellemi tulajdon', body: 'A weboldal kódja, dizájnja, logója és egyéb elemei szerzői jogi védelem alatt állnak. Felhasználásuk kizárólag a Szolgáltató előzetes írásos engedélyével lehetséges.' },
    { title: '7. ÁSZF módosítása', body: 'A Szolgáltató fenntartja a jogot, hogy jelen ÁSZF-et bármikor módosítsa. A módosításokról a weboldalon keresztül értesítjük a felhasználókat. A weboldal folyamatos használata a módosítások elfogadásának minősül.' },
    { title: '8. Alkalmazandó jog', body: 'Jelen ÁSZF-re a magyar jog az irányadó. Vitás kérdések esetén a felek elsősorban békés úton kísérlik meg a rendezést.' },
  ]

  return (
    <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: '56px 28px 80px' }}>
      <p className="ck-eyebrow" style={{ marginBottom: 12 }}>Jogi dokumentumok</p>
      <h1 style={{ marginBottom: 8 }}>Általános Szerződési Feltételek</h1>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: 40 }}>
        Hatályos: 2024. január 1-től · <em>Ez a dokumentum jelenleg szerkesztés alatt áll — végleges, jogilag ellenőrzött szöveg hamarosan.</em>
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        {sections.map(({ title, body }) => (
          <section key={title}>
            <h2 style={{ fontSize: 'var(--text-lg)', marginBottom: 10 }}>{title}</h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', lineHeight: 1.8, margin: 0 }}>{body}</p>
          </section>
        ))}
      </div>

      <div style={{ marginTop: 48, background: 'var(--cream-100)', borderRadius: 'var(--radius-md)', padding: '20px 24px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
        Kérdés esetén: <a href="mailto:hello@cicakereso.hu" style={{ color: 'var(--text-link)' }}>hello@cicakereso.hu</a>
      </div>
    </div>
  )
}
