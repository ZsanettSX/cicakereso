/** @type {import('next').NextConfig} */
const config = {
  images: { unoptimized: true },
  // A build során létrejövő SQLite adatbázist becsomagoljuk a szerverless függvényekbe,
  // hogy a cicák megjelenjenek a Vercelen is.
  experimental: {
    outputFileTracingIncludes: {
      '/**/*': ['./prisma/dev.db'],
    },
  },
}

export default config
