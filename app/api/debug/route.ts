import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'

export const dynamic = 'force-dynamic'

export async function GET() {
  const tursoUrl = process.env.TURSO_DATABASE_URL ?? ''
  const tursoToken = process.env.TURSO_AUTH_TOKEN ?? ''

  const info: Record<string, unknown> = {
    turso_url_tail: tursoUrl.slice(-40),
    turso_token_set: !!tursoToken,
    node_env: process.env.NODE_ENV,
  }

  // Test fresh Prisma client (not the singleton from lib/db)
  try {
    const httpUrl = tursoUrl.replace('libsql://', 'https://')
    const adapter = new PrismaLibSql({ url: httpUrl, authToken: tursoToken })
    const client = new PrismaClient({ adapter } as any)
    const tables = await client.$queryRaw<{ name: string }[]>`SELECT name FROM sqlite_master WHERE type='table'`
    info.prisma_tables = tables.map((t) => t.name)
    const catCount = await client.cat.count()
    info.cat_count = catCount
    info.prisma_status = 'OK'
    await client.$disconnect()
  } catch (e: any) {
    info.prisma_status = 'ERROR'
    info.prisma_error = e?.message
    info.prisma_stack = e?.stack?.split('\n').slice(0, 5).join(' | ')
  }

  return NextResponse.json(info)
}
