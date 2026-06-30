'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'
import { parseTraits } from '@/lib/utils'
import type { CatCardData } from './CatCard'

export default function CatCarousel({ cats }: { cats: CatCardData[] }) {
  const n = cats.length
  // Triple the array so we can loop infinitely: [copy A | real | copy B]
  const items = [...cats, ...cats, ...cats]

  const [active, setActive] = useState(n) // start at first card of the "real" middle copy
  const [animated, setAnimated] = useState(true)
  const isJumping = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerW, setContainerW] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setContainerW(el.offsetWidth))
    ro.observe(el)
    setContainerW(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  const isMobile = containerW > 0 && containerW < 640
  const CARD_W = isMobile ? Math.round(containerW * 0.72) : 300
  const GAP = isMobile ? 10 : 12
  const translateX = containerW > 0
    ? containerW / 2 - CARD_W / 2 - active * (CARD_W + GAP)
    : 0

  const prev = useCallback(() => { if (!isJumping.current) setActive(i => i - 1) }, [])
  const next = useCallback(() => { if (!isJumping.current) setActive(i => i + 1) }, [])

  // After each animated step, silently reset to the middle copy if we drifted to A or B
  useEffect(() => {
    if (isJumping.current) return
    const timer = setTimeout(() => {
      if (active < n || active >= 2 * n) {
        isJumping.current = true
        setAnimated(false)
        setActive(a => ((a % n) + n) % n + n) // equivalent index in middle copy
      }
    }, 460)
    return () => clearTimeout(timer)
  }, [active, n])

  // Re-enable animation after silent jump
  useEffect(() => {
    if (!animated) {
      const f1 = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimated(true)
          isJumping.current = false
        })
      })
      return () => cancelAnimationFrame(f1)
    }
  }, [animated])

  // Touch swipe
  const touchStartX = useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    touchStartX.current = null
  }

  const btnStyle: React.CSSProperties = {
    width: 42, height: 42, borderRadius: '50%',
    border: '1.5px solid var(--cream-200)',
    background: 'var(--white)', color: 'var(--forest-700)',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: 'var(--shadow-sm)', flexShrink: 0,
    transition: 'all var(--dur-base) var(--ease-out)',
  }

  const dotIndex = ((active % n) + n) % n

  return (
    <div>
      <div
        ref={containerRef}
        style={{ overflow: 'hidden', padding: '16px 0 20px' }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          style={{
            display: 'flex',
            gap: GAP,
            transform: `translateX(${translateX}px)`,
            transition: animated ? 'transform 0.45s cubic-bezier(0.22,0.61,0.36,1)' : 'none',
            willChange: 'transform',
          }}
        >
          {items.map((cat, i) => {
            const diff = Math.abs(i - active)
            const isActive = i === active
            const photos: string[] = (() => { try { return JSON.parse(cat.photos) } catch { return [] } })()
            const photo = photos[0] ?? null
            const traits = parseTraits(cat.traits).slice(0, 3)
            const scale = isActive ? 1 : diff === 1 ? 0.88 : 0.8
            const opacity = isActive ? 1 : diff === 1 ? 0.82 : diff === 2 ? 0.55 : 0

            return (
              <div
                key={`${cat.id}-${i}`}
                onClick={() => { if (!isActive && !isJumping.current) setActive(i) }}
                style={{
                  flexShrink: 0, width: CARD_W,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center',
                  opacity,
                  transition: animated ? 'transform 0.45s cubic-bezier(0.22,0.61,0.36,1), opacity 0.45s ease' : 'none',
                  cursor: isActive ? 'default' : 'pointer',
                  pointerEvents: diff > 2 ? 'none' : 'auto',
                }}
              >
                <Link
                  href={`/cicak/${cat.slug}`}
                  onClick={(e) => { if (!isActive) e.preventDefault() }}
                  style={{
                    textDecoration: 'none', display: 'block',
                    borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                    background: 'var(--white)', border: '1px solid var(--cream-200)',
                    boxShadow: isActive ? '0 20px 48px rgba(104,66,48,0.18)' : 'var(--shadow-sm)',
                    transition: animated ? 'box-shadow 0.45s ease' : 'none',
                  }}
                >
                  {/* 1:1 image */}
                  <div style={{ position: 'relative', aspectRatio: '1 / 1', overflow: 'hidden' }}>
                    {photo
                      ? <img src={photo} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <div style={{ width: '100%', height: '100%', background: 'var(--cream-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src="/mascot-cat.png" alt="" style={{ width: '50%', opacity: 0.4 }} />
                        </div>
                    }
                    {traits.length > 0 && (
                      <div style={{ position: 'absolute', bottom: 10, left: 10, display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                        {traits.map((t) => (
                          <span key={t} style={{
                            background: 'rgba(255,255,255,0.90)', backdropFilter: 'blur(4px)',
                            fontFamily: 'var(--font-display)', fontWeight: 600,
                            fontSize: 'var(--text-xs)', padding: '3px 9px',
                            borderRadius: 'var(--radius-pill)', color: 'var(--cocoa-700)',
                          }}>{t}</span>
                        ))}
                      </div>
                    )}
                    <div style={{ position: 'absolute', top: 10, right: 10 }} onClick={(e) => e.preventDefault()}>
                      <FavoriteButton slug={cat.slug} />
                    </div>
                  </div>

                  {/* Info */}
                  <div style={{ padding: '12px 14px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                      <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', color: 'var(--cocoa-800)', lineHeight: 1.1 }}>
                        {cat.name}
                      </h3>
                      <span style={{ flexShrink: 0 }}>
                        {cat.sex === 'hím'
                          ? <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#3a7fd4" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="14" r="5" /><line x1="19" y1="5" x2="14.1" y2="9.9" /><polyline points="15 5 19 5 19 9" /></svg>
                          : <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#d44a6a" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5" /><line x1="12" y1="14" x2="12" y2="21" /><line x1="9" y1="18" x2="15" y2="18" /></svg>
                        }
                      </span>
                    </div>
                    {(cat.breed || cat.ageText) && (
                      <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
                        {[cat.breed, cat.ageText].filter(Boolean).join(' · ')}
                      </p>
                    )}
                    {cat.shelter?.county && (
                      <p style={{ margin: '2px 0 0', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--cocoa-300)' }}>
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16 }}>
        <button onClick={prev} style={btnStyle} aria-label="Előző">
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {cats.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(Math.floor(active / n) * n + i)}
              aria-label={`${i + 1}. cica`}
              style={{
                width: i === dotIndex ? 22 : 8, height: 8,
                borderRadius: 'var(--radius-pill)', border: 'none', padding: 0,
                background: i === dotIndex ? 'var(--forest-700)' : 'var(--sage-300)',
                cursor: 'pointer', transition: 'all 0.3s var(--ease-out)',
              }}
            />
          ))}
        </div>

        <button onClick={next} style={btnStyle} aria-label="Következő">
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
        </button>
      </div>
    </div>
  )
}
