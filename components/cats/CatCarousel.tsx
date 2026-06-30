'use client'

import { useState, useRef } from 'react'
import CatCard, { CatCardData } from './CatCard'

export default function CatCarousel({ cats }: { cats: CatCardData[] }) {
  const [index, setIndex] = useState(0)
  const perPage = 4
  const max = Math.max(0, cats.length - perPage)

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(max, i + 1))

  const btnStyle = (disabled: boolean) => ({
    width: 40,
    height: 40,
    borderRadius: '50%',
    border: '1.5px solid var(--cream-200)',
    background: disabled ? 'var(--cream-100)' : 'var(--white)',
    color: disabled ? 'var(--text-muted)' : 'var(--forest-700)',
    cursor: disabled ? 'default' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: disabled ? 'none' : 'var(--shadow-sm)',
    transition: 'all var(--dur-base) var(--ease-out)',
    flexShrink: 0,
  })

  return (
    <div>
      <div style={{ overflow: 'hidden' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cats.length}, calc(25% - 15px))`,
            gap: 20,
            transform: `translateX(calc(-${index} * (25% + 5px)))`,
            transition: 'transform var(--dur-slow) var(--ease-out)',
          }}
          className="ck-carousel-track"
        >
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      </div>
      {cats.length > perPage && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 24 }}>
          <button onClick={prev} disabled={index === 0} style={btnStyle(index === 0)} aria-label="Előző">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                style={{
                  width: i === index ? 20 : 8,
                  height: 8,
                  borderRadius: 'var(--radius-pill)',
                  border: 'none',
                  background: i === index ? 'var(--forest-700)' : 'var(--sage-300)',
                  cursor: 'pointer',
                  transition: 'all var(--dur-base) var(--ease-out)',
                  padding: 0,
                }}
              />
            ))}
          </div>
          <button onClick={next} disabled={index === max} style={btnStyle(index === max)} aria-label="Következő">
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      )}
      <style>{`
        @media (max-width: 1024px) {
          .ck-carousel-track { grid-template-columns: repeat(${cats.length}, calc(33.33% - 14px)) !important; }
        }
        @media (max-width: 640px) {
          .ck-carousel-track { grid-template-columns: repeat(${cats.length}, calc(80% - 10px)) !important; }
        }
      `}</style>
    </div>
  )
}
