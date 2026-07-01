import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/turso'

export async function GET(req: NextRequest) {
  const slugs = req.nextUrl.searchParams.get('slugs')?.split(',').filter(Boolean) ?? []
  if (slugs.length === 0) return NextResponse.json([])

  const cats = await db.cat.findManyBySlugs(slugs)

  return NextResponse.json(
    cats.map((c) => ({
      id: c.id, slug: c.slug, name: c.name, photos: c.photos,
      ageText: c.ageText, sex: c.sex, breed: c.breed,
      coatCss: c.coatCss, colorCategory: c.colorCategory,
      status: c.status, traits: c.traits,
      shelter: { name: c.shelter.name, county: c.shelter.county },
    }))
  )
}
