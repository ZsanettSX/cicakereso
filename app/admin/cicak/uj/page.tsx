export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/db'
import { createCat } from '@/lib/actions'
import CatForm from '@/components/admin/CatForm'

export default async function UjCicaPage() {
  const shelters = await prisma.shelter.findMany({ select: { id: true, name: true }, orderBy: { name: 'asc' } })

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: 0 }}>Új cica hozzáadása</h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '4px 0 0' }}>Töltsd ki az adatokat az új cica feltöltéséhez</p>
      </div>
      <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--cream-200)' }}>
        <CatForm shelters={shelters} action={createCat} submitLabel="Cica létrehozása" />
      </div>
    </div>
  )
}
