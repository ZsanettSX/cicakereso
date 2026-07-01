export const dynamic = 'force-dynamic'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { prisma } from '@/lib/db'
import CatGrid from '@/components/cats/CatGrid'
import type { CatCardData } from '@/components/cats/CatCard'
import { Prisma } from '@prisma/client'

function toCatCard(cat: Prisma.CatGetPayload<{ include: { shelter: true } }>): CatCardData {
  return {
    id: cat.id, slug: cat.slug, name: cat.name, photos: cat.photos,
    ageText: cat.ageText, sex: cat.sex, breed: cat.breed,
    coatCss: cat.coatCss, colorCategory: cat.colorCategory,
    status: cat.status, traits: cat.traits,
    shelter: { name: cat.shelter.name, county: cat.shelter.county },
  }
}

function ContactItem({ icon, label, href, children }: { icon: React.ReactNode; label: string; href?: string; children: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--cream-200)' }}>
      <span style={{ color: 'var(--forest-700)', flexShrink: 0 }}>{icon}</span>
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-xs)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
        {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-link)' }}>{children}</a>
          : <span style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)' }}>{children}</span>}
      </div>
    </div>
  )
}

export default async function MenhelyProfilePage({ params }: { params: { id: string } }) {
  const shelter = await prisma.shelter.findUnique({
    where: { slug: params.id },
    include: {
      cats: {
        where: { status: { not: 'adopted' } },
        include: { shelter: true },
        orderBy: { uploadedAt: 'desc' },
      },
    },
  })

  if (!shelter) notFound()

  const cats = shelter.cats.map(toCatCard)

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '32px 28px 64px' }}>
      <Link href="/menhelyek" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--forest-700)', textDecoration: 'none', marginBottom: 28 }}>
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
        Vissza a menhelyekhez
      </Link>

      <div className="ck-shelter-hero" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 48, marginBottom: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 20 }}>
            {shelter.logo ? (
              <img src={shelter.logo} alt={shelter.name} style={{ width: 80, height: 80, borderRadius: 'var(--radius-md)', objectFit: 'cover' }} />
            ) : (
              <div style={{ width: 80, height: 80, borderRadius: 'var(--radius-md)', background: 'var(--sage-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="var(--sage-500)" strokeWidth={1.5} strokeLinecap="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></svg>
              </div>
            )}
            <div>
              <h1 style={{ margin: 0, fontSize: 'var(--text-2xl)' }}>{shelter.name}</h1>
              {shelter.county && <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>{shelter.county}</p>}
            </div>
          </div>

          {shelter.description && (
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', lineHeight: 1.7, margin: '0 0 20px', maxWidth: 600 }}>
              {shelter.description}
            </p>
          )}

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ background: 'var(--sage-100)', borderRadius: 'var(--radius-md)', padding: '14px 20px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-xl)', color: 'var(--forest-700)' }}>{cats.length}</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>gazdira váró cica</div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cream-200)', padding: 24, boxShadow: 'var(--shadow-sm)', height: 'fit-content' }}>
          <h4 style={{ margin: '0 0 4px' }}>Kapcsolat</h4>
          {shelter.address && (
            <ContactItem icon={<svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>} label="Cím">
              {shelter.address}
            </ContactItem>
          )}
          {shelter.phone && (
            <ContactItem icon={<svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.09h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>} label="Telefon" href={`tel:${shelter.phone}`}>
              {shelter.phone}
            </ContactItem>
          )}
          {shelter.email && (
            <ContactItem icon={<svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>} label="E-mail" href={`mailto:${shelter.email}`}>
              {shelter.email}
            </ContactItem>
          )}
          {shelter.facebook && (
            <ContactItem icon={<svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>} label="Facebook" href={shelter.facebook}>
              Facebook oldal
            </ContactItem>
          )}
          {shelter.website && (
            <ContactItem icon={<svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>} label="Weboldal" href={shelter.website}>
              {shelter.website.replace(/^https?:\/\//, '')}
            </ContactItem>
          )}

          {shelter.email && (
            <a href={`mailto:${shelter.email}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--forest-700)', color: 'var(--cream-50)', fontFamily: 'var(--font-display)', fontWeight: 600, padding: '12px 20px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', marginTop: 16, width: '100%', boxSizing: 'border-box' }}>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Kapcsolatfelvétel
            </a>
          )}
        </div>
      </div>

      {/* Cats */}
      <h2 style={{ marginBottom: 24 }}>Cicáink</h2>
      <CatGrid cats={cats} cols={4} emptyMessage="Ennek a menhelynek jelenleg nincs elérhető cicája az adatbázisban." />

      <style>{`@media(max-width:768px){.ck-shelter-hero{grid-template-columns:1fr!important;}}`}</style>
    </div>
  )
}
