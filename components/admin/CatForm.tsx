'use client'

import { useState, useRef } from 'react'
import { COLOR_CATEGORIES, PUREBRED_BREEDS } from '@/lib/constants'
import { ageTextFromMonths } from '@/lib/utils'

const PHOTO_SLOTS = 6

interface Shelter { id: string; name: string }
interface CatFormData {
  name?: string; shelterId?: string; sex?: string; ageMonths?: number | null;
  breed?: string; breedType?: string; colorCategory?: string;
  isNeutered?: boolean; isVaccinated?: boolean; isChipped?: boolean;
  traits?: string; description?: string; status?: string; existingPhotos?: string[];
}
interface CatFormProps {
  shelters: Shelter[]
  action: (formData: FormData) => Promise<void>
  initial?: CatFormData
  submitLabel?: string
}

type Slot = { kind: 'empty' } | { kind: 'existing'; url: string } | { kind: 'new'; preview: string }

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
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  )
}

export default function CatForm({ shelters, action, initial = {}, submitLabel = 'Mentés' }: CatFormProps) {
  const [ageMonths, setAgeMonths] = useState<string>(initial.ageMonths != null ? String(initial.ageMonths) : '')
  const [breedType, setBreedType] = useState(initial.breedType ?? 'keverék')
  const [breedQuery, setBreedQuery] = useState(initial.breed ?? '')
  const [selectedBreed, setSelectedBreed] = useState(initial.breed ?? '')
  const [breedOpen, setBreedOpen] = useState(false)

  const fileRefs = useRef<(HTMLInputElement | null)[]>(Array(PHOTO_SLOTS).fill(null))
  const [slots, setSlots] = useState<Slot[]>(() => {
    const existing: Slot[] = (initial.existingPhotos ?? []).slice(0, PHOTO_SLOTS).map(url => ({ kind: 'existing', url }))
    while (existing.length < PHOTO_SLOTS) existing.push({ kind: 'empty' })
    return existing
  })

  const agePreview = ageMonths && !isNaN(parseInt(ageMonths)) ? ageTextFromMonths(parseInt(ageMonths)) : null
  const filteredBreeds = PUREBRED_BREEDS.filter(b => b.toLowerCase().includes(breedQuery.toLowerCase()))

  const handleSlotClick = (i: number) => {
    if (slots[i].kind === 'empty') fileRefs.current[i]?.click()
  }

  const handleFileChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const preview = URL.createObjectURL(file)
    setSlots(s => s.map((slot, j) => j === i ? { kind: 'new', preview } : slot))
  }

  const handleRemoveSlot = (i: number) => {
    if (slots[i].kind === 'new' && fileRefs.current[i]) fileRefs.current[i]!.value = ''
    setSlots(s => s.map((slot, j) => j === i ? { kind: 'empty' } : slot))
  }

  const handleBreedTypeChange = (val: string) => {
    setBreedType(val)
    if (val !== 'fajtiszta') { setSelectedBreed(''); setBreedQuery('') }
  }

  const handleBreedSelect = (breed: string) => {
    setSelectedBreed(breed)
    setBreedQuery(breed)
    setBreedOpen(false)
  }

  return (
    <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Alapadatok */}
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

      {/* Nem + Kor */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Field label="Nem *">
          <select name="sex" required defaultValue={initial.sex ?? 'hím'} style={inputStyle}>
            <option value="hím">♂ Hím</option>
            <option value="nőstény">♀ Nőstény</option>
          </select>
        </Field>
        <div>
          <Field label="Kor (hónapban)">
            <input
              type="number" name="ageMonths" min={0} max={300}
              value={ageMonths} onChange={e => setAgeMonths(e.target.value)}
              style={inputStyle} placeholder="pl. 24"
            />
          </Field>
          {agePreview && (
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)', marginTop: 5 }}>
              → {agePreview}
            </div>
          )}
        </div>
      </div>

      {/* Fajta */}
      <div style={{ display: 'grid', gridTemplateColumns: breedType === 'fajtiszta' ? '1fr 2fr' : '1fr', gap: 16 }}>
        <Field label="Fajtatisztaság">
          <select name="breedType" value={breedType} onChange={e => handleBreedTypeChange(e.target.value)} style={inputStyle}>
            <option value="utcai">Utcai</option>
            <option value="keverék">Keverék</option>
            <option value="fajtiszta">Fajtiszta</option>
          </select>
        </Field>
        {breedType === 'fajtiszta' && (
          <div style={{ position: 'relative' }}>
            <label style={labelStyle}>Fajtiszta fajta</label>
            <input
              type="text"
              placeholder="Keresés a fajtában..."
              value={breedQuery}
              onChange={e => { setBreedQuery(e.target.value); setBreedOpen(true) }}
              onFocus={() => setBreedOpen(true)}
              onBlur={() => setTimeout(() => setBreedOpen(false), 150)}
              style={inputStyle}
              autoComplete="off"
            />
            <input type="hidden" name="breed" value={selectedBreed} />
            {breedOpen && filteredBreeds.length > 0 && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 20,
                background: 'var(--white)', border: '1.5px solid var(--cream-200)',
                borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)',
                maxHeight: 220, overflowY: 'auto', marginTop: 2,
              }}>
                {filteredBreeds.map(breed => (
                  <div
                    key={breed}
                    onMouseDown={() => handleBreedSelect(breed)}
                    style={{
                      padding: '9px 14px', fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-sm)', color: 'var(--cocoa-800)', cursor: 'pointer',
                      background: selectedBreed === breed ? 'var(--cream-100)' : 'transparent',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--cream-100)')}
                    onMouseLeave={e => (e.currentTarget.style.background = selectedBreed === breed ? 'var(--cream-100)' : 'transparent')}
                  >
                    {breed}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Szín */}
      <Field label="Szín kategória">
        <select name="colorCategory" defaultValue={initial.colorCategory ?? ''} style={inputStyle}>
          <option value="">—</option>
          {COLOR_CATEGORIES.map((c) => <option key={c.label} value={c.label}>{c.label}</option>)}
        </select>
      </Field>

      {/* Egészségügy */}
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

      {/* Fotó feltöltő — 6 slot */}
      <div>
        <label style={labelStyle}>Fotók</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {slots.map((slot, i) => (
            <div
              key={i}
              onClick={() => handleSlotClick(i)}
              style={{
                position: 'relative', aspectRatio: '1 / 1',
                borderRadius: 'var(--radius-md)', overflow: 'hidden',
                background: 'var(--cream-100)',
                border: `2px dashed ${slot.kind === 'empty' ? 'var(--cream-300)' : 'transparent'}`,
                cursor: slot.kind === 'empty' ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.15s',
              }}
              onMouseEnter={e => { if (slot.kind === 'empty') e.currentTarget.style.borderColor = 'var(--cream-400)' }}
              onMouseLeave={e => { if (slot.kind === 'empty') e.currentTarget.style.borderColor = 'var(--cream-300)' }}
            >
              {slot.kind === 'empty' ? (
                <svg width={40} height={40} viewBox="0 0 24 24" fill="none" stroke="var(--cream-400)" strokeWidth={1.5} strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              ) : (
                <>
                  <img
                    src={slot.kind === 'existing' ? slot.url : (slot as { kind: 'new'; preview: string }).preview}
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <button
                    type="button"
                    onClick={e => { e.stopPropagation(); handleRemoveSlot(i) }}
                    style={{
                      position: 'absolute', top: 6, right: 6,
                      width: 26, height: 26, borderRadius: '50%',
                      background: 'rgba(0,0,0,0.55)', color: '#fff',
                      border: 'none', cursor: 'pointer', fontSize: 17,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1,
                    }}
                  >×</button>
                  {slot.kind === 'existing' && <input type="hidden" name="existingPhotos" value={slot.url} />}
                </>
              )}
              <input
                type="file" name="photos" accept="image/*"
                style={{ display: 'none' }}
                ref={el => { fileRefs.current[i] = el }}
                onChange={e => handleFileChange(i, e)}
              />
            </div>
          ))}
        </div>
      </div>

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
