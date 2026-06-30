'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Badge from '@/components/ui/Badge'
import Tag from '@/components/ui/Tag'
import FavoriteButton from '@/components/cats/FavoriteButton'
import CatGrid from '@/components/cats/CatGrid'
import type { CatCardData } from '@/components/cats/CatCard'

interface Cat {
  id: string; slug: string; name: string; photos: string[]; ageText?: string;
  sex: string; breed?: string; breedType: string; color?: string; colorCategory?: string;
  coatCss?: string; isNeutered: boolean; isVaccinated: boolean; isChipped: boolean;
  traits: string[]; description?: string; status: string; ageGroup?: string;
  shelter: { id: string; slug: string; name: string; county?: string; address?: string; phone?: string; email?: string; facebook?: string; website?: string; }
}

function HealthCheck({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: '1px solid var(--cream-200)' }}>
      <span style={{
        width: 28, height: 28, borderRadius: '50%',
        background: ok ? 'var(--success-bg)' : 'var(--cream-100)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {ok ? (
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth={2.5} strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
        ) : (
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth={2.5} strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        )}
      </span>
      <span style={{ fontFamily: 'var(--font-body)', color: ok ? 'var(--text-body)' : 'var(--text-muted)' }}>{label}</span>
    </div>
  )
}

function PhotoGallery({ photos, name }: { photos: string[]; name: string }) {
  const [active, setActive] = useState(0)
  if (photos.length === 0) {
    return (
      <div style={{ aspectRatio: '4/3', background: 'var(--cream-100)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="/mascot-cat.png" alt={name} style={{ width: '60%', objectFit: 'contain', opacity: 0.5 }} />
      </div>
    )
  }
  return (
    <div>
      <div style={{ aspectRatio: '4/3', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: 12 }}>
        <img src={photos[active]} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      {photos.length > 1 && (
        <div style={{ display: 'flex', gap: 10 }}>
          {photos.map((p, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: 72, height: 72, borderRadius: 'var(--radius-md)', overflow: 'hidden', border: `2px solid ${i === active ? 'var(--forest-700)' : 'transparent'}`, cursor: 'pointer', padding: 0 }}>
              <img src={p} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function CatProfilePage({ params }: { params: { slug: string } }) {
  const [cat, setCat] = useState<Cat | null | undefined>(undefined)
  const [related, setRelated] = useState<CatCardData[]>([])

  useEffect(() => {
    fetch(`/api/cats/${params.slug}`)
      .then((r) => r.ok ? r.json() : null)
      .then((data) => {
        if (!data) { setCat(null); return }
        setCat(data.cat)
        setRelated(data.related)
      })
  }, [params.slug])

  if (cat === undefined) {
    return <div style={{ maxWidth: 'var(--container-max)', margin: '80px auto', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>Betöltés...</div>
  }
  if (cat === null) {
    return <div style={{ maxWidth: 'var(--container-max)', margin: '80px auto', textAlign: 'center' }}><h2>Ez a cica nem található</h2><Link href="/cicak">← Vissza a cicákhoz</Link></div>
  }

  const ctaHref = cat.shelter.email ? `mailto:${cat.shelter.email}?subject=Érdeklődöm ${cat.name} cicáról`
    : cat.shelter.facebook ? cat.shelter.facebook
    : '/kapcsolat'

  const infoRows = [
    { label: 'Kor', value: cat.ageText },
    { label: 'Nem', value: cat.sex === 'hím' ? '♂ Hím' : '♀ Nőstény' },
    { label: 'Fajta', value: cat.breed },
    { label: 'Szín', value: cat.color },
    { label: 'Fajtatisztaság', value: cat.breedType === 'fajtiszta' ? 'Fajtiszta' : 'Keverék' },
  ].filter((r) => r.value)

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '32px 28px 64px' }}>
      <Link href="/cicak" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--forest-700)', textDecoration: 'none', marginBottom: 28 }}>
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
        Vissza a cicákhoz
      </Link>

      <div className="ck-profile-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
        {/* Gallery */}
        <div>
          <PhotoGallery photos={cat.photos} name={cat.name} />
        </div>

        {/* Info */}
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
            <div>
              <Badge status={cat.status} />
              <h1 style={{ margin: '10px 0 0', fontSize: 'var(--text-3xl)' }}>{cat.name}</h1>
            </div>
            <FavoriteButton slug={cat.slug} size="lg" />
          </div>

          {cat.traits.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
              {cat.traits.map((t) => <Tag key={t} tone="sage">{t}</Tag>)}
            </div>
          )}

          {/* Info table */}
          <div style={{ background: 'var(--cream-50)', borderRadius: 'var(--radius-md)', padding: '16px 20px', marginBottom: 20 }}>
            {infoRows.map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', gap: 16, padding: '8px 0', borderBottom: '1px solid var(--cream-200)', fontFamily: 'var(--font-body)' }}>
                <span style={{ fontWeight: 700, color: 'var(--cocoa-800)', minWidth: 110, flexShrink: 0 }}>{label}</span>
                <span style={{ color: 'var(--text-body)' }}>{value}</span>
              </div>
            ))}
          </div>

          {/* Health */}
          <div style={{ marginBottom: 20 }}>
            <h4 style={{ margin: '0 0 4px', color: 'var(--cocoa-800)' }}>Egészségügyi adatok</h4>
            <HealthCheck ok={cat.isNeutered} label="Ivartalanítva" />
            <HealthCheck ok={cat.isVaccinated} label="Oltva" />
            <HealthCheck ok={cat.isChipped} label="Chippelve" />
          </div>

          {/* Description */}
          {cat.description && (
            <div style={{ marginBottom: 24 }}>
              <h4 style={{ margin: '0 0 8px' }}>Rólam</h4>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', lineHeight: 1.7, margin: 0 }}>{cat.description}</p>
            </div>
          )}

          {/* Shelter */}
          <div style={{ background: 'var(--sage-100)', borderRadius: 'var(--radius-md)', padding: '16px 20px', marginBottom: 20 }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--forest-700)', margin: '0 0 4px' }}>Menhely</p>
            <Link href={`/menhelyek/${cat.shelter.slug}`} style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-md)', color: 'var(--cocoa-800)', textDecoration: 'none' }}>
              {cat.shelter.name}
            </Link>
            {cat.shelter.county && <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', margin: '2px 0 0' }}>{cat.shelter.county}</p>}
          </div>

          {/* CTA */}
          <a
            href={ctaHref}
            target={cat.shelter.facebook && !cat.shelter.email ? '_blank' : undefined}
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
              background: 'var(--forest-700)', color: 'var(--cream-50)',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-md)',
              padding: '16px 28px', borderRadius: 'var(--radius-pill)', textDecoration: 'none',
              width: '100%', boxSizing: 'border-box',
            }}
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            Kapcsolatfelvétel a menhellyel
          </a>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div style={{ marginTop: 56 }}>
          <h2 style={{ marginBottom: 24 }}>Más cicák ettől a menhelytől</h2>
          <CatGrid cats={related} cols={4} />
        </div>
      )}

      <style>{`@media(max-width:768px){.ck-profile-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  )
}
