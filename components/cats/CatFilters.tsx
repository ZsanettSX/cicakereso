'use client'

import { useCallback, useEffect, useState, useTransition } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { COLOR_CATEGORIES, HUNGARIAN_COUNTIES, AGE_GROUPS, SORT_OPTIONS } from '@/lib/constants'

export default function CatFilters({ totalCount }: { totalCount: number }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()
  const [mobileOpen, setMobileOpen] = useState(false)

  const get = (key: string) => searchParams.get(key) ?? ''
  const getMulti = (key: string) => {
    const val = searchParams.get(key)
    return val ? val.split(',').filter(Boolean) : []
  }

  const [nev, setNev] = useState(get('nev'))
  const [nem, setNem] = useState(get('nem'))
  const [kor, setKor] = useState(get('kor'))
  const [szin, setSzin] = useState<string[]>(getMulti('szin'))
  const [fajta, setFajta] = useState<string[]>(getMulti('fajta'))
  const [megye, setMegye] = useState<string[]>(getMulti('megye'))
  const [rendez, setRendez] = useState(get('rendez'))

  const push = useCallback(
    (updates: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString())
      for (const [k, v] of Object.entries(updates)) {
        if (v) params.set(k, v)
        else params.delete(k)
      }
      startTransition(() => { router.push(`${pathname}?${params.toString()}`) })
    },
    [searchParams, pathname, router]
  )

  useEffect(() => {
    const timer = setTimeout(() => push({ nev }), 300)
    return () => clearTimeout(timer)
  }, [nev])

  const setNemAndPush = (v: string) => { setNem(v); push({ nem: v }) }
  const setKorAndPush = (v: string) => { setKor(v); push({ kor: v }) }
  const toggleSzin = (v: string) => {
    const next = szin.includes(v) ? szin.filter((x) => x !== v) : [...szin, v]
    setSzin(next); push({ szin: next.join(',') })
  }
  const toggleFajta = (v: string) => {
    const next = fajta.includes(v) ? fajta.filter((x) => x !== v) : [...fajta, v]
    setFajta(next); push({ fajta: next.join(',') })
  }
  const toggleMegye = (v: string) => {
    const next = megye.includes(v) ? megye.filter((x) => x !== v) : [...megye, v]
    setMegye(next); push({ megye: next.join(',') })
  }

  const clearAll = () => {
    setNev(''); setNem(''); setKor(''); setSzin([]); setFajta([]); setMegye([]); setRendez('')
    startTransition(() => router.push(pathname))
  }

  const hasFilters = nev || nem || kor || szin.length > 0 || fajta.length > 0 || megye.length > 0

  const sectionLabel: React.CSSProperties = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: 'var(--text-sm)',
    color: 'var(--cocoa-700)',
    marginBottom: 10,
    display: 'block',
  }

  const chipBtn = (active: boolean): React.CSSProperties => ({
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 'var(--text-sm)',
    padding: '5px 14px',
    borderRadius: 'var(--radius-pill)',
    border: active ? '1.5px solid var(--forest-700)' : '1.5px solid var(--cream-200)',
    background: active ? 'var(--forest-700)' : 'var(--white)',
    color: active ? 'var(--cream-50)' : 'var(--cocoa-700)',
    cursor: 'pointer',
    transition: 'all var(--dur-fast) var(--ease-out)',
  })

  const sidebar = (
    <aside
      style={{
        background: 'var(--white)',
        border: '1px solid var(--cream-200)',
        borderRadius: 'var(--radius-lg)',
        padding: 22,
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--cocoa-800)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="var(--forest-700)" strokeWidth={2.2} strokeLinecap="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="12" y1="18" x2="12" y2="18" /></svg>
          Szűrők
        </span>
        {hasFilters && (
          <button onClick={clearAll} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', color: 'var(--camel-600)', padding: 0, display: 'flex', alignItems: 'center', gap: 4 }}>
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" /></svg>
            Összes törlése
          </button>
        )}
      </div>

      {/* Name search */}
      <div>
        <label style={sectionLabel}>Keresés névre</label>
        <input
          type="text"
          placeholder="pl. Cirmi..."
          value={nev}
          onChange={(e) => setNev(e.target.value)}
          style={{
            width: '100%',
            padding: '8px 12px',
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid var(--cream-200)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            color: 'var(--cocoa-800)',
            background: 'var(--cream-50)',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Sex */}
      <div>
        <label style={sectionLabel}>Nem</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button onClick={() => setNemAndPush('')} style={chipBtn(nem === '')}>Bármely</button>
          <button onClick={() => setNemAndPush('hím')} style={{ ...chipBtn(nem === 'hím'), display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#3a7fd4" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="14" r="5" /><line x1="19" y1="5" x2="14.1" y2="9.9" /><polyline points="15 5 19 5 19 9" /></svg>
            Hím
          </button>
          <button onClick={() => setNemAndPush('nőstény')} style={{ ...chipBtn(nem === 'nőstény'), display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#d44a6a" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="5" /><line x1="12" y1="14" x2="12" y2="21" /><line x1="9" y1="18" x2="15" y2="18" /></svg>
            Nőstény
          </button>
        </div>
      </div>

      {/* Age group */}
      <div>
        <label style={sectionLabel}>Kor</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          <button onClick={() => setKorAndPush('')} style={chipBtn(kor === '')}>Bármely</button>
          {AGE_GROUPS.map((g) => (
            <button key={g} onClick={() => setKorAndPush(g)} style={chipBtn(kor === g)}>{g}</button>
          ))}
        </div>
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginTop: 6, fontFamily: 'var(--font-body)' }}>
          Kölyök: 0–11 hó · Fiatal: 1 év · Felnőtt: 2–7 év · Idős: 8+ év
        </div>
      </div>

      {/* Colors */}
      <div>
        <label style={sectionLabel}>Szín</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {COLOR_CATEGORIES.map(({ label, css }) => (
            <button
              key={label}
              onClick={() => toggleSzin(label)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '5px 12px 5px 8px',
                borderRadius: 'var(--radius-pill)',
                border: szin.includes(label) ? '1.5px solid var(--forest-700)' : '1.5px solid var(--cream-200)',
                background: szin.includes(label) ? 'var(--sage-100)' : 'var(--white)',
                cursor: 'pointer',
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xs)',
                color: 'var(--cocoa-700)',
                fontWeight: szin.includes(label) ? 600 : 500,
                transition: 'all var(--dur-fast) var(--ease-out)',
              }}
            >
              <span style={{ width: 14, height: 14, borderRadius: '50%', background: css, flexShrink: 0, boxShadow: 'inset 0 0 0 1px rgba(104,66,48,0.2)' }} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Breed type */}
      <div>
        <label style={sectionLabel}>Fajtatisztaság</label>
        <div style={{ display: 'flex', gap: 8 }}>
          {['fajtiszta', 'keverék'].map((v) => (
            <button key={v} onClick={() => toggleFajta(v)} style={chipBtn(fajta.includes(v))}>
              {v === 'fajtiszta' ? 'Fajtiszta' : 'Keverék'}
            </button>
          ))}
        </div>
      </div>

      {/* County */}
      <div>
        <label style={sectionLabel}>Megye / Helyszín</label>
        <div style={{ maxHeight: 200, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {HUNGARIAN_COUNTIES.map((c) => (
            <label key={c} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--cocoa-700)', padding: '3px 0' }}>
              <input type="checkbox" checked={megye.includes(c)} onChange={() => toggleMegye(c)} style={{ accentColor: 'var(--forest-700)', width: 15, height: 15 }} />
              {c}
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div>
        <label style={sectionLabel}>Rendezés</label>
        <select
          value={rendez}
          onChange={(e) => { setRendez(e.target.value); push({ rendez: e.target.value }) }}
          style={{
            width: '100%',
            padding: '8px 12px',
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid var(--cream-200)',
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            color: 'var(--cocoa-800)',
            background: 'var(--cream-50)',
            cursor: 'pointer',
          }}
        >
          {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {mobileOpen && (
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            width: '100%',
            padding: '12px',
            background: 'var(--forest-700)',
            color: 'var(--cream-50)',
            border: 'none',
            borderRadius: 'var(--radius-pill)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: 'var(--text-md)',
          }}
        >
          Találatok mutatása →
        </button>
      )}
    </aside>
  )

  return (
    <>
      {/* Mobile toggle button */}
      <div className="ck-filter-mobile-toggle" style={{ display: 'none', marginBottom: 8 }}>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 20px',
            borderRadius: 'var(--radius-pill)',
            border: `1.5px solid ${hasFilters ? 'var(--forest-700)' : 'var(--cream-200)'}`,
            background: hasFilters ? 'var(--sage-100)' : 'var(--white)',
            color: hasFilters ? 'var(--forest-700)' : 'var(--cocoa-700)',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round"><line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="12" y1="18" x2="12" y2="18" /></svg>
          Szűrők {hasFilters && '(aktív)'}
        </button>
      </div>

      {/* Desktop sidebar (always visible) */}
      <div className="ck-filter-desktop" style={{ position: 'sticky', top: 80 }}>
        {sidebar}
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="ck-filter-mobile-overlay"
          style={{
            display: 'none',
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'var(--surface-overlay)',
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              maxHeight: '85vh',
              overflowY: 'auto',
              borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {sidebar}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .ck-filter-desktop { display: none !important; }
          .ck-filter-mobile-toggle { display: block !important; }
          .ck-filter-mobile-overlay { display: block !important; }
        }
      `}</style>
    </>
  )
}
