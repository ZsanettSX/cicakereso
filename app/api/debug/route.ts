import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  const info: Record<string, unknown> = {
    turso_url: process.env.TURSO_DATABASE_URL,
    turso_token_set: !!process.env.TURSO_AUTH_TOKEN,
    node_env: process.env.NODE_ENV,
  }

  try {
    const catCount = await prisma.cat.count()
    const shelterCount = await prisma.shelter.count()
    info.db_status = 'OK'
    info.cat_count = catCount
    info.shelter_count = shelterCount
  } catch (e: any) {
    info.db_status = 'ERROR'
    info.db_error = e?.message
  }

  return NextResponse.json(info)
}
