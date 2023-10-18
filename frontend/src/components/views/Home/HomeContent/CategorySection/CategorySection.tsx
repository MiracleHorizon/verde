import { useMemo } from 'react'

import { CategorySectionHeader } from './CategorySectionHeader'
import { CategorySectionContent } from './CategorySectionContent'
import type { ProductCategory } from '@shared/@types/ProductCategory.ts'
import styles from './CategorySection.module.scss'

const MAX_DISPLAY_PRODUCTS = 20

export function CategorySection({
  id,
  title,
  imagePath,
  subcategories
}: ProductCategory) {
  const products = useMemo(() => {
    if (subcategories.length === 0) {
      return []
    }

    return subcategories
      .map(subcategory => subcategory.products)
      .reduce((acc, products) => acc.concat(products), [])
      .slice(0, MAX_DISPLAY_PRODUCTS)
  }, [subcategories])

  if (products.length === 0) {
    return null
  }

  return (
    <section className={styles.root}>
      <CategorySectionHeader id={id} title={title} imagePath={imagePath} />
      <CategorySectionContent products={products} />
    </section>
  )
}
