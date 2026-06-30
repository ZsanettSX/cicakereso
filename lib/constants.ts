export const HUNGARIAN_COUNTIES = [
  'Budapest', 'Baranya', 'Bács-Kiskun', 'Békés', 'Borsod-Abaúj-Zemplén',
  'Csongrád-Csanád', 'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves',
  'Jász-Nagykun-Szolnok', 'Komárom-Esztergom', 'Nógrád', 'Pest', 'Somogy',
  'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala',
]

export const COLOR_CATEGORIES = [
  { label: 'Fekete', css: '#3c3a39' },
  { label: 'Fehér', css: '#f4f1ec' },
  { label: 'Vörös', css: '#d99a5b' },
  { label: 'Szürke', css: '#9aa0a4' },
  { label: 'Cirmos', css: '#b8956a' },
  { label: 'Tarka', css: '#8a6a4f' },
  { label: 'Foltos', css: '#c4a882' },
  { label: 'Bézs', css: '#ecddc4' },
  { label: 'Tuxedo', css: '#2d2d2d' },
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
