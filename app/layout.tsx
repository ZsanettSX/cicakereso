import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'CicaKereső — Cica-örökbefogadás Magyarországon',
  description: 'Böngéssz Magyarország legnagyobb örökbefogadható cica-adatbázisában. Menhelyi cicák, szűrők kor, szín, fajta és helyszín szerint.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
