import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Hibás jelszó' }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set('ck-admin', process.env.ADMIN_TOKEN ?? 'cica-admin-2024', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return res
}
