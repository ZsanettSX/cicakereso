import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const tursoUrl = process.env.TURSO_DATABASE_URL ?? ''
  const tursoToken = process.env.TURSO_AUTH_TOKEN ?? ''

  // Show last 30 chars of URL so we can verify which DB is targeted
  const info: Record<string, unknown> = {
    turso_url_tail: tursoUrl.slice(-40),
    turso_token_set: !!tursoToken,
    node_env: process.env.NODE_ENV,
  }

  // Direct HTTP call to Turso — bypasses Prisma and libsql adapter entirely
  const httpUrl = tursoUrl.replace('libsql://', 'https://')
  try {
    const res = await fetch(`${httpUrl}/v2/pipeline`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tursoToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        requests: [
          { type: 'execute', stmt: { sql: "SELECT name FROM sqlite_master WHERE type='table'", args: [] } },
          { type: 'close' },
        ],
      }),
    })
    const data = await res.json()
    info.http_status = res.status
    const rows = data?.results?.[0]?.response?.result?.rows ?? []
    info.tables_via_http = rows.map((r: any[]) => r[0]?.value ?? r[0])
  } catch (e: any) {
    info.http_error = e?.message
  }

  return NextResponse.json(info)
}
