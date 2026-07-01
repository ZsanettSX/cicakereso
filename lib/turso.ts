import { createClient } from '@libsql/client'
import type { Row, InValue } from '@libsql/client'

const rawUrl = process.env.TURSO_DATABASE_URL ?? 'file:./dev.db'
const url = rawUrl.startsWith('libsql://') ? rawUrl.replace('libsql://', 'https://') : rawUrl
export const turso = createClient({ url, authToken: process.env.TURSO_AUTH_TOKEN })

// ---- Types ----
export interface Shelter {
  id: string; slug: string; name: string; logo: string | null;
  description: string | null; address: string | null; county: string | null;
  lat: number | null; lng: number | null; phone: string | null;
  email: string | null; facebook: string | null; website: string | null;
  createdAt: string;
}
export interface Cat {
  id: string; slug: string; name: string; photos: string;
  ageMonths: number | null; ageText: string | null; ageGroup: string | null;
  breed: string | null; breedType: string; color: string | null;
  colorCategory: string | null; coatCss: string | null; sex: string;
  isNeutered: boolean; isVaccinated: boolean; isChipped: boolean;
  traits: string; description: string | null; shelterId: string;
  uploadedAt: string; status: string;
}
export interface CatWithShelter extends Cat { shelter: Shelter }
export interface ShelterWithCatCount extends Shelter { catCount: number }
export interface ShelterWithCats extends Shelter { cats: CatWithShelter[] }
export interface ShelterSelectItem { id: string; name: string }

// ---- Row helpers ----
function s(v: unknown): string { return v == null ? '' : String(v) }
function sn(v: unknown): string | null { return v == null ? null : String(v) }
function nn(v: unknown): number | null { return v == null ? null : Number(v) }
function b(v: unknown): boolean { return v === 1 || v === true || v === '1' || (typeof v === 'bigint' && v === BigInt(1)) }

function rowToShelter(r: Row): Shelter {
  return {
    id: s(r.id), slug: s(r.slug), name: s(r.name), logo: sn(r.logo),
    description: sn(r.description), address: sn(r.address), county: sn(r.county),
    lat: nn(r.lat), lng: nn(r.lng), phone: sn(r.phone), email: sn(r.email),
    facebook: sn(r.facebook), website: sn(r.website), createdAt: s(r.createdAt),
  }
}

function rowToCat(r: Row): Cat {
  return {
    id: s(r.id), slug: s(r.slug), name: s(r.name),
    photos: s(r.photos) || '[]',
    ageMonths: nn(r.ageMonths), ageText: sn(r.ageText), ageGroup: sn(r.ageGroup),
    breed: sn(r.breed), breedType: s(r.breedType) || 'keverék',
    color: sn(r.color), colorCategory: sn(r.colorCategory), coatCss: sn(r.coatCss),
    sex: s(r.sex), isNeutered: b(r.isNeutered), isVaccinated: b(r.isVaccinated), isChipped: b(r.isChipped),
    traits: s(r.traits) || '[]', description: sn(r.description),
    shelterId: s(r.shelterId), uploadedAt: s(r.uploadedAt), status: s(r.status),
  }
}

function rowToCatWithShelter(r: Row): CatWithShelter {
  return {
    ...rowToCat(r),
    shelter: {
      id: s(r.s_id), slug: s(r.s_slug), name: s(r.s_name), logo: sn(r.s_logo),
      description: sn(r.s_description), address: sn(r.s_address), county: sn(r.s_county),
      lat: nn(r.s_lat), lng: nn(r.s_lng), phone: sn(r.s_phone), email: sn(r.s_email),
      facebook: sn(r.s_facebook), website: sn(r.s_website), createdAt: s(r.s_createdAt),
    },
  }
}

// ---- SQL fragments ----
const CAT_COLS = `c.id, c.slug, c.name, c.photos, c.ageMonths, c.ageText, c.ageGroup,
  c.breed, c.breedType, c.color, c.colorCategory, c.coatCss, c.sex,
  c.isNeutered, c.isVaccinated, c.isChipped, c.traits, c.description,
  c.shelterId, c.uploadedAt, c.status`

const SHELTER_ALIAS = `s.id as s_id, s.slug as s_slug, s.name as s_name, s.logo as s_logo,
  s.description as s_description, s.address as s_address, s.county as s_county,
  s.lat as s_lat, s.lng as s_lng, s.phone as s_phone, s.email as s_email,
  s.facebook as s_facebook, s.website as s_website, s.createdAt as s_createdAt`

const JOIN = `FROM Cat c JOIN Shelter s ON c.shelterId = s.id`

