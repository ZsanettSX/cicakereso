import Link from 'next/link'

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/cicak', label: 'Cicák', icon: '🐱' },
  { href: '/admin/menhelyek', label: 'Menhelyek', icon: '🏠' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', background: 'var(--cream-50)' }}>
      {/* Sidebar */}
      <aside style={{ width: 220, background: 'var(--forest-700)', color: 'var(--cream-50)', display: 'flex', flexDirection: 'column', padding: '24px 0', flexShrink: 0, position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
        <div style={{ padding: '0 20px 24px', borderBottom: '1px solid rgba(250,241,228,0.15)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/logo-circle.png" alt="logo" style={{ width: 36, height: 36, borderRadius: '50%' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--cream-50)', fontSize: 'var(--text-md)' }}>CicaKereső</span>
          </Link>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'rgba(250,241,228,0.6)', margin: '8px 0 0' }}>Admin felület</p>
        </div>

        <nav style={{ flex: 1, padding: '16px 12px' }}>
          {NAV.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-md)', textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'rgba(250,241,228,0.85)', fontSize: 'var(--text-sm)', marginBottom: 4, transition: 'background var(--dur-fast)' }}
              className="ck-admin-nav-link"
            >
              <span>{icon}</span> {label}
            </Link>
          ))}
        </nav>

        <div style={{ padding: '0 12px' }}>
          <form action="/api/admin/logout" method="POST">
            <button type="submit" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 'var(--radius-md)', background: 'rgba(250,241,228,0.1)', border: 'none', color: 'rgba(250,241,228,0.7)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', cursor: 'pointer' }}>
              🚪 Kilépés
            </button>
          </form>
          <Link href="/" style={{ display: 'block', textAlign: 'center', padding: '8px', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'rgba(250,241,228,0.5)', textDecoration: 'none', marginTop: 8 }}>← Vissza a weboldalra</Link>
        </div>
      </aside>

      <main style={{ flex: 1, padding: '32px', overflow: 'auto' }}>
        {children}
      </main>

      <style>{`
        .ck-admin-nav-link:hover { background: rgba(250,241,228,0.12) !important; color: var(--cream-50) !important; }
        @media(max-width:640px){ aside { width: 60px !important; } .ck-admin-nav-link span + * { display: none; } }
      `}</style>
    </div>
  )
}
