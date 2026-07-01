export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import { db } from '@/lib/turso'
import type { CatWithShelter } from '@/lib/turso'
import { shuffle } from '@/lib/utils'
import CatGrid from '@/components/cats/CatGrid'
import CatFilters from '@/components/cats/CatFilters'
import type { CatCardData } from '@/components/cats/CatCard'

interface SearchParams {
  nev?: string
  nem?: string
  kor?: string
  szin?: string
  fajta?: string
  megye?: string
  rendez?: string
}

function toCatCard(cat: CatWithShelter): CatCardData {
  return {
    id: cat.id, slug: cat.slug, name: cat.name, photos: cat.photos,
    ageText: cat.ageText, sex: cat.sex, breed: cat.breed,
    coatCss: cat.coatCss, colorCategory: cat.colorCategory,
    status: cat.status, traits: cat.traits,
    shelter: { name: cat.shelter.name, county: cat.shelter.county },
  }
}

async function CatListContent({ searchParams }: { searchParams: SearchParams }) {
  const { nev, nem, kor, szin, fajta, megye, rendez } = searchParams

  const szinArr = szin ? szin.split(',').filter(Boolean) : []
  const fajtaArr = fajta ? fajta.split(',').filter(Boolean) : []
  const megyeArr = megye ? megye.split(',').filter(Boolean) : []

  let orderBy = 'c.uploadedAt DESC'
  switch (rendez) {
    case 'legujabb': orderBy = 'c.uploadedAt DESC'; break
    case 'legregibb': orderBy = 'c.uploadedAt ASC'; break
    case 'legfiatalabb': orderBy = 'c.ageMonths ASC'; break
    case 'legidosebb': orderBy = 'c.ageMonths DESC'; break
    case 'nev': orderBy = 'c.name ASC'; break
  }

  const cats = await db.cat.findMany({
    where: {
      statusNot: 'adopted',
      name: nev,
      sex: nem,
      ageGroup: kor,
      colorCategory: szinArr.length ? szinArr : undefined,
      breedType: fajtaArr.length ? fajtaArr : undefined,
      shelterCounty: megyeArr.length ? megyeArr : undefined,
    },
    orderBy,
  })

  const result = rendez === 'veletlen' || !rendez ? shuffle(cats) : cats
  const cards = result.map(toCatCard)
  const totalCount = await db.cat.count({ statusNot: 'adopted' })

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 28, alignItems: 'start' }} className="ck-browse-layout">
      <Suspense>
        <CatFilters totalCount={totalCount} />
      </Suspense>

      <div>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ margin: '0 0 8px', fontSize: 'var(--text-2xl)' }}>Örökbefogadható cicák Magyarországon</h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '0 0 12px' }}>
            Találd meg a doromboló szőrmók lelkitársadat – menhelyi cicák, akik új otthont keresnek
          </p>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--forest-700)', fontWeight: 700 }}>{cards.length}</strong> cica elérhető
          </span>
        </div>
        <CatGrid cats={cards} cols={3} emptyActionHref="/cicak" emptyActionLabel="Szűrők törlése" />
      </div>

      <style>{`
        @media(max-width:900px){.ck-browse-layout{grid-template-columns:1fr!important; gap:8px!important;}}
        @media(max-width:480px){.ck-cicak-page{padding-left:10px!important;padding-right:10px!important;padding-top:20px!important;}}
      `}</style>
    </div>
  )
}

export default async function CicakPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <div className="ck-cicak-page" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 28px 64px' }}>
      <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Betöltés...</div>}>
        <CatListContent searchParams={searchParams} />
      </Suspense>
    </div>
  )
}
