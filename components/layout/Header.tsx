'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/cicak', label: 'Cicák' },
  { href: '/menhelyek', label: 'Menhelyek' },
]

const SERVICES = [
  'Örökbefogadási tanácsadás',
  'Cica-gondozási útmutató',
  'Állatorvosi partnerek',
  'Önkéntes program',
]

function HeartIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 20.5l-1.45-1.32C5.4 14.5 2 11.4 2 7.6 2 4.9 4.1 2.8 6.8 2.8c1.54 0 3.04.72 4 1.86C11.76 3.52 13.26 2.8 14.8 2.8 17.5 2.8 19.6 4.9 19.6 7.6c0 3.8-3.4 6.9-8.55 11.58L12 20.5z"
        fill="var(--danger)"
      />
    </svg>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)

  const isActive = (href: string) => pathname.startsWith(href)

  const linkStyle = (href: string, active: boolean) => ({
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-sm)',
    color: active ? 'var(--camel-500)' : 'var(--cocoa-700)',
    textDecoration: 'none',
    padding: '0.3rem 0 2px',
    borderBottom: (active || hovered === href) ? '2px solid var(--camel-500)' : '2px solid transparent',
    transition: 'border-color 0.15s ease, color 0.15s ease',
  })

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(252,246,237,0.96)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--cream-200)',
      }}
    >
      <div
        className="ck-container"
        style={{
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src="/logo-wide.png" alt="CicaKereső" height={34} style={{ objectFit: 'contain', display: 'block' }}
            onError={(e) => {
              const t = e.currentTarget
              t.style.display = 'none'
              const fallback = t.nextElementSibling as HTMLElement | null
              if (fallback) fallback.style.display = 'flex'
            }}
          />
          {/* Fallback while logo-wide.png is not yet uploaded */}
          <span style={{ display: 'none', alignItems: 'center', gap: 8 }}>
            <img src="/mascot-cat.png" alt="" width={36} height={36} style={{ objectFit: 'contain' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-xl)', color: 'var(--cocoa-800)' }}>CicaKereső</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="ck-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-6)' }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={linkStyle(item.href, isActive(item.href))}
              onMouseEnter={() => setHovered(item.href)}
              onMouseLeave={() => setHovered(null)}
            >
              {item.label}
            </Link>
          ))}
          <span
            style={{ ...linkStyle('', false), color: 'var(--text-muted)', cursor: 'not-allowed' }}
            title="Hamarosan"
          >
            Adományozás
          </span>
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => { setServicesOpen(true); setHovered('szolgaltatasok') }}
            onMouseLeave={() => { setServicesOpen(false); setHovered(null) }}
          >
            <span style={{ ...linkStyle('szolgaltatasok', false), cursor: 'default' }}>Szolgáltatások ▾</span>
            {servicesOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: 'var(--space-3)',
                  minWidth: 240,
                  border: '1px solid var(--cream-200)',
                }}
              >
                {SERVICES.map((s) => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      display: 'block',
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--cocoa-700)',
                      textDecoration: 'none',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            )}
          </div>
          <span
            style={{ ...linkStyle('', false), color: 'var(--text-muted)', cursor: 'not-allowed' }}
            title="Hamarosan"
          >
            Blog
          </span>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <Link
            href="/kedvenceim"
            className="ck-fav-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              color: 'var(--cocoa-700)',
              textDecoration: 'none',
            }}
          >
            <HeartIcon />
            <span className="ck-fav-label">Kedvenceim</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="ck-hamburger"
            aria-label="Menü"
            onClick={() => setMobileOpen((o) => !o)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
            }}
          >
            <svg width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="var(--forest-700)" strokeWidth={2}>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="ck-mobile-nav"
          style={{
            display: 'none',
            flexDirection: 'column',
            padding: 'var(--space-4) var(--space-5)',
            borderTop: '1px solid var(--cream-200)',
            background: 'var(--cream-50)',
            gap: 'var(--space-3)',
          }}
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={linkStyle(item.href, isActive(item.href))}
            >
              {item.label}
            </Link>
          ))}
          <span style={{ ...linkStyle('', false), color: 'var(--text-muted)' }}>Adományozás</span>
          <span style={{ ...linkStyle('', false), color: 'var(--text-muted)' }}>Szolgáltatások</span>
          <span style={{ ...linkStyle('', false), color: 'var(--text-muted)' }}>Blog</span>
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .ck-desktop-nav { display: none !important; }
          .ck-hamburger { display: inline-flex !important; }
          .ck-mobile-nav { display: flex !important; }
          .ck-fav-label { display: none; }
        }
      `}</style>
    </header>
  )
}
