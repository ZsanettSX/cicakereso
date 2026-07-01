import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export async function GET() {
  const info: Record<string, unknown> = {
    turso_url_set: !!process.env.TURSO_DATABASE_URL,
    turso_token_set: !!process.env.TURSO_AUTH_TOKEN,
    node_env: process.env.NODE_ENV,
  }

  try {
    const tables = await prisma.$queryRaw<{ name: string }[]>`SELECT name FROM sqlite_master WHERE type='table'`
    info.tables = tables.map((t) => t.name)
  } catch (e: any) {
    info.tables_error = e?.message
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
