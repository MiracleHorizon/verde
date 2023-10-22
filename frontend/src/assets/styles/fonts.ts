import { Inter, Roboto } from 'next/font/google'

export const inter = Inter({
  preload: false,
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700']
})

export const roboto = Roboto({
  preload: false,
  subsets: ['cyrillic'],
  weight: ['500', '700']
})
