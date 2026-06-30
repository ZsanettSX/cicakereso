import Link from 'next/link'
import CatCard, { CatCardData } from './CatCard'

interface CatGridProps {
  cats: CatCardData[]
  cols?: 2 | 3 | 4
  emptyMessage?: string
  emptyActionHref?: string
  emptyActionLabel?: string
}

export default function CatGrid({
  cats,
  cols = 4,
  emptyMessage = 'Hmm, ezzel a szűréssel nem találtunk gazdiváró cicust – próbálj kevesebb szűrőt!',
  emptyActionHref = '/cicak',
  emptyActionLabel = 'Szűrők törlése',
}: CatGridProps) {
  if (cats.length === 0) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '4rem 2rem',
          background: 'var(--surface-cream)',
          borderRadius: 'var(--radius-lg)',
          border: '1px dashed var(--border-sage)',
        }}
      >
        <img src="/mascot-cat.png" alt="" style={{ width: 120, opacity: 0.7, marginBottom: 16 }} />
        <h3 style={{ margin: '0 0 8px' }}>Nincs találat</h3>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '0 0 20px', maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}>
          {emptyMessage}
        </p>
        <Link
          href={emptyActionHref}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: 'var(--text-sm)',
            color: 'var(--forest-700)',
            border: '1.5px solid var(--border-sage)',
            borderRadius: 'var(--radius-pill)',
            padding: '0.5rem 1.25rem',
            textDecoration: 'none',
          }}
        >
          {emptyActionLabel}
        </Link>
      </div>
    )
  }

  const gridCols = {
    2: 'repeat(2, 1fr)',
    3: 'repeat(3, 1fr)',
    4: 'repeat(4, 1fr)',
  }[cols]

  return (
    <>
      <div
        className="ck-cat-grid"
        style={{ display: 'grid', gridTemplateColumns: gridCols, gap: 20 }}
      >
        {cats.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .ck-cat-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .ck-cat-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; }
        }
        @media (max-width: 480px) {
          .ck-cat-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px !important; }
        }
      `}</style>
    </>
  )
}
