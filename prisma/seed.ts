import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.cat.deleteMany()
  await prisma.shelter.deleteMany()

  const mancs = await prisma.shelter.create({
    data: {
      slug: 'mancs-menhely',
      name: 'Mancs Menhely',
      description:
        'A Mancs Menhely 2008 óta segít gazdát találni az utcára került cicáknak. Önkénteseink szeretettel gondozzák a hozzánk kerülő szőrmókokat, amíg meg nem találják végleges otthonukat.',
      address: '1112 Budapest, Cica utca 12.',
      county: 'Pest',
      lat: 47.4979,
      lng: 19.0402,
      phone: '+36 1 234 5678',
      email: 'info@mancsmenhely.hu',
      facebook: 'https://facebook.com/mancsmenhely',
      website: 'https://mancsmenhely.hu',
    },
  })

  const talpacska = await prisma.shelter.create({
    data: {
      slug: 'talpacska-alapitvany',
      name: 'Talpacska Alapítvány',
      description:
        'A szegedi Talpacska Alapítvány a dél-alföldi régió elhagyott macskáit menti. Ivartalanítási programunkkal a túlszaporodás ellen is küzdünk.',
      address: '6720 Szeged, Tappancs tér 3.',
      county: 'Csongrád-Csanád',
      lat: 46.253,
      lng: 20.1414,
      phone: '+36 62 345 678',
      email: 'kapcsolat@talpacska.hu',
      facebook: 'https://facebook.com/talpacskaalapitvany',
      website: 'https://talpacska.hu',
    },
  })

  const cicahaz = await prisma.shelter.create({
    data: {
      slug: 'cicahaz-egyesulet',
      name: 'Cicaház Egyesület',
      description:
        'A debreceni Cicaház Egyesület otthonos környezetben gondozza a rászoruló cicákat. Hisszük, hogy minden macska megérdemel egy szerető családot.',
      address: '4024 Debrecen, Doromboló sor 7.',
      county: 'Hajdú-Bihar',
      lat: 47.5316,
      lng: 21.6273,
      phone: '+36 52 456 789',
      email: 'hello@cicahaz.hu',
      facebook: 'https://facebook.com/cicahazegyesulet',
      website: 'https://cicahaz.hu',
    },
  })

  const cats = [
    {
      slug: 'mazli-ck001',
      name: 'Mázli',
      ageMonths: 24,
      ageText: '2 éves',
      ageGroup: 'Felnőtt',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Vörös cirmos',
      colorCategory: 'Vörös',
      coatCss: '#d99a5b',
      sex: 'hím',
      isNeutered: true,
      isVaccinated: true,
      isChipped: true,
      traits: JSON.stringify(['Játékos', 'Emberbarát', 'Oltott']),
      description:
        'Mázli egy igazi társasági cica, aki imádja az ölelést és a játékot. Más macskákkal is jól kijön, ideális választás családoknak.',
      shelterId: mancs.id,
      status: 'available',
    },
    {
      slug: 'cirmi-ck002',
      name: 'Cirmi',
      ageMonths: 6,
      ageText: '6 hónapos',
      ageGroup: 'Kölyök',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Vörös',
      colorCategory: 'Vörös',
      coatCss: '#d99a5b',
      sex: 'nőstény',
      isNeutered: false,
      isVaccinated: true,
      isChipped: false,
      traits: JSON.stringify(['Eleven', 'Kíváncsi', 'Cuki']),
      description:
        'Cirmi egy aranyos kis kölyök, aki most fedezi fel a világot. Sürgősen keres szerető otthont, mert a menhely megtelt!',
      shelterId: talpacska.id,
      status: 'urgent',
    },
    {
      slug: 'morzsi-ck003',
      name: 'Morzsi',
      ageMonths: 48,
      ageText: '4 éves',
      ageGroup: 'Felnőtt',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Krém',
      colorCategory: 'Bézs',
      coatCss: '#ecddc4',
      sex: 'hím',
      isNeutered: true,
      isVaccinated: true,
      isChipped: true,
      traits: JSON.stringify(['Nyugodt', 'Ölebcica', 'Oltott']),
      description:
        'Morzsi egy higgadt, kiegyensúlyozott kandúr, aki a nyugodt otthont kedveli. Tökéletes társ idősebbeknek vagy egyedülállóknak.',
      shelterId: cicahaz.id,
      status: 'available',
    },
    {
      slug: 'panna-ck004',
      name: 'Panna',
      ageMonths: 12,
      ageText: '1 éves',
      ageGroup: 'Fiatal',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Szürke',
      colorCategory: 'Szürke',
      coatCss: '#9aa0a4',
      sex: 'nőstény',
      isNeutered: true,
      isVaccinated: true,
      isChipped: true,
      traits: JSON.stringify(['Önálló', 'Elegáns', 'Tiszta']),
      description:
        'Panna egy elegáns, önálló kismacska. Szereti a saját kis birodalmát, de esténként szívesen bújik a gazdájához.',
      shelterId: mancs.id,
      status: 'available',
    },
    {
      slug: 'bogyo-ck005',
      name: 'Bogyó',
      ageMonths: 96,
      ageText: '8 éves',
      ageGroup: 'Idős',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Fekete',
      colorCategory: 'Fekete',
      coatCss: '#3c3a39',
      sex: 'hím',
      isNeutered: true,
      isVaccinated: true,
      isChipped: true,
      traits: JSON.stringify(['Bölcs', 'Ragaszkodó', 'Türelmes']),
      description:
        'Bogyó egy idős úriember, aki csendes, szerető otthont keres élete hátralévő részére. Hálás minden simogatásért.',
      shelterId: talpacska.id,
      status: 'reserved',
    },
    {
      slug: 'luna-ck006',
      name: 'Luna',
      ageMonths: 36,
      ageText: '3 éves',
      ageGroup: 'Felnőtt',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Tarka',
      colorCategory: 'Tarka',
      coatCss: '#8a6a4f',
      sex: 'nőstény',
      isNeutered: true,
      isVaccinated: true,
      isChipped: true,
      traits: JSON.stringify(['Játékos', 'Beszédes', 'Emberbarát']),
      description:
        'Luna egy beszédes, vidám cica, aki imád kommunikálni a gazdájával. Mindig tudni fogod, mit szeretne!',
      shelterId: cicahaz.id,
      status: 'available',
    },
    {
      slug: 'tappancs-ck007',
      name: 'Tappancs',
      ageMonths: 5,
      ageText: '5 hónapos',
      ageGroup: 'Kölyök',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Vörös',
      colorCategory: 'Vörös',
      coatCss: '#d99a5b',
      sex: 'hím',
      isNeutered: false,
      isVaccinated: true,
      isChipped: false,
      traits: JSON.stringify(['Vagány', 'Energikus', 'Cuki']),
      description:
        'Tappancs egy energiabomba kis kandúr, aki egész nap játszani szeretne. Aktív családot keres, ahol kiélheti a kalandvágyát.',
      shelterId: mancs.id,
      status: 'available',
    },
    {
      slug: 'szotyi-ck008',
      name: 'Szotyi',
      ageMonths: 24,
      ageText: '2 éves',
      ageGroup: 'Felnőtt',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Krém',
      colorCategory: 'Bézs',
      coatCss: '#ecddc4',
      sex: 'nőstény',
      isNeutered: true,
      isVaccinated: true,
      isChipped: true,
      traits: JSON.stringify(['Kedves', 'Csendes', 'Oltott']),
      description:
        'Szotyi egy gyengéd lelkű cica, aki a meghitt pillanatokat kedveli. Türelmes, így gyermekes családoknak is ajánljuk.',
      shelterId: talpacska.id,
      status: 'available',
    },
    {
      slug: 'hopihe-ck009',
      name: 'Hópihe',
      ageMonths: 72,
      ageText: '6 éves',
      ageGroup: 'Felnőtt',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Fehér',
      colorCategory: 'Fehér',
      coatCss: '#f4f1ec',
      sex: 'nőstény',
      isNeutered: true,
      isVaccinated: true,
      isChipped: true,
      traits: JSON.stringify(['Méltóságteljes', 'Nyugodt', 'Ragaszkodó']),
      description:
        'Hópihe egy gyönyörű, hófehér cica, aki méltóságteljesen viseli korát. Csendes otthont keres, ahol kényeztetik.',
      shelterId: cicahaz.id,
      status: 'available',
    },
    {
      slug: 'tigris-ck010',
      name: 'Tigris',
      ageMonths: 36,
      ageText: '3 éves',
      ageGroup: 'Felnőtt',
      breed: 'Európai rövidszőrű',
      breedType: 'keverék',
      color: 'Cirmos',
      colorCategory: 'Cirmos',
      coatCss: '#b8956a',
      sex: 'hím',
      isNeutered: true,
      isVaccinated: true,
      isChipped: true,
      traits: JSON.stringify(['Bátor', 'Hűséges', 'Emberbarát']),
      description:
        'Tigris egy bátor, hűséges kandúr, aki igazi társa lesz gazdájának. Imádja a kifutót és a vadászatot a játékokra.',
      shelterId: mancs.id,
      status: 'available',
    },
  ]

  for (const cat of cats) {
    await prisma.cat.create({ data: { ...cat, photos: JSON.stringify([]) } })
  }

  console.log('Seed kész: 3 menhely, 10 cica létrehozva.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
