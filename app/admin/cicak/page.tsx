export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { db } from '@/lib/turso'
import { deleteCat } from '@/lib/actions'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function AdminCicakPage() {
  const cats = await db.cat.findMany({ orderBy: 'c.uploadedAt DESC' })

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <h1 style={{ margin: 0 }}>Cicák kezelése</h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '4px 0 0' }}>{cats.length} cica az adatbázisban</p>
        </div>
        <Link href="/admin/cicak/uj" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--forest-700)', color: 'var(--cream-50)', fontFamily: 'var(--font-display)', fontWeight: 600, padding: '10px 20px', borderRadius: 'var(--radius-pill)', textDecoration: 'none', fontSize: 'var(--text-sm)' }}>
          + Új cica
        </Link>
      </div>

      <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cream-200)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
          <thead>
            <tr style={{ background: 'var(--cream-50)' }}>
              {['Név', 'Nem', 'Kor', 'Menhely', 'Státusz', 'Feltöltve', 'Műveletek'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '10px 14px', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-muted)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cats.map((cat) => (
              <tr key={cat.id} style={{ borderTop: '1px solid var(--cream-200)' }}>
                <td style={{ padding: '11px 14px', fontWeight: 600, color: 'var(--cocoa-800)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {(() => { try { const p = JSON.parse(cat.photos)[0]; return p ? <img src={p} alt="" style={{ width: 36, height: 36, objectFit: 'cover', borderRadius: 'var(--radius-sm)', flexShrink: 0 }} /> : <div style={{ width: 36, height: 36, background: 'var(--cream-100)', borderRadius: 'var(--radius-sm)', flexShrink: 0 }} /> } catch { return <div style={{ width: 36, height: 36, background: 'var(--cream-100)', borderRadius: 'var(--radius-sm)', flexShrink: 0 }} /> } })()}
                    {cat.name}
                  </div>
                </td>
                <td style={{ padding: '11px 14px', color: 'var(--text-muted)' }}>{cat.sex}</td>
                <td style={{ padding: '11px 14px', color: 'var(--text-muted)' }}>{cat.ageText ?? '—'}</td>
                <td style={{ padding: '11px 14px', color: 'var(--text-muted)' }}>{cat.shelter.name}</td>
                <td style={{ padding: '11px 14px' }}>
                  <span style={{ padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)', fontWeight: 600, background: cat.status === 'available' ? 'var(--success-bg)' : cat.status === 'urgent' ? 'var(--warning-bg)' : cat.status === 'adopted' ? 'var(--info-bg)' : 'var(--cream-100)', color: cat.status === 'available' ? 'var(--success)' : cat.status === 'urgent' ? 'var(--warning)' : cat.status === 'adopted' ? 'var(--info)' : 'var(--text-muted)' }}>
                    {cat.status}
                  </span>
                </td>
                <td style={{ padding: '11px 14px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{new Date(cat.uploadedAt).toLocaleDateString('hu-HU')}</td>
                <td style={{ padding: '11px 14px' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <Link href={`/admin/cicak/${cat.id}`} style={{ color: 'var(--forest-700)', fontFamily: 'var(--font-display)', fontWeight: 600, textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Szerkesztés</Link>
                    <Link href={`/cicak/${cat.slug}`} target="_blank" style={{ color: 'var(--text-muted)', fontSize: 'var(--text-xs)' }}>↗</Link>
                    <DeleteButton action={deleteCat} id={cat.id} confirmMessage={`Törlöd ${cat.name}-t?`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {cats.length === 0 && (
          <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>
            Még nincsenek cicák az adatbázisban.{' '}
            <Link href="/admin/cicak/uj" style={{ color: 'var(--forest-700)' }}>Adj hozzá egyet!</Link>
          </div>
        )}
      </div>
    </div>
  )
}
