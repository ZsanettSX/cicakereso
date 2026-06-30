'use client'

import { HUNGARIAN_COUNTIES } from '@/lib/constants'

interface ShelterFormData {
  name?: string; description?: string; address?: string; county?: string;
  lat?: number | null; lng?: number | null; phone?: string; email?: string;
  facebook?: string; website?: string; existingLogo?: string;
}

interface ShelterFormProps {
  action: (formData: FormData) => Promise<void>
  initial?: ShelterFormData
  submitLabel?: string
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)',
  color: 'var(--cocoa-700)', display: 'block', marginBottom: 6,
}
const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-md)',
  border: '1.5px solid var(--cream-200)', fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)', color: 'var(--cocoa-800)', background: 'var(--cream-50)',
  boxSizing: 'border-box',
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}><label style={labelStyle}>{label}</label>{children}</div>
}

export default function ShelterForm({ action, initial = {}, submitLabel = 'Mentés' }: ShelterFormProps) {
  return (
    <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Field label="Menhely neve *">
          <input type="text" name="name" required defaultValue={initial.name} style={inputStyle} placeholder="pl. Mancs Menhely" />
        </Field>
        <Field label="Megye *">
          <select name="county" required defaultValue={initial.county ?? ''} style={inputStyle}>
            <option value="">Válassz megyét...</option>
            {HUNGARIAN_COUNTIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Cím">
        <input type="text" name="address" defaultValue={initial.address ?? ''} style={inputStyle} placeholder="pl. Budapest, Példa utca 1." />
      </Field>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Field label="Szélességi fok (lat)">
          <input type="number" name="lat" step="any" defaultValue={initial.lat ?? ''} style={inputStyle} placeholder="pl. 47.4979" />
        </Field>
        <Field label="Hosszúsági fok (lng)">
          <input type="number" name="lng" step="any" defaultValue={initial.lng ?? ''} style={inputStyle} placeholder="pl. 19.0402" />
        </Field>
      </div>

      <Field label="Leírás">
        <textarea name="description" rows={4} defaultValue={initial.description ?? ''} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} placeholder="Rövid bemutatkozás a menhelyről..." />
      </Field>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Field label="Telefonszám">
          <input type="tel" name="phone" defaultValue={initial.phone ?? ''} style={inputStyle} placeholder="pl. +36 30 123 4567" />
        </Field>
        <Field label="E-mail cím">
          <input type="email" name="email" defaultValue={initial.email ?? ''} style={inputStyle} placeholder="pl. info@menhely.hu" />
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Field label="Facebook oldal URL">
          <input type="url" name="facebook" defaultValue={initial.facebook ?? ''} style={inputStyle} placeholder="https://facebook.com/..." />
        </Field>
        <Field label="Weboldal URL">
          <input type="url" name="website" defaultValue={initial.website ?? ''} style={inputStyle} placeholder="https://menhely.hu" />
        </Field>
      </div>

      {initial.existingLogo && (
        <div>
          <label style={labelStyle}>Jelenlegi logó</label>
          <img src={initial.existingLogo} alt="" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 'var(--radius-md)', border: '1px solid var(--cream-200)' }} />
        </div>
      )}

      <Field label="Logó feltöltése">
        <input type="file" name="logo" accept="image/*" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }} />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: '6px 0 0' }}>JPEG, PNG, WebP — ajánlott méret: 200×200px</p>
      </Field>

      <div style={{ display: 'flex', gap: 12, paddingTop: 8 }}>
        <button type="submit" style={{ background: 'var(--forest-700)', color: 'var(--cream-50)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-md)', padding: '12px 28px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer' }}>
          {submitLabel}
        </button>
        <a href="/admin/menhelyek" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--white)', color: 'var(--cocoa-700)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-pill)', border: '1.5px solid var(--cream-200)', textDecoration: 'none' }}>
          Mégse
        </a>
      </div>
    </form>
  )
}
