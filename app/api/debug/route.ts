import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    turso_url_set: !!process.env.TURSO_DATABASE_URL,
    turso_url_prefix: process.env.TURSO_DATABASE_URL?.slice(0, 30),
    turso_token_set: !!process.env.TURSO_AUTH_TOKEN,
    db_url: process.env.DATABASE_URL?.slice(0, 30),
    node_env: process.env.NODE_ENV,
  })
}
