import { Suspense } from 'react'
import { prisma } from '@/lib/db'
import { shuffle } from '@/lib/utils'
import CatGrid from '@/components/cats/CatGrid'
import CatFilters from '@/components/cats/CatFilters'
import type { CatCardData } from '@/components/cats/CatCard'
import { Prisma } from '@prisma/client'

interface SearchParams {
  nev?: string
  nem?: string
  kor?: string
  szin?: string
  fajta?: string
  megye?: string
  rendez?: string
}

function toCatCard(cat: Prisma.CatGetPayload<{ include: { shelter: true } }>): CatCardData {
  return {
    id: cat.id,
    slug: cat.slug,
    name: cat.name,
    photos: cat.photos,
    ageText: cat.ageText,
    sex: cat.sex,
    breed: cat.breed,
    coatCss: cat.coatCss,
    colorCategory: cat.colorCategory,
    status: cat.status,
    traits: cat.traits,
    shelter: { name: cat.shelter.name, county: cat.shelter.county },
  }
}

async function CatListContent({ searchParams }: { searchParams: SearchParams }) {
  const { nev, nem, kor, szin, fajta, megye, rendez } = searchParams

  const where: Prisma.CatWhereInput = { status: { not: 'adopted' } }

  if (nev) where.name = { contains: nev }
  if (nem) where.sex = nem
  if (kor) where.ageGroup = kor

  const szinArr = szin ? szin.split(',').filter(Boolean) : []
  if (szinArr.length > 0) where.colorCategory = { in: szinArr }

  const fajtaArr = fajta ? fajta.split(',').filter(Boolean) : []
  if (fajtaArr.length > 0) where.breedType = { in: fajtaArr }

  const megyeArr = megye ? megye.split(',').filter(Boolean) : []
  if (megyeArr.length > 0) where.shelter = { county: { in: megyeArr } }

  let orderBy: Prisma.CatOrderByWithRelationInput | undefined
  switch (rendez) {
    case 'legujabb': orderBy = { uploadedAt: 'desc' }; break
    case 'legregibb': orderBy = { uploadedAt: 'asc' }; break
    case 'legfiatalabb': orderBy = { ageMonths: 'asc' }; break
    case 'legidosebb': orderBy = { ageMonths: 'desc' }; break
    case 'nev': orderBy = { name: 'asc' }; break
    default: orderBy = { uploadedAt: 'desc' }
  }

  const cats = await prisma.cat.findMany({
    where,
    include: { shelter: true },
    orderBy,
  })

  const result = rendez === 'veletlen' || !rendez ? shuffle(cats) : cats
  const cards = result.map(toCatCard)
  const totalCount = await prisma.cat.count({ where: { status: { not: 'adopted' } } })

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 28, alignItems: 'start' }} className="ck-browse-layout">
      <Suspense>
        <CatFilters totalCount={totalCount} />
      </Suspense>

      <div>
        <div style={{ marginBottom: 20 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--forest-700)', fontWeight: 700 }}>{cards.length}</strong> cica elérhető
          </span>
        </div>
        <CatGrid cats={cards} cols={3} emptyActionHref="/cicak" emptyActionLabel="Szűrők törlése" />
      </div>

      <style>{`@media(max-width:900px){.ck-browse-layout{grid-template-columns:1fr!important;}}`}</style>
    </div>
  )
}

export default async function CicakPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 28px 64px' }}>
      <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Betöltés...</div>}>
        <CatListContent searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
