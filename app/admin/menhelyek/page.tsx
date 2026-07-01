export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { db } from '@/lib/turso'
import { deleteShelter } from '@/lib/actions'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function AdminMenhelyekPage() {
  const shelters = await db.shelter.findMany({ allCats: true })

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ margin: 0 }}>Menhelyek kezelése</h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '4px 0 0' }}>{shelters.length} menhely az adatbázisban</p>
        </div>
        <Link href="/admin/menhelyek/uj" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--forest-700)', color: 'var(--cream-50)', fontFamily: 'var(--font-display)', fontWeight: 600, padding: '10px 20px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
          + Új menhely
        </Link>
      </div>

      <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cream-200)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
          <thead>
            <tr style={{ background: 'var(--cream-50)' }}>
              {['Menhely', 'Megye', 'Cicák', 'Kapcsolat', 'Műveletek'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '10px 14px', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-muted)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shelters.map((shelter) => (
              <tr key={shelter.id} style={{ borderTop: '1px solid var(--cream-200)' }}>
                <td style={{ padding: '12px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {shelter.logo
                      ? <img src={shelter.logo} alt="" style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', objectFit: 'cover', flexShrink: 0 }} />
                      : <div style={{ width: 36, height: 36, borderRadius: 'var(--radius-md)', background: 'var(--sage-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>🏠</div>
                    }
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--cocoa-800)' }}>{shelter.name}</div>
                      {shelter.address && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{shelter.address}</div>}
                    </div>
                  </div>
                </td>
                <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>{shelter.county ?? '—'}</td>
                <td style={{ padding: '12px 14px' }}>
                  <span style={{ padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)', fontWeight: 600, background: 'var(--sage-100)', color: 'var(--forest-700)' }}>
                    {shelter.catCount} cica
                  </span>
                </td>
                <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {shelter.email && <span style={{ fontSize: 'var(--text-xs)' }}>{shelter.email}</span>}
                    {shelter.phone && <span style={{ fontSize: 'var(--text-xs)' }}>{shelter.phone}</span>}
                    {!shelter.email && !shelter.phone && '—'}
                  </div>
                </td>
                <td style={{ padding: '12px 14px' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <Link href={`/admin/menhelyek/${shelter.id}`} style={{ color: 'var(--forest-700)', fontFamily: 'var(--font-display)', fontWeight: 600, textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Szerkesztés</Link>
                    <Link href={`/menhelyek/${shelter.slug}`} target="_blank" style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>↗</Link>
                    <DeleteButton action={deleteShelter} id={shelter.id} confirmMessage={`Törlöd a(z) ${shelter.name} menhelyet?`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {shelters.length === 0 && (
          <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
            Még nincsenek menhelyek.{' '}
            <Link href="/admin/menhelyek/uj" style={{ color: 'var(--forest-700)' }}>Adj hozzá egyet!</Link>
          </div>
        )}
      </div>
    </div>
  )
}
