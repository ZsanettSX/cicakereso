export const HUNGARIAN_COUNTIES = [
  'Budapest', 'Baranya', 'Bács-Kiskun', 'Békés', 'Borsod-Abaúj-Zemplén',
  'Csongrád-Csanád', 'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves',
  'Jász-Nagykun-Szolnok', 'Komárom-Esztergom', 'Nógrád', 'Pest', 'Somogy',
  'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala',
]

export const COLOR_CATEGORIES = [
  { label: 'Fekete', css: '#2d2d2d' },
  { label: 'Fehér', css: '#e8e4de' },
  { label: 'Szürke', css: '#9aa0a4' },
  { label: 'Kék / Hamvas', css: '#8fa3b1' },
  { label: 'Vörös', css: '#d99a5b' },
  { label: 'Narancssárga', css: '#e0893a' },
  { label: 'Krém / Bézs', css: '#ecddc4' },
  { label: 'Barna', css: '#8b5e3c' },
  { label: 'Csokoládé', css: '#5e3320' },
  { label: 'Cirmos', css: '#b8956a' },
  { label: 'Szürke cirmos', css: '#8c9ba3' },
  { label: 'Vörös cirmos', css: '#c97b45' },
  { label: 'Tarka', css: '#9d7252' },
  { label: 'Háromszínű', css: '#c49a6a' },
  { label: 'Fekete-fehér', css: '#555555' },
  { label: 'Foltos', css: '#c4a882' },
  { label: 'Füstös', css: '#7a8a96' },
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
