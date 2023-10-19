import dynamic from 'next/dynamic'

import { EmptyShowcase } from './EmptyShowcase'
import type { ProductCategory } from '@interfaces/ProductCategory'

const HomeContent = dynamic(() =>
  import('./HomeContent').then(mod => mod.HomeContent)
)

export function HomeView({ categories }: Props) {
  if (categories.length === 0) {
    return <EmptyShowcase />
  }

  return <HomeContent categories={categories} />
}

interface Props {
  categories: ProductCategory[]
}
