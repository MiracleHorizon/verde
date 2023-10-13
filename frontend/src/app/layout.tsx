import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { APP_DESCRIPTION, APP_KEYWORDS, APP_TITLE } from '@shared/const/seo.ts'
import { inter } from '@styles/fonts'
import './globals.scss'

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  robots: {
    index: true,
    follow: true
  },
  viewport: {
    initialScale: 1,
    width: 'device-width'
  },
  openGraph: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    type: 'website'
  },
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
