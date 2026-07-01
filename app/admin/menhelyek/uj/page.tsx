export const dynamic = 'force-dynamic'

import { createShelter } from '@/lib/actions'
import ShelterForm from '@/components/admin/ShelterForm'

export default async function UjMenhelyPage() {
  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: 0 }}>Új menhely hozzáadása</h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '4px 0 0' }}>Töltsd ki az adatokat az új menhely regisztrálásához</p>
      </div>
      <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--cream-200)' }}>
        <ShelterForm action={createShelter} submitLabel="Menhely létrehozása" />
      </div>
    </div>
  )
}
