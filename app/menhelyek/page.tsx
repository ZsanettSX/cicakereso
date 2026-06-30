import { prisma } from '@/lib/db'
import ShelterCard from '@/components/shelters/ShelterCard'

export default async function MenhelyekPage() {
  const shelters = await prisma.shelter.findMany({
    include: { _count: { select: { cats: { where: { status: { not: 'adopted' } } } } } },
    orderBy: { name: 'asc' },
  })

  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 28px 64px' }}>
      <p className="ck-eyebrow" style={{ marginBottom: 8 }}>Partnerek</p>
      <h1 style={{ margin: '0 0 12px' }}>Partner menhelyek</h1>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '0 0 40px', maxWidth: 560 }}>
        Ezekkel a menhelyekkel dolgozunk együtt – mindannyian ellenőrzött, megbízható szervezetek, ahol a cicák szakszerű gondozást kapnak.
      </p>

      {shelters.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--surface-cream)', borderRadius: 'var(--radius-lg)' }}>
          <img src="/mascot-cat.png" alt="" style={{ width: 100, opacity: 0.6, marginBottom: 16 }} />
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>Hamarosan feltöltjük a partner menhelyeket!</p>
        </div>
      ) : (
        <div className="ck-shelter-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {shelters.map((s) => (
            <ShelterCard
              key={s.id}
              id={s.id}
              slug={s.slug}
              name={s.name}
              logo={s.logo}
              description={s.description}
              county={s.county}
              address={s.address}
              catCount={s._count.cats}
            />
          ))}
        </div>
      )}
      <style>{`@media(max-width:768px){.ck-shelter-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  )
}
