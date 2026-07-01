import { NextResponse } from 'next/server'
import { createClient } from '@libsql/client'

export const dynamic = 'force-dynamic'

export async function GET() {
  const tursoUrl = process.env.TURSO_DATABASE_URL
  const tursoToken = process.env.TURSO_AUTH_TOKEN

  const info: Record<string, unknown> = {
    turso_url: tursoUrl,
    turso_token_set: !!tursoToken,
    node_env: process.env.NODE_ENV,
  }

  if (!tursoUrl) {
    info.raw_status = 'NO_URL'
    return NextResponse.json(info)
  }

  // Test direct libsql connection (bypasses Prisma)
  try {
    const client = createClient({ url: tursoUrl, authToken: tursoToken })
    const result = await client.execute("SELECT name FROM sqlite_master WHERE type='table'")
    info.raw_status = 'OK'
    info.tables = result.rows.map((r) => r[0])
  } catch (e: any) {
    info.raw_status = 'ERROR'
    info.raw_error = e?.message
  }

  // Test Prisma connection
  try {
    const { prisma } = await import('@/lib/db')
    const catCount = await prisma.cat.count()
    const shelterCount = await prisma.shelter.count()
    info.prisma_status = 'OK'
    info.cat_count = catCount
    info.shelter_count = shelterCount
  } catch (e: any) {
    info.prisma_status = 'ERROR'
    info.prisma_error = e?.message
  }

  return NextResponse.json(info)
}
