export default function AdatvedelemPage() {
  const sections = [
    { title: '1. Az adatkezelő', body: 'Adatkezelő: CicaKereső (cicakereso.hu). Kapcsolat: hello@cicakereso.hu. A weboldal látogatásával és használatával a Felhasználó elfogadja jelen adatvédelmi tájékoztató rendelkezéseit.' },
    { title: '2. Kezelt adatok köre', body: 'A weboldal kapcsolatfelvételi során az alábbi személyes adatokat kezeli: név, e-mail cím, üzenet tartalma. A „Kedvenceim" funkció kizárólag a böngésző helyi tárhelyén (localStorage) működik – ezeket az adatokat a Szolgáltató nem látja és nem tárolja.' },
    { title: '3. Az adatkezelés célja és jogalapja', body: 'Az adatkezelés célja: kapcsolatfelvételi kérelmek megválaszolása. Jogalap: a Felhasználó hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont). Az adatokat kizárólag a megkeresés megválaszolásához használjuk fel.' },
    { title: '4. Adatok tárolása és biztonsága', body: 'A kapcsolatfelvételi üzenetek e-mailben érkeznek és levelezési rendszerünkben tárolódnak. Megfelelő technikai és szervezési intézkedéseket alkalmazunk az adatok védelme érdekében.' },
    { title: '5. Adattovábbítás', body: 'Személyes adatokat harmadik félnek csak jogszabályi kötelezettség esetén adunk át. Adatfeldolgozóink: tárhelyszolgáltató (EU területén belül). Adatokat harmadik országba nem továbbítunk.' },
    { title: '6. Sütik (cookie-k)', body: 'A weboldal működéséhez szükséges sütiket használ (munkamenet-süti az admin felületen). Analitikai sütit jelenleg nem alkalmazunk. A böngésző beállításaival a sütik letilthatók.' },
    { title: '7. Az érintett jogai', body: 'A Felhasználónak joga van: hozzáférni az adataihoz, kérni azok helyesbítését, törlését vagy az adatkezelés korlátozását, adathordozhatósághoz, és panaszt benyújtani a NAIH-hoz (naih.hu).' },
    { title: '8. Adatmegőrzési idő', body: 'Kapcsolatfelvételi üzeneteket a megkeresés lezárásától számított 1 évig őrzünk, majd töröljük. A Felhasználó bármikor kérheti adatai törlését a hello@cicakereso.hu e-mail-en.' },
  ]

  return (
    <div style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto', padding: '56px 28px 80px' }}>
      <p className="ck-eyebrow" style={{ marginBottom: 12 }}>Jogi dokumentumok</p>
      <h1 style={{ marginBottom: 8 }}>Adatvédelmi tájékoztató</h1>
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
        Adatvédelmi kérdések: <a href="mailto:hello@cicakereso.hu" style={{ color: 'var(--text-link)' }}>hello@cicakereso.hu</a>
      </div>
    </div>
  )
}
