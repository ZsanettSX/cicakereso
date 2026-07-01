'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import fs from 'node:fs/promises'
import path from 'node:path'
import { db } from './turso'
import { slugify, ageGroupFromMonths, ageTextFromMonths } from './utils'
import { COLOR_CATEGORIES } from './constants'

async function saveFile(file: File, folder: 'cats' | 'shelters'): Promise<string> {
  if (process.env.CLOUDINARY_CLOUD_NAME) {
    const { uploadImage } = await import('./cloudinary')
    return uploadImage(file, folder)
  }
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const uploadDir = path.join(process.cwd(), 'public', 'uploads')
  await fs.mkdir(uploadDir, { recursive: true })
  const filename = `${Date.now()}-${file.name.replace(/[^a-z0-9.]/gi, '_')}`
  await fs.writeFile(path.join(uploadDir, filename), buffer)
  return `/uploads/${filename}`
}

async function savePhotos(formData: FormData): Promise<string[]> {
  const photoFiles = formData.getAll('photos') as File[]
  const photoPaths: string[] = []
  for (const file of photoFiles) {
    if (file && typeof file === 'object' && file.size > 0) {
      photoPaths.push(await saveFile(file, 'cats'))
    }
  }
  return photoPaths
}

function parseTraitsInput(raw: string): string[] {
  return raw.split(',').map((t) => t.trim()).filter(Boolean)
}

function newId(): string {
  return crypto.randomUUID().replace(/-/g, '')
}

export async function createCat(formData: FormData): Promise<void> {
  const name = String(formData.get('name') ?? '').trim()
  const shelterId = String(formData.get('shelterId') ?? '')
  const sex = String(formData.get('sex') ?? 'hím')
  const ageMonthsRaw = String(formData.get('ageMonths') ?? '').trim()
  const ageMonths = ageMonthsRaw ? parseInt(ageMonthsRaw, 10) : null
  const ageText = ageMonths != null ? ageTextFromMonths(ageMonths) : null
  const breedType = String(formData.get('breedType') ?? 'keverék')
  const breed = breedType === 'fajtiszta' ? (String(formData.get('breed') ?? '').trim() || null) : null
  const colorCategory = String(formData.get('colorCategory') ?? '').trim() || null
  const color = colorCategory
  const coatCss = COLOR_CATEGORIES.find(c => c.label === colorCategory)?.css ?? null
  const isNeutered = formData.get('isNeutered') === 'on'
  const isVaccinated = formData.get('isVaccinated') === 'on'
  const isChipped = formData.get('isChipped') === 'on'
  const traits = parseTraitsInput(String(formData.get('traits') ?? ''))
  const description = String(formData.get('description') ?? '').trim() || null
  const status = String(formData.get('status') ?? 'available')
  const ageGroup = ageMonths != null ? ageGroupFromMonths(ageMonths) : null
  const photoPaths = await savePhotos(formData)
  const slug = `${slugify(name)}-${Math.random().toString(36).slice(2, 7)}`

  await db.cat.create({
    id: newId(), slug, name, photos: JSON.stringify(photoPaths),
    ageMonths, ageText, ageGroup, breed, breedType, color, colorCategory, coatCss,
    sex, isNeutered, isVaccinated, isChipped, traits: JSON.stringify(traits),
    description, shelterId, status,
  })

  revalidatePath('/cicak')
  revalidatePath('/')
  revalidatePath('/admin/cicak')
  redirect('/admin/cicak')
}

export async function updateCat(id: string, formData: FormData): Promise<void> {
  const existing = await db.cat.findUnique({ id })
  if (!existing) redirect('/admin/cicak')

  const name = String(formData.get('name') ?? '').trim()
  const shelterId = String(formData.get('shelterId') ?? '')
  const sex = String(formData.get('sex') ?? 'hím')
  const ageMonthsRaw = String(formData.get('ageMonths') ?? '').trim()
  const ageMonths = ageMonthsRaw ? parseInt(ageMonthsRaw, 10) : null
  const ageText = ageMonths != null ? ageTextFromMonths(ageMonths) : null
  const breedType = String(formData.get('breedType') ?? 'keverék')
  const breed = breedType === 'fajtiszta' ? (String(formData.get('breed') ?? '').trim() || null) : null
  const colorCategory = String(formData.get('colorCategory') ?? '').trim() || null
  const color = colorCategory
  const coatCss = COLOR_CATEGORIES.find(c => c.label === colorCategory)?.css ?? null
  const isNeutered = formData.get('isNeutered') === 'on'
  const isVaccinated = formData.get('isVaccinated') === 'on'
  const isChipped = formData.get('isChipped') === 'on'
  const traits = parseTraitsInput(String(formData.get('traits') ?? ''))
  const description = String(formData.get('description') ?? '').trim() || null
  const status = String(formData.get('status') ?? 'available')
  const ageGroup = ageMonths != null ? ageGroupFromMonths(ageMonths) : null
  const keptPhotos = formData.getAll('existingPhotos').map(String).filter(Boolean)
  const newPhotos = await savePhotos(formData)
  const photos = [...keptPhotos, ...newPhotos]

  await db.cat.update(id, {
    name, photos: JSON.stringify(photos), ageMonths, ageText, ageGroup,
    breed, breedType, color, colorCategory, coatCss, sex,
    isNeutered, isVaccinated, isChipped, traits: JSON.stringify(traits),
    description, shelterId, status,
  })

  revalidatePath('/cicak')
  revalidatePath('/')
  revalidatePath('/admin/cicak')
  redirect('/admin/cicak')
}

