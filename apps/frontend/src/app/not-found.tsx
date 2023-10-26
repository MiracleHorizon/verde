import type { Metadata } from 'next'

import { NotFoundView } from '@components/views/NotFound'
import { writePageTitle } from '@helpers/writePageTitle'

export const metadata: Metadata = {
  title: writePageTitle('Страница не найдена')
}

export default function NotFound() {
  return <NotFoundView />
}
