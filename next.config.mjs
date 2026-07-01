/** @type {import('next').NextConfig} */
const config = {
  images: { unoptimized: true },
  experimental: {
    outputFileTracingIncludes: {
      '/**/*': ['./prisma/dev.db'],
    },
  },
  async headers() {
    return [
      {
        source: '/((?!_next/static|_next/image|favicon.ico).*)',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
        ],
      },
    ]
  },
}

export default config