export async function deleteCat(formData: FormData): Promise<void> {
  const id = String(formData.get('id') ?? '')
  if (id) await db.cat.delete(id)
  revalidatePath('/cicak')
  revalidatePath('/')
  revalidatePath('/admin/cicak')
}

export async function createShelter(formData: FormData): Promise<void> {
  const name = String(formData.get('name') ?? '').trim()
  const county = String(formData.get('county') ?? '').trim() || null
  const address = String(formData.get('address') ?? '').trim() || null
  const phone = String(formData.get('phone') ?? '').trim() || null
  const email = String(formData.get('email') ?? '').trim() || null
  const facebook = String(formData.get('facebook') ?? '').trim() || null
  const website = String(formData.get('website') ?? '').trim() || null
  const latRaw = String(formData.get('lat') ?? '').trim()
  const lngRaw = String(formData.get('lng') ?? '').trim()
  const lat = latRaw ? parseFloat(latRaw) : null
  const lng = lngRaw ? parseFloat(lngRaw) : null
  const description = String(formData.get('description') ?? '').trim() || null

  const logoFiles = formData.getAll('logo') as File[]
  let logo: string | null = null
  for (const file of logoFiles) {
    if (file && typeof file === 'object' && file.size > 0) {
      logo = await saveFile(file, 'shelters')
    }
  }

  const slug = `${slugify(name)}-${Math.random().toString(36).slice(2, 6)}`
  await db.shelter.create({ id: newId(), slug, name, county, address, phone, email, facebook, website, lat, lng, description, logo })

  revalidatePath('/menhelyek')
  revalidatePath('/admin/menhelyek')
  redirect('/admin/menhelyek')
}

export async function updateShelter(id: string, formData: FormData): Promise<void> {
  const existing = await db.shelter.findUnique({ id })
  if (!existing) redirect('/admin/menhelyek')

  const name = String(formData.get('name') ?? '').trim()
  const county = String(formData.get('county') ?? '').trim() || null
  const address = String(formData.get('address') ?? '').trim() || null
  const phone = String(formData.get('phone') ?? '').trim() || null
  const email = String(formData.get('email') ?? '').trim() || null
  const facebook = String(formData.get('facebook') ?? '').trim() || null
  const website = String(formData.get('website') ?? '').trim() || null
  const latRaw = String(formData.get('lat') ?? '').trim()
  const lngRaw = String(formData.get('lng') ?? '').trim()
  const lat = latRaw ? parseFloat(latRaw) : null
  const lng = lngRaw ? parseFloat(lngRaw) : null
  const description = String(formData.get('description') ?? '').trim() || null

  let logo = existing.logo
  const logoFiles = formData.getAll('logo') as File[]
  for (const file of logoFiles) {
    if (file && typeof file === 'object' && file.size > 0) {
      logo = await saveFile(file, 'shelters')
    }
  }

  await db.shelter.update(id, { name, logo, county, address, phone, email, facebook, website, lat, lng, description })

  revalidatePath('/menhelyek')
  revalidatePath('/admin/menhelyek')
  redirect('/admin/menhelyek')
}

export async function deleteShelter(formData: FormData): Promise<void> {
  const id = String(formData.get('id') ?? '')
  if (id) {
    const cats = await db.cat.findMany({ where: { shelterId: id }, take: 1 })
    if (cats.length === 0) await db.shelter.delete(id)
  }
  revalidatePath('/menhelyek')
  revalidatePath('/admin/menhelyek')
}
