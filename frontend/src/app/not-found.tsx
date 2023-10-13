import type { Metadata } from 'next'

import { NotFoundView } from '@components/views/NotFound'
import { SearchEngineOptimizer } from '@utils/SearchEngineOptimizer'

const searchEngineOptimizer = new SearchEngineOptimizer({
  title: 'Страница не найдена'
})
const basicMedata = searchEngineOptimizer.getBasicMetaData()
export const metadata: Metadata = {
  ...basicMedata
}

export default function NotFound() {
  return <NotFoundView />
}
