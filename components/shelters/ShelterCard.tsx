'use client'

import Link from 'next/link'

interface ShelterCardProps {
  id: string
  slug: string
  name: string
  logo?: string | null
  description?: string | null
  county?: string | null
  address?: string | null
  catCount: number
}

export default function ShelterCard({ slug, name, logo, description, county, catCount }: ShelterCardProps) {
  return (
    <Link
      href={`/menhelyek/${slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <article
        style={{
          background: 'var(--white)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--cream-200)',
          padding: 24,
          boxShadow: 'var(--shadow-sm)',
          transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-out)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.transform = 'translateY(-3px)'
          el.style.boxShadow = 'var(--shadow-lg)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.transform = 'none'
          el.style.boxShadow = 'var(--shadow-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          {logo ? (
            <img src={logo} alt={name} style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', objectFit: 'cover', flexShrink: 0 }} />
          ) : (
            <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'var(--sage-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="var(--sage-500)" strokeWidth={1.5} strokeLinecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9,22 9,12 15,12 15,22" />
              </svg>
            </div>
          )}
          <div>
            <h3 style={{ margin: 0, fontSize: 'var(--text-md)', color: 'var(--cocoa-800)' }}>{name}</h3>
            {county && (
              <p style={{ margin: '3px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                {county}
              </p>
            )}
          </div>
        </div>

        {description && (
          <p
            style={{
              margin: 0,
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--text-body)',
              lineHeight: 1.6,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </p>
        )}

        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--forest-700)' }}>
          <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20v-2a6 6 0 0 1 12 0v2" />
          </svg>
          {catCount} {catCount === 1 ? 'cica' : 'cica'} vár gazdira
        </div>
      </article>
    </Link>
  )
}
