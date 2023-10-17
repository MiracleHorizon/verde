import { ProductsGrid } from '@components/ProductsGrid'
import { SubcategoryHeader } from './SubcategoryHeader'
import type { ProductSubcategory } from '@shared/@types/ProductSubcategory.ts'
import styles from './SubcategorySection.module.scss'

export function SubcategorySection({
  id,
  title,
  products
}: ProductSubcategory) {
  if (products.length === 0) {
    return null
  }

  return (
    <section className={styles.root}>
      <SubcategoryHeader id={id} title={title} />
      <ProductsGrid products={products} />
    </section>
  )
}
