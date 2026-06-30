'use client'

import { useState } from 'react'

export default function KapcsolatPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nev: '', email: '', uzenet: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Üzenet a CicaKeresőtől – ${form.nev}`)
    const body = encodeURIComponent(`Feladó: ${form.nev}\nE-mail: ${form.email}\n\n${form.uzenet}`)
    window.location.href = `mailto:hello@cicakereso.hu?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: 'var(--radius-md)',
    border: '1.5px solid var(--cream-200)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: 'var(--cocoa-800)',
    background: 'var(--cream-50)',
    boxSizing: 'border-box' as const,
    outline: 'none',
    transition: 'border-color var(--dur-fast)',
  }

  return (
    <div style={{ maxWidth: 680, margin: '0 auto', padding: '56px 28px 80px' }}>
      <p className="ck-eyebrow" style={{ marginBottom: 12 }}>Keress minket</p>
      <h1 style={{ marginBottom: 8 }}>Kapcsolat</h1>
      <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', marginBottom: 40 }}>
        Kérdésed van? Menhelyet szeretnél bejelenteni? Hibát találtál? Szívesen halljuk!
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginBottom: 48 }} className="ck-contact-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--sage-100)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="var(--forest-700)" strokeWidth={2} strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--cocoa-800)' }}>E-mail</div>
              <a href="mailto:hello@cicakereso.hu" style={{ fontFamily: 'var(--font-body)', color: 'var(--text-link)' }}>hello@cicakereso.hu</a>
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Általában 1-2 munkanapon belül válaszolunk. Partner menhely jelentkezéseket is erre a címre várjuk.
          </p>
        </div>
      </div>

      {sent ? (
        <div style={{ background: 'var(--success-bg)', borderRadius: 'var(--radius-lg)', padding: '32px', textAlign: 'center' }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🐾</div>
          <h3 style={{ margin: '0 0 8px', color: 'var(--success)' }}>Megnyílt az e-mail kliensed!</h3>
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-body)', margin: 0 }}>Küldd el az üzenetet, és hamarosan visszaírunk!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--cocoa-700)', display: 'block', marginBottom: 6 }}>Neved *</label>
            <input type="text" required placeholder="Kovács Kata" value={form.nev} onChange={(e) => setForm((f) => ({ ...f, nev: e.target.value }))} style={inputStyle} />
          </div>
          <div>
            <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--cocoa-700)', display: 'block', marginBottom: 6 }}>E-mail *</label>
            <input type="email" required placeholder="kata@example.hu" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} style={inputStyle} />
          </div>
          <div>
            <label style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', color: 'var(--cocoa-700)', display: 'block', marginBottom: 6 }}>Üzeneted *</label>
            <textarea required placeholder="Miben segíthetünk?" rows={6} value={form.uzenet} onChange={(e) => setForm((f) => ({ ...f, uzenet: e.target.value }))} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
          </div>
          <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--forest-700)', color: 'var(--cream-50)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-md)', padding: '14px 28px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer' }}>
            Üzenet küldése →
          </button>
        </form>
      )}
      <style>{`@media(max-width:560px){.ck-contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  )
}
