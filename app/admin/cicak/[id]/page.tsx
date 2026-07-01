export const dynamic = 'force-dynamic'

import { db } from '@/lib/turso'
import { updateCat } from '@/lib/actions'
import CatForm from '@/components/admin/CatForm'
import { notFound } from 'next/navigation'
import { parsePhotos, parseTraits } from '@/lib/utils'

export default async function EditCicaPage({ params }: { params: { id: string } }) {
  const [cat, shelters] = await Promise.all([
    db.cat.findUnique({ id: params.id }),
    db.shelter.findManyForSelect(),
  ])

  if (!cat) notFound()

  const action = async (formData: FormData) => {
    'use server'
    await updateCat(params.id, formData)
  }

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: 0 }}>Szerkesztés: {cat.name}</h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '4px 0 0' }}>Módosítsd a cica adatait</p>
      </div>
      <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--cream-200)' }}>
        <CatForm
          shelters={shelters}
          action={action}
          submitLabel="Mentés"
          initial={{
            name: cat.name,
            shelterId: cat.shelterId,
            sex: cat.sex,
            ageText: cat.ageText ?? '',
            ageMonths: cat.ageMonths,
            breed: cat.breed ?? '',
            breedType: cat.breedType ?? 'keverék',
            color: cat.color ?? '',
            colorCategory: cat.colorCategory ?? '',
            coatCss: cat.coatCss ?? '',
            isNeutered: cat.isNeutered,
            isVaccinated: cat.isVaccinated,
            isChipped: cat.isChipped,
            traits: parseTraits(cat.traits).join(', '),
            description: cat.description ?? '',
            status: cat.status,
            existingPhotos: parsePhotos(cat.photos),
          }}
        />
      </div>
    </div>
  )
}
