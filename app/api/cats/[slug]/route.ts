import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { parsePhotos, parseTraits } from '@/lib/utils'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const cat = await prisma.cat.findUnique({
    where: { slug: params.slug },
    include: { shelter: true },
  })
  if (!cat) return NextResponse.json(null, { status: 404 })

  const related = await prisma.cat.findMany({
    where: { shelterId: cat.shelterId, id: { not: cat.id }, status: { not: 'adopted' } },
    include: { shelter: true },
    take: 4,
  })

  return NextResponse.json({
    cat: {
      ...cat,
      photos: parsePhotos(cat.photos),
      traits: parseTraits(cat.traits),
    },
    related: related.map((r) => ({
      id: r.id, slug: r.slug, name: r.name, photos: r.photos,
      ageText: r.ageText, sex: r.sex, breed: r.breed,
      coatCss: r.coatCss, colorCategory: r.colorCategory,
      status: r.status, traits: r.traits,
      shelter: { name: r.shelter.name, county: r.shelter.county },
    })),
  })
}
