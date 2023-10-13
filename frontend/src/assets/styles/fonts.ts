import { Inter, Roboto } from 'next/font/google'

export const inter = Inter({
  preload: true,
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500', '700'],
  style: 'normal',
  display: 'swap'
})

export const roboto = Roboto({
  preload: true,
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '700'],
  style: 'normal',
  display: 'swap'
})
