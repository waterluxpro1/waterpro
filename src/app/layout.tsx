import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import type { ReactNode } from 'react'

import './globals.css'
import 'swiper/css'
import { headers } from 'next/headers'

const manrope = Manrope({ subsets: ['cyrillic'] })

export const generateMetadata = (): Metadata => {

  return {
    title: 'WaterPRO',
    description: 'Water purification reverce osmosis',
    openGraph: {
      title: 'WaterPRO',
      url: headers().get('referer') ? headers().get('referer')! : 'https://www.waterpro.ee'
    }
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className="meta">
          Water Pro, water purification reverce osmosis, pure pro, вода
        </div>
        {children}
      </body>
    </html>
  )
}
