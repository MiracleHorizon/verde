import { ProductGrid } from '@components/ProductGrid'
import { SubcategoryHeader } from './SubcategoryHeader'
import type { ProductSubcategory } from '@interfaces/ProductSubcategory'
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
      <ProductGrid products={products} />
    </section>
  )
}
