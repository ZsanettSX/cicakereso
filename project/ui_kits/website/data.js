// CicaKereső UI-kit demo data. Sets window.CK_DATA.
// Cat photos reuse the brand mascot with subtle CSS filters to suggest variety
// (the kit has no real photography yet — swap in real photos when available).
window.CK_DATA = {
  cats: [
    { id:'mazli',  name:'Mázli',  age:'2 éves',     ageGroup:'Felnőtt', sex:'kandúr',  breed:'Európai rövidszőrű', coat:'Vörös cirmos', coatColor:'var(--cat-orange)', city:'Budapest', shelter:'Mancs Menhely', status:'available', filter:'none', traits:['Játékos','Emberbarát','Oltott'] },
    { id:'cirmi',  name:'Cirmi',  age:'6 hónapos',  ageGroup:'Kölyök',  sex:'nőstény', breed:'Cirmos',             coat:'Vörös',        coatColor:'var(--cat-orange)', city:'Szeged',   shelter:'Talpacska Alapítvány', status:'urgent', filter:'brightness(1.08) saturate(1.1)', traits:['Bátor','Kíváncsi'] },
    { id:'morzsi', name:'Morzsi', age:'4 éves',     ageGroup:'Felnőtt', sex:'kandúr',  breed:'Házi macska',        coat:'Krém',         coatColor:'var(--cat-cream)',  city:'Debrecen', shelter:'Cicaház Egyesület', status:'available', filter:'saturate(0.6) brightness(1.12)', traits:['Nyugodt','Ölbe bújós'] },
    { id:'panna',  name:'Panna',  age:'1 éves',     ageGroup:'Fiatal',  sex:'nőstény', breed:'Európai rövidszőrű', coat:'Szürke',       coatColor:'var(--cat-grey)',   city:'Győr',     shelter:'Mancs Menhely', status:'available', filter:'grayscale(0.55) brightness(1.02)', traits:['Független','Okos'] },
    { id:'bogyo',  name:'Bogyó',  age:'8 éves',     ageGroup:'Idős',    sex:'kandúr',  breed:'Házi macska',        coat:'Fekete',       coatColor:'var(--cat-black)',  city:'Pécs',     shelter:'Talpacska Alapítvány', status:'reserved', filter:'grayscale(0.85) brightness(0.7)', traits:['Higgadt','Türelmes'] },
    { id:'luna',   name:'Luna',   age:'3 éves',     ageGroup:'Felnőtt', sex:'nőstény', breed:'Teknőcfoltos',       coat:'Teknős',       coatColor:'var(--cat-tortie)', city:'Budapest', shelter:'Cicaház Egyesület', status:'available', filter:'sepia(0.3) saturate(1.2)', traits:['Szeretetteljes','Beszédes'] },
    { id:'tappancs',name:'Tappancs',age:'5 hónapos',ageGroup:'Kölyök', sex:'kandúr',  breed:'Cirmos',             coat:'Vörös',        coatColor:'var(--cat-orange)', city:'Miskolc',  shelter:'Mancs Menhely', status:'available', filter:'brightness(1.05) hue-rotate(-6deg)', traits:['Pajkos','Energikus'] },
    { id:'szotyi', name:'Szotyi', age:'2 éves',     ageGroup:'Felnőtt', sex:'nőstény', breed:'Házi macska',        coat:'Krém',         coatColor:'var(--cat-cream)',  city:'Szeged',   shelter:'Talpacska Alapítvány', status:'available', filter:'saturate(0.7) brightness(1.15)', traits:['Csendes','Óvatos'] },
  ],
  shelters: [
    { id:'mancs', name:'Mancs Menhely', city:'Budapest', cats:34, since:2009, blurb:'Belvárosi cicamenhely, ahol minden lakó orvosi ellenőrzésen esik át és ideiglenes befogadóknál nevelkedik.' },
    { id:'talpacska', name:'Talpacska Alapítvány', city:'Szeged', cats:21, since:2014, blurb:'Önkéntes alapú alapítvány, amely a Dél-Alföld elhagyott cicáit menti és gondozza.' },
    { id:'cicahaz', name:'Cicaház Egyesület', city:'Debrecen', cats:18, since:2011, blurb:'Idős és speciális igényű cicák szakszerű ellátására specializálódott egyesület.' },
  ],
  services: [
    { id:'kozmetika', label:'Kozmetika', icon:'scissors', count:48 },
    { id:'panzio',    label:'Panzió',    icon:'house',    count:26 },
    { id:'tenyeszto', label:'Tenyésztők', icon:'award',   count:31 },
    { id:'orvos',     label:'Állatorvos', icon:'stethoscope', count:64 },
  ],
  coats: [
    ['Vörös','var(--cat-orange)'],['Krém','var(--cat-cream)'],['Szürke','var(--cat-grey)'],
    ['Fekete','var(--cat-black)'],['Fehér','var(--cat-white)'],['Teknős','var(--cat-tortie)'],
  ],
};