// ---- db ----
export const db = {
  cat: {
    async count(filter?: { status?: string; statusNot?: string }): Promise<number> {
      const args: InValue[] = []
      const conds: string[] = []
      if (filter?.status) { conds.push('status = ?'); args.push(filter.status) }
      if (filter?.statusNot) { conds.push('status != ?'); args.push(filter.statusNot) }
      const where = conds.length ? ' WHERE ' + conds.join(' AND ') : ''
      const r = await turso.execute({ sql: `SELECT COUNT(*) FROM Cat${where}`, args })
      return Number(r.rows[0]?.[0] ?? 0)
    },

    async findMany(opts: {
      where?: {
        statusNot?: string; status?: string; name?: string; sex?: string;
        ageGroup?: string; colorCategory?: string[]; breedType?: string[];
        shelterCounty?: string[]; shelterId?: string; idNot?: string;
      }
      orderBy?: string
      take?: number
    } = {}): Promise<CatWithShelter[]> {
      const { where = {}, orderBy = 'c.uploadedAt DESC', take } = opts
      const args: InValue[] = []
      const conds: string[] = []
      if (where.statusNot) { conds.push('c.status != ?'); args.push(where.statusNot) }
      if (where.status) { conds.push('c.status = ?'); args.push(where.status) }
      if (where.name) { conds.push('c.name LIKE ?'); args.push(`%${where.name}%`) }
      if (where.sex) { conds.push('c.sex = ?'); args.push(where.sex) }
      if (where.ageGroup) { conds.push('c.ageGroup = ?'); args.push(where.ageGroup) }
      if (where.shelterId) { conds.push('c.shelterId = ?'); args.push(where.shelterId) }
      if (where.idNot) { conds.push('c.id != ?'); args.push(where.idNot) }
      if (where.colorCategory?.length) {
        conds.push(`c.colorCategory IN (${where.colorCategory.map(() => '?').join(',')})`)
        args.push(...where.colorCategory)
      }
      if (where.breedType?.length) {
        conds.push(`c.breedType IN (${where.breedType.map(() => '?').join(',')})`)
        args.push(...where.breedType)
      }
      if (where.shelterCounty?.length) {
        conds.push(`s.county IN (${where.shelterCounty.map(() => '?').join(',')})`)
        args.push(...where.shelterCounty)
      }
      const w = conds.length ? ' WHERE ' + conds.join(' AND ') : ''
      let sql = `SELECT ${CAT_COLS}, ${SHELTER_ALIAS} ${JOIN}${w} ORDER BY ${orderBy}`
      if (take) { sql += ' LIMIT ?'; args.push(take) }
      const r = await turso.execute({ sql, args })
      return r.rows.map(rowToCatWithShelter)
    },

    async findUnique(by: { id: string } | { slug: string }): Promise<Cat | null> {
      const [col, val] = 'id' in by ? ['id', by.id] : ['slug', by.slug]
      const r = await turso.execute({ sql: `SELECT * FROM Cat WHERE ${col} = ? LIMIT 1`, args: [val] })
      return r.rows[0] ? rowToCat(r.rows[0]) : null
    },

    async findUniqueWithShelter(by: { id: string } | { slug: string }): Promise<CatWithShelter | null> {
      const [col, val] = 'id' in by ? ['c.id', by.id] : ['c.slug', by.slug]
      const r = await turso.execute({ sql: `SELECT ${CAT_COLS}, ${SHELTER_ALIAS} ${JOIN} WHERE ${col} = ? LIMIT 1`, args: [val] })
      return r.rows[0] ? rowToCatWithShelter(r.rows[0]) : null
    },

    async findManyBySlugs(slugs: string[]): Promise<CatWithShelter[]> {
      if (!slugs.length) return []
      const ph = slugs.map(() => '?').join(',')
      const r = await turso.execute({ sql: `SELECT ${CAT_COLS}, ${SHELTER_ALIAS} ${JOIN} WHERE c.slug IN (${ph})`, args: slugs })
      return r.rows.map(rowToCatWithShelter)
    },

    async create(data: {
      id: string; slug: string; name: string; photos: string; ageMonths: number | null;
      ageText: string | null; ageGroup: string | null; breed: string | null; breedType: string;
      color: string | null; colorCategory: string | null; coatCss: string | null; sex: string;
      isNeutered: boolean; isVaccinated: boolean; isChipped: boolean; traits: string;
      description: string | null; shelterId: string; status: string;
    }): Promise<void> {
      await turso.execute({
        sql: `INSERT INTO Cat (id,slug,name,photos,ageMonths,ageText,ageGroup,breed,breedType,color,colorCategory,coatCss,sex,isNeutered,isVaccinated,isChipped,traits,description,shelterId,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        args: [data.id, data.slug, data.name, data.photos, data.ageMonths, data.ageText, data.ageGroup, data.breed, data.breedType, data.color, data.colorCategory, data.coatCss, data.sex, data.isNeutered ? 1 : 0, data.isVaccinated ? 1 : 0, data.isChipped ? 1 : 0, data.traits, data.description, data.shelterId, data.status],
      })
    },

    async update(id: string, data: {
      name: string; photos: string; ageMonths: number | null; ageText: string | null;
      ageGroup: string | null; breed: string | null; breedType: string; color: string | null;
      colorCategory: string | null; coatCss: string | null; sex: string; isNeutered: boolean;
      isVaccinated: boolean; isChipped: boolean; traits: string; description: string | null;
      shelterId: string; status: string;
    }): Promise<void> {
      await turso.execute({
        sql: `UPDATE Cat SET name=?,photos=?,ageMonths=?,ageText=?,ageGroup=?,breed=?,breedType=?,color=?,colorCategory=?,coatCss=?,sex=?,isNeutered=?,isVaccinated=?,isChipped=?,traits=?,description=?,shelterId=?,status=? WHERE id=?`,
        args: [data.name, data.photos, data.ageMonths, data.ageText, data.ageGroup, data.breed, data.breedType, data.color, data.colorCategory, data.coatCss, data.sex, data.isNeutered ? 1 : 0, data.isVaccinated ? 1 : 0, data.isChipped ? 1 : 0, data.traits, data.description, data.shelterId, data.status, id],
      })
    },

    async delete(id: string): Promise<void> {
      await turso.execute({ sql: 'DELETE FROM Cat WHERE id = ?', args: [id] })
    },
  },

  shelter: {
    async count(): Promise<number> {
      const r = await turso.execute('SELECT COUNT(*) FROM Shelter')
      return Number(r.rows[0]?.[0] ?? 0)
    },

    async findMany(opts: { allCats?: boolean } = {}): Promise<ShelterWithCatCount[]> {
      const filter = opts.allCats ? '' : `AND c.status != 'adopted'`
      const r = await turso.execute(`
        SELECT s.id, s.slug, s.name, s.logo, s.description, s.address, s.county,
               s.lat, s.lng, s.phone, s.email, s.facebook, s.website, s.createdAt,
               COUNT(CASE WHEN c.id IS NOT NULL ${filter} THEN 1 END) as catCount
        FROM Shelter s LEFT JOIN Cat c ON c.shelterId = s.id
        GROUP BY s.id ORDER BY s.name ASC`)
      return r.rows.map((row) => ({ ...rowToShelter(row), catCount: Number(row.catCount ?? 0) }))
    },

    async findManyForSelect(): Promise<ShelterSelectItem[]> {
      const r = await turso.execute('SELECT id, name FROM Shelter ORDER BY name ASC')
      return r.rows.map((row) => ({ id: s(row.id), name: s(row.name) }))
    },

    async findUnique(by: { id: string } | { slug: string }): Promise<Shelter | null> {
      const [col, val] = 'id' in by ? ['id', by.id] : ['slug', by.slug]
      const r = await turso.execute({ sql: `SELECT * FROM Shelter WHERE ${col} = ? LIMIT 1`, args: [val] })
      return r.rows[0] ? rowToShelter(r.rows[0]) : null
    },

    async findUniqueWithCats(slug: string): Promise<ShelterWithCats | null> {
      const sr = await turso.execute({ sql: 'SELECT * FROM Shelter WHERE slug = ? LIMIT 1', args: [slug] })
      if (!sr.rows[0]) return null
      const shelter = rowToShelter(sr.rows[0])
      const cr = await turso.execute({
        sql: `SELECT ${CAT_COLS}, ${SHELTER_ALIAS} ${JOIN} WHERE c.shelterId = ? AND c.status != 'adopted' ORDER BY c.uploadedAt DESC`,
        args: [shelter.id],
      })
      return { ...shelter, cats: cr.rows.map(rowToCatWithShelter) }
    },

    async create(data: {
      id: string; slug: string; name: string; logo: string | null; description: string | null;
      address: string | null; county: string | null; lat: number | null; lng: number | null;
      phone: string | null; email: string | null; facebook: string | null; website: string | null;
    }): Promise<void> {
      await turso.execute({
        sql: `INSERT INTO Shelter (id,slug,name,logo,description,address,county,lat,lng,phone,email,facebook,website) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
        args: [data.id, data.slug, data.name, data.logo, data.description, data.address, data.county, data.lat, data.lng, data.phone, data.email, data.facebook, data.website],
      })
    },

    async update(id: string, data: {
      name: string; logo: string | null; description: string | null; address: string | null;
      county: string | null; lat: number | null; lng: number | null; phone: string | null;
      email: string | null; facebook: string | null; website: string | null;
    }): Promise<void> {
      await turso.execute({
        sql: `UPDATE Shelter SET name=?,logo=?,description=?,address=?,county=?,lat=?,lng=?,phone=?,email=?,facebook=?,website=? WHERE id=?`,
        args: [data.name, data.logo, data.description, data.address, data.county, data.lat, data.lng, data.phone, data.email, data.facebook, data.website, id],
      })
    },

    async delete(id: string): Promise<void> {
      await turso.execute({ sql: 'DELETE FROM Shelter WHERE id = ?', args: [id] })
    },
  },
}
