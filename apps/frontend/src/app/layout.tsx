import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { ClientSide } from '@components/ClientSide'
import { APP_DESCRIPTION, APP_KEYWORDS, APP_TITLE } from '@constants/seo'
import { inter } from '@styles/fonts'
import './globals.scss'

export const metadata: Metadata = {
  title: {
    default: APP_TITLE,
    template: `%s | ${APP_TITLE}`
  },
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: APP_TITLE,
    description: APP_DESCRIPTION,
    type: 'website'
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    other: [
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        url: '/favicon-16x16.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        url: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        sizes: '192x192',
        type: 'image/png',
        url: '/android-chrome-192x192.png'
      },
      {
        rel: 'icon',
        sizes: '512x512',
        type: 'image/png',
        url: '/android-chrome-512x512.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-touch-icon.png'
      }
    ]
  }
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div id='root'>{children}</div>

        <ClientSide />
      </body>
    </html>
  )
}
