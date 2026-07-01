export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { db } from '@/lib/turso'
import { ageTextFromMonths } from '@/lib/utils'

export default async function AdminDashboard() {
  const [catCount, shelterCount, available, reserved, urgent, recentCats] = await Promise.all([
    db.cat.count(),
    db.shelter.count(),
    db.cat.count({ status: 'available' }),
    db.cat.count({ status: 'reserved' }),
    db.cat.count({ status: 'urgent' }),
    db.cat.findMany({ orderBy: 'c.uploadedAt DESC', take: 5 }),
  ])

  const statCard = (label: string, value: number | string, color = 'var(--forest-700)') => (
    <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '20px 24px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--cream-200)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--text-2xl)', color }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: 'var(--text-sm)', marginTop: 4 }}>{label}</div>
    </div>
  )

  return (
    <div>
      <h1 style={{ marginBottom: 8 }}>Dashboard</h1>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: 32 }}>Üdvözlünk az admin felületen!</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 40 }}>
        {statCard('Összes cica', catCount)}
        {statCard('Elérhető', available, 'var(--success)')}
        {statCard('Lefoglalt', reserved, 'var(--warning)')}
        {statCard('Sürgős', urgent, 'var(--danger)')}
        {statCard('Menhelyek', shelterCount)}
      </div>

      <div style={{ display: 'flex', gap: 24, marginBottom: 40, flexWrap: 'wrap' }}>
        <Link href="/admin/cicak/uj" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--forest-700)', color: 'var(--cream-50)', fontFamily: 'var(--font-display)', fontWeight: 600, padding: '12px 24px', borderRadius: 'var(--radius-pill)', textDecoration: 'none' }}>
          + Új cica hozzáadása
        </Link>
        <Link href="/admin/menhelyek/uj" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--white)', color: 'var(--forest-700)', fontFamily: 'var(--font-display)', fontWeight: 600, padding: '12px 24px', borderRadius: 'var(--radius-pill)', border: '1.5px solid var(--border-sage)', textDecoration: 'none' }}>
          + Új menhely
        </Link>
      </div>

      <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--cream-200)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--cream-200)', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--cocoa-800)' }}>
          Legutóbb feltöltött cicák
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
          <thead>
            <tr style={{ background: 'var(--cream-50)' }}>
              {['Név', 'Menhely', 'Kor', 'Státusz', 'Feltöltve', 'Szerkesztés'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-muted)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentCats.map((cat) => (
              <tr key={cat.id} style={{ borderTop: '1px solid var(--cream-200)' }}>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {(() => { try { const p = JSON.parse(cat.photos)[0]; return p ? <img src={p} alt="" style={{ width: 36, height: 36, objectFit: 'cover', borderRadius: 'var(--radius-sm)', flexShrink: 0 }} /> : <div style={{ width: 36, height: 36, background: 'var(--cream-100)', borderRadius: 'var(--radius-sm)', flexShrink: 0 }} /> } catch { return <div style={{ width: 36, height: 36, background: 'var(--cream-100)', borderRadius: 'var(--radius-sm)', flexShrink: 0 }} /> } })()}
                    <span style={{ fontWeight: 600, color: 'var(--cocoa-800)' }}>{cat.name}</span>
                  </div>
                </td>
                <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>{cat.shelter.name}</td>
                <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>
                  {cat.ageText ?? (cat.ageMonths != null ? ageTextFromMonths(cat.ageMonths) : '—')}
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span style={{ padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-display)', fontWeight: 600, background: cat.status === 'available' ? 'var(--success-bg)' : cat.status === 'urgent' ? 'var(--warning-bg)' : 'var(--cream-100)', color: cat.status === 'available' ? 'var(--success)' : cat.status === 'urgent' ? 'var(--warning)' : 'var(--text-muted)' }}>
                    {cat.status}
                  </span>
                </td>
                <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>{new Date(cat.uploadedAt).toLocaleDateString('hu-HU')}</td>
                <td style={{ padding: '12px 16px' }}>
                  <Link href={`/admin/cicak/${cat.id}`} style={{ color: 'var(--forest-700)', fontFamily: 'var(--font-display)', fontWeight: 600, textDecoration: 'none', fontSize: 'var(--text-sm)' }}>Szerkesztés</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ padding: '12px 16px', borderTop: '1px solid var(--cream-200)' }}>
          <Link href="/admin/cicak" style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', color: 'var(--forest-700)', textDecoration: 'none' }}>Összes cica megtekintése →</Link>
        </div>
      </div>
    </div>
  )
}
