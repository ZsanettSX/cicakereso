'use client'

import { useEffect, useState } from 'react'

const KEY = 'ck-favorites'

function readFavorites(): string[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(KEY)
    const val = raw ? JSON.parse(raw) : []
    return Array.isArray(val) ? val : []
  } catch {
    return []
  }
}

function writeFavorites(list: string[]) {
  window.localStorage.setItem(KEY, JSON.stringify(list))
  window.dispatchEvent(new Event('ck-favorites-changed'))
}

interface FavoriteButtonProps {
  slug: string
  size?: 'sm' | 'lg'
}

export default function FavoriteButton({ slug, size = 'sm' }: FavoriteButtonProps) {
  const [fav, setFav] = useState(false)
  const [bump, setBump] = useState(false)

  useEffect(() => {
    setFav(readFavorites().includes(slug))
    const sync = () => setFav(readFavorites().includes(slug))
    window.addEventListener('ck-favorites-changed', sync)
    return () => window.removeEventListener('ck-favorites-changed', sync)
  }, [slug])

  const toggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const list = readFavorites()
    const next = list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug]
    writeFavorites(next)
    setFav(next.includes(slug))
    setBump(true)
    setTimeout(() => setBump(false), 220)
  }

  const dim = size === 'lg' ? 48 : 36
  const icon = size === 'lg' ? 26 : 20

  return (
    <button
      onClick={toggle}
      aria-label={fav ? 'Eltávolítás a kedvencekből' : 'Hozzáadás a kedvencekhez'}
      title={fav ? 'Kedvenc eltávolítása' : 'Kedvencekhez adás'}
      style={{
        width: dim,
        height: dim,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.92)',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-sm)',
        transform: bump ? 'scale(1.25)' : 'scale(1)',
        transition: 'transform var(--dur-base) var(--ease-soft)',
      }}
    >
      <svg width={icon} height={icon} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 20.5l-1.45-1.32C5.4 14.5 2 11.4 2 7.6 2 4.9 4.1 2.8 6.8 2.8c1.54 0 3.04.72 4 1.86C11.76 3.52 13.26 2.8 14.8 2.8 17.5 2.8 19.6 4.9 19.6 7.6c0 3.8-3.4 6.9-8.55 11.58L12 20.5z"
          fill={fav ? 'var(--danger)' : 'none'}
          stroke={fav ? 'var(--danger)' : 'var(--cocoa-300)'}
          strokeWidth={1.8}
        />
      </svg>
    </button>
  )
}
