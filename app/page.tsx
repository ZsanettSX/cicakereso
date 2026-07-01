export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { db } from '@/lib/turso'
import { parseTraits } from '@/lib/utils'
import { shuffle } from '@/lib/utils'
import CatCarousel from '@/components/cats/CatCarousel'
import CatRowCarousel from '@/components/cats/CatRowCarousel'
import type { CatCardData } from '@/components/cats/CatCard'

function toCatCard(cat: any): CatCardData {
  return {
    id: cat.id,
    slug: cat.slug,
    name: cat.name,
    photos: cat.photos,
    ageText: cat.ageText,
    sex: cat.sex,
    breed: cat.breed,
    coatCss: cat.coatCss,
    colorCategory: cat.colorCategory,
    status: cat.status,
    traits: cat.traits,
    shelter: { name: cat.shelter.name, county: cat.shelter.county },
  }
}

export default async function HomePage() {
  const [allCats, catCount, shelterCount] = await Promise.all([
    db.cat.findMany({ where: { statusNot: 'adopted' }, orderBy: 'c.uploadedAt DESC' }),
    db.cat.count({ status: 'available' }),
    db.shelter.count(),
  ])

  const newest = allCats.slice(0, 15).map(toCatCard)
  const kolykoks = allCats.filter((c) => c.ageGroup === 'Kölyök').slice(0, 8).map(toCatCard)
  const idosek = allCats.filter((c) => c.ageGroup === 'Idős').slice(0, 8).map(toCatCard)

  const steps = [
    { icon: '🔍', title: 'Böngéssz', body: 'Szűrj kor, szín, fajta, nem és helyszín szerint az ország cicái között.' },
    { icon: '❤️', title: 'Találj rá', body: 'Mentsd el a kedvenceidet és ismerd meg a történetüket, egészségi adataikat.' },
    { icon: '🐾', title: 'Fogadd örökbe', body: 'Vedd fel a kapcsolatot a menhellyel, és vidd haza új családtagod.' },
  ]

  return (
    <div>
      {/* HERO */}
      <section style={{ background: '#f7f7f5', overflow: 'hidden' }}>
        <div className="ck-container" style={{ padding: '40px 28px 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, var(--text-4xl))', margin: '0 auto 6px', lineHeight: 1.08, maxWidth: 900, fontWeight: 800, color: 'var(--cocoa-800)' }}>
            Találd meg{' '}
            <span style={{ color: 'var(--mustard)', textDecoration: 'underline', textDecorationThickness: 3, textUnderlineOffset: 5 }}>álmaid cicáját</span>
            {' '}néhány kattintással
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', color: 'var(--cocoa-700)', lineHeight: 1.7, margin: '0 auto', maxWidth: 600 }}>
            Böngéssz Magyarország legnagyobb örökbefogadható cica-adatbázisában.
          </p>
        </div>
      </section>

      {/* NEWEST CATS CAROUSEL */}
      {newest.length > 0 && (
        <section style={{ padding: '24px 0 0' }}>
          <CatCarousel cats={newest} />
        </section>
      )}

      {/* STATS */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '32px 28px 0', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', gap: 56, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-3xl)', color: 'var(--mustard)', lineHeight: 1 }}>{catCount}+</div>
            <div style={{ fontFamily: 'var(--font-body)', color: 'var(--cocoa-700)', marginTop: 4, fontSize: 'var(--text-sm)' }}>örökbefogadható cica</div>
            <Link href="/cicak" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--mustard)', fontSize: 'var(--text-sm)', display: 'inline-block', marginTop: 2 }}>
              Megnézem →
            </Link>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-3xl)', color: 'var(--mustard)', lineHeight: 1 }}>{shelterCount}+</div>
            <div style={{ fontFamily: 'var(--font-body)', color: 'var(--cocoa-700)', marginTop: 4, fontSize: 'var(--text-sm)' }}>partner menhely</div>
          </div>
        </div>
      </section>

      {/* SPONSOR PLACEHOLDER */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 28px 0' }}>
        <div style={{ border: '2px dashed var(--cream-200)', borderRadius: 'var(--radius-lg)', padding: '28px 24px', textAlign: 'center' }}>
          <p className="ck-eyebrow" style={{ marginBottom: 8 }}>Szponzor partnerek</p>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: 0 }}>Hamarosan — legyél te az első partnere a CicaKeresőnek! <a href="mailto:hello@cicakereso.hu" style={{ color: 'var(--forest-700)' }}>Írj nekünk</a></p>
        </div>
      </section>

      {/* KÖLYKÖK */}
      {kolykoks.length > 0 && (
        <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24 }}>
            <div>
              <p className="ck-eyebrow">0–11 hónapos</p>
              <h2 style={{ margin: '6px 0 0' }}>Legkisebb szőrmókaink</h2>
            </div>
            <Link href="/cicak?kor=Kölyök" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--forest-700)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, fontSize: 'var(--text-sm)' }}>
              Összes kölyök <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <CatRowCarousel cats={kolykoks} />
        </section>
      )}

      {/* IDŐS CICÁK */}
      {idosek.length > 0 && (
        <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '56px 28px 0' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 24 }}>
            <div>
              <p className="ck-eyebrow">8+ éves</p>
              <h2 style={{ margin: '6px 0 0' }}>Érett cicáink</h2>
            </div>
            <Link href="/cicak?kor=Idős" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--forest-700)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4, fontSize: 'var(--text-sm)' }}>
              Összes idős <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <CatRowCarousel cats={idosek} />
        </section>
      )}

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '64px 28px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <p className="ck-eyebrow" style={{ marginBottom: 8 }}>Hogyan működik?</p>
          <h2 style={{ margin: 0 }}>Három lépés az új családtagig</h2>
        </div>
        <div className="ck-steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {steps.map(({ icon, title, body }, i) => (
            <div key={title} style={{ background: 'var(--white)', border: '1px solid var(--cream-200)', borderRadius: 'var(--radius-lg)', padding: '28px 24px', boxShadow: 'var(--shadow-sm)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 16, right: 20, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, color: 'var(--sage-200)', lineHeight: 1 }}>{i + 1}</span>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{icon}</div>
              <h3 style={{ margin: '0 0 8px' }}>{title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', margin: 0, lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.ck-steps-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CLOSING CTA */}
      <section style={{ margin: '64px 0 0' }}>
        <div className="ck-container" style={{ padding: '0 28px 64px' }}>
          <div style={{ background: 'var(--forest-700)', borderRadius: 'var(--radius-xl)', padding: '52px 48px', display: 'flex', alignItems: 'center', gap: 40, color: 'var(--cream-50)', flexWrap: 'wrap' }}>
            <img src="/mascot-cat.png" alt="" style={{ width: 140, flexShrink: 0, filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.2))' }} />
            <div style={{ flex: 1, minWidth: 240 }}>
              <h2 style={{ color: 'var(--cream-50)', margin: '0 0 10px', fontSize: 'var(--text-2xl)' }}>Még rengeteg cicus várja, hogy megismerd!</h2>
              <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(250,241,228,0.82)', margin: '0 0 24px', lineHeight: 1.6 }}>Keress és szűrj az örökbefogadható cicák között:</p>
              <Link href="/cicak" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--camel-500)', color: 'var(--cocoa-800)', fontFamily: 'var(--font-display)', fontWeight: 700, padding: '14px 28px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', fontSize: 'var(--text-md)' }}>
                Összes cica megtekintése
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .ck-container { max-width: var(--container-max); margin: 0 auto; }
        @media(max-width:768px){
          .ck-container { padding-left:16px!important; padding-right:16px!important; }
        }
      `}</style>
    </div>
  )
}
