'use client'

import { useState } from 'react'
import Link from 'next/link'
import Tag from '../ui/Tag'
import FavoriteButton from './FavoriteButton'
import { parseTraits } from '@/lib/utils'

export interface CatCardData {
  id: string
  slug: string
  name: string
  photos: string
  ageText?: string | null
  sex: string
  breed?: string | null
  coatCss?: string | null
  colorCategory?: string | null
  status: string
  traits: string
  shelter: { name: string; county?: string | null }
}

export default function CatCard({ cat }: { cat: CatCardData }) {
  const [hover, setHover] = useState(false)
  const traits = parseTraits(cat.traits).slice(0, 3)

  let photos: string[] = []
  try { photos = JSON.parse(cat.photos) } catch {}
  const photo = photos[0] ?? null

  const location = [cat.shelter.county, cat.shelter.name].filter(Boolean).join(' · ')

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--cream-200)',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-3px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-out)',
      }}
    >
      <Link href={`/cicak/${cat.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
        {/* Photo */}
        <div style={{ position: 'relative', aspectRatio: '4/3', background: 'var(--cream-100)', overflow: 'hidden' }}>
          {photo ? (
            <img
              src={photo}
              alt={cat.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: hover ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform var(--dur-slow) var(--ease-out)',
              }}
            />
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--cream-100)',
              }}
            >
              <img src="/mascot-cat.png" alt="" style={{ width: '60%', height: '60%', objectFit: 'contain', opacity: 0.5 }} />
            </div>
          )}
          <div style={{ position: 'absolute', top: 8, right: 8 }} onClick={(e) => e.preventDefault()}>
            <FavoriteButton slug={cat.slug} />
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <h3
              style={{
                margin: 0,
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'var(--text-lg)',
                color: 'var(--cocoa-800)',
                lineHeight: 1.1,
              }}
            >
              {cat.name}
            </h3>
            <span style={{ marginLeft: 'auto', flexShrink: 0 }}>
              {cat.sex === 'hím' ? (
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#3a7fd4" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="10" cy="14" r="5" /><line x1="19" y1="5" x2="14.1" y2="9.9" /><polyline points="15 5 19 5 19 9" />
                </svg>
              ) : (
                <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#d44a6a" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="5" /><line x1="12" y1="14" x2="12" y2="21" /><line x1="9" y1="18" x2="15" y2="18" />
                </svg>
              )}
            </span>
          </div>

          {traits.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {traits.map((t) => (
                <Tag key={t} tone="sage" size="sm">{t}</Tag>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 2 }}>
            {cat.ageText && <Tag tone="neutral" size="sm">{cat.ageText}</Tag>}
            {cat.colorCategory && <Tag tone="neutral" size="sm">{cat.colorCategory}</Tag>}
            {cat.breed && <span style={{ maxWidth: 120, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block' }}><Tag tone="neutral" size="sm">{cat.breed}</Tag></span>}
          </div>

          <div
            style={{
              marginTop: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: 5,
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
            }}
          >
            <svg width={13} height={13} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{location}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
