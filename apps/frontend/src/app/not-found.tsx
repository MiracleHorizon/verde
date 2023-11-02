import type { Metadata } from 'next'

import { NotFoundView } from '@components/views/NotFound'

export const metadata: Metadata = {
  title: 'Страница не найдена'
}

export default function NotFound() {
  return <NotFoundView />
}
