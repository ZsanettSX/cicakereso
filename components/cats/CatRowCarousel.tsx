'use client'

import { useRef, useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'
import { parseTraits } from '@/lib/utils'
import type { CatCardData } from './CatCard'

export default function CatRowCarousel({ cats }: { cats: CatCardData[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerW, setContainerW] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setContainerW(el.offsetWidth)
      updateScroll()
    })
    ro.observe(el)
    setContainerW(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  const updateScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setScrollLeft(track.scrollLeft)
    setMaxScroll(track.scrollWidth - track.clientWidth)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => track.removeEventListener('scroll', updateScroll)
  }, [updateScroll])

  const isMobile = containerW > 0 && containerW < 640
  // Mobile: show 1 full card + ~80% of next; Desktop: show 4.5 cards
  const CARD_W = isMobile
    ? Math.round(containerW * 0.78)
    : Math.round((containerW - 5 * 16) / 4.5)
  const GAP = isMobile ? 10 : 16

  const scrollBy = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    // Scroll by 4 cards on desktop, 1 card on mobile
    const step = isMobile ? CARD_W + GAP : (CARD_W + GAP) * 4
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const canPrev = scrollLeft > 4
  const canNext = scrollLeft < maxScroll - 4

  const btnStyle = (enabled: boolean): React.CSSProperties => ({
    width: 40, height: 40, borderRadius: '50%',
    border: '1.5px solid var(--cream-200)',
    background: 'var(--white)', color: 'var(--forest-700)',
    cursor: enabled ? 'pointer' : 'default',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: 'var(--shadow-sm)', flexShrink: 0,
    opacity: enabled ? 1 : 0.3,
    transition: 'opacity 0.2s ease',
  })

  return (
    <div>
      <div
        ref={containerRef}
        style={{ position: 'relative' }}
      >
        <style>{`.ck-row-track::-webkit-scrollbar{display:none}`}</style>
        <div
          ref={trackRef}
          className="ck-row-track"
          style={{
            display: 'flex',
            gap: GAP,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            paddingBottom: 8,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {cats.map((cat) => {
            const photos: string[] = (() => { try { return JSON.parse(cat.photos) } catch { return [] } })()
            const photo = photos[0] ?? null
            const traits = parseTraits(cat.traits).slice(0, 3)

            return (
              <div
                key={cat.id}
                style={{
                  flexShrink: 0,
                  width: CARD_W,
                  scrollSnapAlign: 'start',
                }}
              >
                <Link
                  href={`/cicak/${cat.slug}`}
                  style={{
                    textDecoration: 'none', display: 'block',
                    borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                    background: 'var(--white)', border: '1px solid var(--cream-200)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.boxShadow = 'var(--shadow-md)'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.boxShadow = 'var(--shadow-sm)'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '1 / 1', overflow: 'hidden' }}>
                    {photo
                      ? <img src={photo} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <div style={{ width: '100%', height: '100%', background: 'var(--cream-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src="/mascot-cat.png" alt="" style={{ width: '50%', opacity: 0.4 }} />
                        </div>
                    }
                    {traits.length > 0 && (
                      <div style={{ position: 'absolute', bottom: 8, left: 8, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {traits.map((t) => (
                          <span key={t} style={{
                            background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(4px)',
                            fontFamily: 'var(--font-display)', fontWeight: 600,
                            fontSize: 'var(--text-xs)', padding: '2px 8px',
                            borderRadius: 'var(--radius-pill)', color: 'var(--cocoa-700)',
                          }}>{t}</span>
                        ))}
                      </div>
                    )}
                    <div style={{ position: 'absolute', top: 8, right: 8 }} onClick={(e) => e.preventDefault()}>
                      <FavoriteButton slug={cat.slug} />
                    </div>
                  </div>

                  <div style={{ padding: '10px 12px 12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-md)', color: 'var(--cocoa-800)', lineHeight: 1.1 }}>
                        {cat.name}
                      </h3>
                      <span style={{ flexShrink: 0 }}>
                        {cat.sex === 'hím'
                          ? <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#3a7fd4" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="14" r="5" /><line x1="19" y1="5" x2="14.1" y2="9.9" /><polyline points="15 5 19 5 19 9" /></svg>
                          : <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="#d44a6a" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5" /><line x1="12" y1="14" x2="12" y2="21" /><line x1="9" y1="18" x2="15" y2="18" /></svg>
                        }
                      </span>
                    </div>
                    {(cat.breed || cat.ageText) && (
                      <p style={{ margin: '3px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                        {[cat.breed, cat.ageText].filter(Boolean).join(' · ')}
                      </p>
                    )}
                    {cat.shelter?.county && (
                      <p style={{ margin: '1px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--cocoa-300)' }}>
                        {cat.shelter.county}
                      </p>
                    )}
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 16 }}>
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          style={btnStyle(canPrev)}
          aria-label="Előző"
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          style={btnStyle(canNext)}
          aria-label="Következő"
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  )
}
