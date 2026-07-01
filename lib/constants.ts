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

export const PUREBRED_BREEDS = [
  'Abesszin', 'Amerikai bobtail', 'Amerikai göndörszőrű', 'Amerikai rövidszőrű',
  'Amerikai drótszőrű', 'Arab mau', 'Ausztrál mist', 'Balinéz', 'Bengal', 'Birmán',
  'Bombay', 'Brazil rövidszőrű', 'Brit hosszúszőrű', 'Brit rövidszőrű', 'Burmilla',
  'Burmai', 'Ceyloni', 'Chartreux (Karthauzi)', 'Chausie', 'Cornish rex', 'Cymric',
  'Devon rex', 'Don szfinx (Donskoy)', 'Egyiptomi mau', 'Egzotikus rövidszőrű',
  'Európai rövidszőrű', 'Havanna barna', 'Highlander', 'Himalájai', 'Japán bobtail',
  'Kaliforniai pettyes', 'Kanaani', 'Khao Manee', 'Kínai Li Hua', 'Korat',
  'Kuril-szigeti bobtail', 'LaPerm', 'Lykoi', 'Maine Coon', 'Manx', 'Minskin',
  'Napoleon (Minuet)', 'Nebelung', 'Német rex', 'Norvég erdei', 'Ocicat',
  'Ojos Azules', 'Orosz kék', 'Oriental hosszúszőrű', 'Oriental rövidszőrű',
  'Perzsa', 'Peterbald', 'Pixie-bob', 'Ragamuffin', 'Ragdoll', 'Russian Black',
  'Russian Tabby', 'Russian White', 'Savannah', 'Selkirk rex',
  'Selyemmacska (Tiffany/Chantilly)', 'Singapura', 'Skót állófülű (Scottish Straight)',
  'Skót lógófülű (Scottish Fold)', 'Snowshoe', 'Sokoke', 'Somáli', 'Sphynx',
  'Sziámi', 'Szibériai', 'Thai', 'Tonkinéz', 'Toybob', 'Toyger', 'Török angóra',
  'Török van', 'Ukrán levkoy', 'Ural rex', 'York Chocolate',
]

export const SEX_LABELS: Record<string, string> = {
  hím: 'Hím',
  nőstény: 'Nőstény',
}
