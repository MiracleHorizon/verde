import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import './globals.scss'

export const metadata: Metadata = {
  title: 'Verde',
  description:
    'Your personal garden store where flowers and greenery meet the convenience of ordering'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
