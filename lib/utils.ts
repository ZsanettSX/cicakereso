export function slugify(text: string): string {
  const map: Record<string, string> = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ö: 'o',
    ő: 'o',
    ú: 'u',
    ü: 'u',
    ű: 'u',
  }
  return text
    .toLowerCase()
    .replace(/[áéíóöőúüű]/g, (c) => map[c] ?? c)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function ageGroupFromMonths(months: number): string {
  if (months < 12) return 'Kölyök'
  if (months < 24) return 'Fiatal'
  if (months < 96) return 'Felnőtt'
  return 'Idős'
}

export function parsePhotos(json: string | null | undefined): string[] {
  if (!json) return []
  try {
    const val = JSON.parse(json)
    return Array.isArray(val) ? val.filter((v) => typeof v === 'string') : []
  } catch {
    return []
  }
}

export function parseTraits(json: string | null | undefined): string[] {
  if (!json) return []
  try {
    const val = JSON.parse(json)
    return Array.isArray(val) ? val.filter((v) => typeof v === 'string') : []
  } catch {
    return []
  }
}

export function shuffle<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
