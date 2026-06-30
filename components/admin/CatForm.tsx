'use client'

import { useState } from 'react'
import { COLOR_CATEGORIES } from '@/lib/constants'

interface Shelter { id: string; name: string }
interface CatFormData {
  name?: string; shelterId?: string; sex?: string; ageText?: string; ageMonths?: number | null;
  breed?: string; breedType?: string; color?: string; colorCategory?: string; coatCss?: string;
  isNeutered?: boolean; isVaccinated?: boolean; isChipped?: boolean; traits?: string;
  description?: string; status?: string; existingPhotos?: string[];
}

interface CatFormProps {
  shelters: Shelter[]
  action: (formData: FormData) => Promise<void>
  initial?: CatFormData
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

export default function CatForm({ shelters, action, initial = {}, submitLabel = 'Mentés' }: CatFormProps) {
  const [existingPhotos, setExistingPhotos] = useState<string[]>(initial.existingPhotos ?? [])

  return (
    <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Existing photos hidden inputs */}
      {existingPhotos.map((p) => <input key={p} type="hidden" name="existingPhotos" value={p} />)}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Field label="Név *">
          <input type="text" name="name" required defaultValue={initial.name} style={inputStyle} placeholder="pl. Morzsi" />
        </Field>
        <Field label="Menhely *">
          <select name="shelterId" required defaultValue={initial.shelterId} style={inputStyle}>
            <option value="">Válassz menhelyet...</option>
            {shelters.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        <Field label="Nem *">
          <select name="sex" required defaultValue={initial.sex ?? 'hím'} style={inputStyle}>
            <option value="hím">♂ Hím</option>
            <option value="nőstény">♀ Nőstény</option>
          </select>
        </Field>
        <Field label="Kor szöveg">
          <input type="text" name="ageText" defaultValue={initial.ageText ?? ''} style={inputStyle} placeholder="pl. 2 éves" />
        </Field>
        <Field label="Kor (hónapban)">
          <input type="number" name="ageMonths" min={0} max={300} defaultValue={initial.ageMonths ?? ''} style={inputStyle} placeholder="pl. 24" />
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Field label="Fajta">
          <input type="text" name="breed" defaultValue={initial.breed ?? ''} style={inputStyle} placeholder="pl. Európai rövidszőrű" />
        </Field>
        <Field label="Fajtatisztaság">
          <select name="breedType" defaultValue={initial.breedType ?? 'keverék'} style={inputStyle}>
            <option value="keverék">Keverék</option>
            <option value="fajtiszta">Fajtiszta</option>
          </select>
        </Field>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
        <Field label="Szín (megjelenítési név)">
          <input type="text" name="color" defaultValue={initial.color ?? ''} style={inputStyle} placeholder="pl. Vörös cirmos" />
        </Field>
        <Field label="Szín kategória">
          <select name="colorCategory" defaultValue={initial.colorCategory ?? ''} style={inputStyle}>
            <option value="">—</option>
            {COLOR_CATEGORIES.map((c) => <option key={c.label} value={c.label}>{c.label}</option>)}
          </select>
        </Field>
        <Field label="Szín CSS (swatch)">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <input type="text" name="coatCss" defaultValue={initial.coatCss ?? ''} style={{ ...inputStyle, flex: 1 }} placeholder="#d99a5b" />
          </div>
        </Field>
      </div>

      {/* Health */}
      <div>
        <label style={labelStyle}>Egészségügyi adatok</label>
        <div style={{ display: 'flex', gap: 24 }}>
          {[['isNeutered', 'Ivartalanítva'], ['isVaccinated', 'Oltva'], ['isChipped', 'Chippelve']].map(([name, label]) => (
            <label key={name} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }}>
              <input type="checkbox" name={name} defaultChecked={initial[name as keyof CatFormData] as boolean} style={{ width: 16, height: 16, accentColor: 'var(--forest-700)' }} />
              {label}
            </label>
          ))}
        </div>
      </div>

      <Field label="Jellemzők (vesszővel elválasztva)">
        <input type="text" name="traits" defaultValue={initial.traits ?? ''} style={inputStyle} placeholder="pl. Játékos, Emberbarát, Kíváncsi" />
      </Field>

      <Field label="Leírás">
        <textarea name="description" rows={5} defaultValue={initial.description ?? ''} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} placeholder="Meséld el a cica személyiségét, történetét..." />
      </Field>

      <Field label="Státusz">
        <select name="status" defaultValue={initial.status ?? 'available'} style={inputStyle}>
          <option value="available">Örökbe fogadható</option>
          <option value="urgent">Sürgős</option>
          <option value="reserved">Lefoglalt</option>
          <option value="adopted">Örökbefogadva</option>
        </select>
      </Field>

      {/* Existing photos */}
      {existingPhotos.length > 0 && (
        <div>
          <label style={labelStyle}>Jelenlegi fotók</label>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {existingPhotos.map((p) => (
              <div key={p} style={{ position: 'relative' }}>
                <img src={p} alt="" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                <button type="button" onClick={() => setExistingPhotos((ps) => ps.filter((x) => x !== p))} style={{ position: 'absolute', top: -6, right: -6, width: 22, height: 22, borderRadius: '50%', background: 'var(--danger)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <Field label="Fotók feltöltése">
        <input type="file" name="photos" multiple accept="image/*" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)' }} />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', margin: '6px 0 0' }}>JPEG, PNG, WebP — több fájl egyszerre is kijelölhető.</p>
      </Field>

      <div style={{ display: 'flex', gap: 12, paddingTop: 8 }}>
        <button type="submit" style={{ background: 'var(--forest-700)', color: 'var(--cream-50)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-md)', padding: '12px 28px', borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer' }}>
          {submitLabel}
        </button>
        <a href="/admin/cicak" style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--white)', color: 'var(--cocoa-700)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-sm)', padding: '12px 24px', borderRadius: 'var(--radius-pill)', border: '1.5px solid var(--cream-200)', textDecoration: 'none' }}>
          Mégse
        </a>
      </div>
    </form>
  )
}
