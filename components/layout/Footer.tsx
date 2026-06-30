import Link from 'next/link'

const COL_CATS = [
  { label: 'Cicák', href: '/cicak' },
  { label: 'Menhelyek', href: '/menhelyek' },
  { label: 'Partner jelentkezés', href: 'mailto:hello@cicakereso.hu' },
  { label: 'Rólunk', href: '/rolunk' },
  { label: 'Blog', href: '#' },
]

const COL_SERVICES = [
  'Örökbefogadási tanácsadás',
  'Cica-gondozási útmutató',
  'Állatorvosi partnerek',
  'Önkéntes program',
  'Adományozás',
]

const COL_CONTACT = [
  { label: 'Kapcsolat', href: '/kapcsolat' },
  { label: 'Adatvédelem', href: '/adatvedelem' },
  { label: 'Általános feltételek', href: '/aszf' },
]

const linkStyle = {
  color: 'var(--cream-50)',
  textDecoration: 'none',
  fontFamily: 'var(--font-body)',
  opacity: 0.9,
  display: 'block',
  padding: '0.25rem 0',
}

const headStyle = {
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'var(--text-sm)',
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: 'var(--camel-300)',
  marginBottom: 'var(--space-4)',
}

export default function Footer() {
  return (
    <footer style={{ background: 'var(--forest-700)', color: 'var(--cream-50)', marginTop: 'var(--space-10)' }}>
      <div className="ck-container" style={{ padding: 'var(--space-9) var(--space-5) var(--space-6)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-7)',
          }}
          className="ck-footer-grid"
        >
          <div>
            <h4 style={headStyle}>Cicák</h4>
            {COL_CATS.map((l) => (
              <Link key={l.label} href={l.href} style={linkStyle}>
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <h4 style={headStyle}>Szolgáltatások</h4>
            {COL_SERVICES.map((l) => (
              <a key={l} href="#" style={linkStyle}>
                {l}
              </a>
            ))}
          </div>
          <div>
            <h4 style={headStyle}>Elérhetőségek</h4>
            {COL_CONTACT.map((l) => (
              <Link key={l.label} href={l.href} style={linkStyle}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 'var(--space-7)',
            paddingTop: 'var(--space-5)',
            borderTop: '1px solid rgba(250,241,228,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ opacity: 0.85, fontSize: 'var(--text-sm)' }}>
            © 2024 CicaKereső. Minden jog fenntartva.
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
            <img src="/logo-circle.png" alt="CicaKereső" width={32} height={32} style={{ borderRadius: '50%' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}>CicaKereső</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ck-footer-grid { grid-template-columns: 1fr !important; gap: var(--space-6) !important; }
        }
      `}</style>
    </footer>
  )
}
