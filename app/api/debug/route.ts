import { NextResponse } from 'next/server'
import { db } from '@/lib/turso'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const [catCount, shelterCount] = await Promise.all([
      db.cat.count(),
      db.shelter.count(),
    ])
    return NextResponse.json({ status: 'OK', cat_count: catCount, shelter_count: shelterCount })
  } catch (e: any) {
    return NextResponse.json({ status: 'ERROR', error: e?.message }, { status: 500 })
  }
}
