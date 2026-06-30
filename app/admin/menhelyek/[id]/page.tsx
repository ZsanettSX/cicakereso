import { prisma } from '@/lib/db'
import { updateShelter } from '@/lib/actions'
import ShelterForm from '@/components/admin/ShelterForm'
import { notFound } from 'next/navigation'

export default async function EditMenhelyPage({ params }: { params: { id: string } }) {
  const shelter = await prisma.shelter.findUnique({ where: { id: params.id } })
  if (!shelter) notFound()

  const action = async (formData: FormData) => {
    'use server'
    await updateShelter(params.id, formData)
  }

  return (
    <div>
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ margin: 0 }}>Szerkesztés: {shelter.name}</h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '4px 0 0' }}>Módosítsd a menhely adatait</p>
      </div>
      <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '32px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--cream-200)' }}>
        <ShelterForm
          action={action}
          submitLabel="Mentés"
          initial={{
            name: shelter.name,
            description: shelter.description ?? '',
            address: shelter.address ?? '',
            county: shelter.county ?? '',
            lat: shelter.lat,
            lng: shelter.lng,
            phone: shelter.phone ?? '',
            email: shelter.email ?? '',
            facebook: shelter.facebook ?? '',
            website: shelter.website ?? '',
            existingLogo: shelter.logo ?? undefined,
          }}
        />
      </div>
    </div>
  )
}
