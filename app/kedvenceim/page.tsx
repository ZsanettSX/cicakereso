'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import CatGrid from '@/components/cats/CatGrid'
import type { CatCardData } from '@/components/cats/CatCard'

export default function KedvenceimPage() {
  const [cats, setCats] = useState<CatCardData[] | null>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const slugs: string[] = JSON.parse(localStorage.getItem('ck-favorites') ?? '[]')
    setCount(slugs.length)
    if (slugs.length === 0) { setCats([]); return }
    fetch(`/api/kedvenceim?slugs=${slugs.join(',')}`)
      .then((r) => r.json())
      .then(setCats)
  }, [])

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 28px 64px' }}>
      <p className="ck-eyebrow" style={{ marginBottom: 8 }}>Elmentett cicák</p>
      <h1 style={{ margin: '0 0 8px' }}>Kedvenceim</h1>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: 36 }}>
        Ezeket a cicákat mentetted el a böngészőben. {count > 0 && <strong style={{ color: 'var(--forest-700)' }}>{count} kedvenc</strong>}
      </p>

      {cats === null ? (
        <div style={{ textAlign: 'center', padding: 40, color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}>Betöltés...</div>
      ) : cats.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 2rem', background: 'var(--surface-cream)', borderRadius: 'var(--radius-xl)' }}>
          <img src="/mascot-cat.png" alt="" style={{ width: 140, opacity: 0.7, marginBottom: 20 }} />
          <h2 style={{ margin: '0 0 12px' }}>Még nem mentettél el egyetlen cicát sem</h2>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '0 0 28px', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            A szívecske ikonra kattintva bármely cicát elmentheted – ez az adatod csak a te böngésződben él.
          </p>
          <Link href="/cicak" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--forest-700)', color: 'var(--cream-50)', fontFamily: 'var(--font-display)', fontWeight: 600, padding: '12px 24px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
            Böngéssz a cicák között →
          </Link>
        </div>
      ) : (
        <CatGrid cats={cats} cols={4} />
      )}
    </div>
  )
}
