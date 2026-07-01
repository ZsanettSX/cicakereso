import { NextResponse } from 'next/server'
import { createClient } from '@libsql/client'

export const dynamic = 'force-dynamic'

export async function GET() {
  const tursoUrl = process.env.TURSO_DATABASE_URL ?? ''
  const tursoToken = process.env.TURSO_AUTH_TOKEN ?? ''
  const httpUrl = tursoUrl.replace('libsql://', 'https://')

  const info: Record<string, unknown> = {
    turso_url_tail: tursoUrl.slice(-40),
    http_url_tail: httpUrl.slice(-40),
    node_env: process.env.NODE_ENV,
  }

  // Test @libsql/client directly with https:// (no Prisma)
  try {
    const client = createClient({ url: httpUrl, authToken: tursoToken })
    const result = await client.execute("SELECT name FROM sqlite_master WHERE type='table'")
    info.libsql_tables = result.rows.map((r) => r[0])
    const catResult = await client.execute('SELECT COUNT(*) as n FROM Cat')
    info.cat_count = catResult.rows[0]?.[0]
    info.libsql_status = 'OK'
  } catch (e: any) {
    info.libsql_status = 'ERROR'
    info.libsql_error = e?.message
  }

  return NextResponse.json(info)
}
