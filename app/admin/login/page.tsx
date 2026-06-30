'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
    if (res.ok) {
      router.push('/admin')
    } else {
      const data = await res.json()
      setError(data.error ?? 'Hiba történt')
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <div style={{ width: '100%', maxWidth: 400, background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '40px', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--cream-200)' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <img src="/logo-circle.png" alt="CicaKereső" style={{ width: 64, height: 64, marginBottom: 12, borderRadius: '50%' }} />
          <h1 style={{ margin: 0, fontSize: 'var(--text-xl)' }}>Admin belépés</h1>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: '8px 0 0' }}>CicaKereső adminisztrációs felület</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--cocoa-700)', display: 'block', marginBottom: 6 }}>Jelszó</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: error ? '1.5px solid var(--danger)' : '1.5px solid var(--cream-200)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--cocoa-800)', background: 'var(--cream-50)', boxSizing: 'border-box' }}
            />
            {error && <p style={{ color: 'var(--danger)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', margin: '6px 0 0' }}>{error}</p>}
          </div>
          <button type="submit" disabled={loading} style={{ background: 'var(--forest-700)', color: 'var(--cream-50)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-md)', padding: '14px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Belépés...' : 'Belépés →'}
          </button>
        </form>
      </div>
    </div>
  )
}
