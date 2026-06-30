export const HUNGARIAN_COUNTIES = [
  'Budapest', 'Baranya', 'Bács-Kiskun', 'Békés', 'Borsod-Abaúj-Zemplén',
  'Csongrád-Csanád', 'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves',
  'Jász-Nagykun-Szolnok', 'Komárom-Esztergom', 'Nógrád', 'Pest', 'Somogy',
  'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala',
]

export const COLOR_CATEGORIES = [
  { label: 'Fekete', css: '#2d2d2d' },
  { label: 'Fehér', css: '#e8e4de' },
  { label: 'Vörös', css: '#d99a5b' },
  { label: 'Szürke / Cirmos', css: '#9aa0a4' },
  { label: 'Krém / Bézs', css: '#ecddc4' },
  { label: 'Barna', css: '#8b5e3c' },
  { label: 'Hamvas', css: '#8fa3b1' },
]

export const STATUS_LABELS: Record<string, string> = {
  available: 'Örökbe fogadható',
  reserved: 'Lefoglalt',
  adopted: 'Örökbefogadva',
  urgent: 'Sürgős',
}

export const SORT_OPTIONS = [
  { value: 'veletlen', label: 'Véletlenszerű' },
  { value: 'legujabb', label: 'Legújabb feltöltés' },
  { value: 'legregibb', label: 'Legrégebbi feltöltés' },
  { value: 'legfiatalabb', label: 'Legfiatalabb' },
  { value: 'legidosebb', label: 'Legidősebb' },
  { value: 'nev', label: 'Név (A–Z)' },
]

export const AGE_GROUPS = ['Kölyök', 'Fiatal', 'Felnőtt', 'Idős']

export const SEX_LABELS: Record<string, string> = {
  hím: 'Hím',
  nőstény: 'Nőstény',
}
