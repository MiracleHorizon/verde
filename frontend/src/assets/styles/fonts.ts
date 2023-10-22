import { Inter, Roboto } from 'next/font/google'

export const inter = Inter({
  display: 'swap',
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700']
})

export const roboto = Roboto({
  preload: false,
  display: 'swap',
  subsets: ['cyrillic'],
  weight: ['500', '700']
})
