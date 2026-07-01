import { NextResponse } from 'next/server'
import { db } from '@/lib/turso'
import { parsePhotos, parseTraits } from '@/lib/utils'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const cat = await db.cat.findUniqueWithShelter({ slug: params.slug })
  if (!cat) return NextResponse.json(null, { status: 404 })

  const related = await db.cat.findMany({
    where: { shelterId: cat.shelterId, idNot: cat.id, statusNot: 'adopted' },
    take: 4,
  })

  return NextResponse.json({
    cat: { ...cat, photos: parsePhotos(cat.photos), traits: parseTraits(cat.traits) },
    related: related.map((r) => ({
      id: r.id, slug: r.slug, name: r.name, photos: r.photos,
      ageText: r.ageText, sex: r.sex, breed: r.breed,
      coatCss: r.coatCss, colorCategory: r.colorCategory,
      status: r.status, traits: r.traits,
      shelter: { name: r.shelter.name, county: r.shelter.county },
    })),
  })
}
