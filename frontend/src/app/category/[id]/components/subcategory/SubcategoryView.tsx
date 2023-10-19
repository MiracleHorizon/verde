import { SubcategoryHeader } from './SubcategoryHeader'
import { ProductsGrid } from '@components/ProductsGrid'
import type { ProductSubcategory } from '@interfaces/ProductSubcategory'
import styles from './SubcategoryView.module.scss'

export function SubcategoryView({
  title,
  categoryId,
  categoryTitle,
  products
}: ProductSubcategory) {
  return (
    <div className={styles.root}>
      <SubcategoryHeader
        title={title}
        categoryId={categoryId}
        categoryTitle={categoryTitle}
      />
      <main className={styles.content}>
        <ProductsGrid products={products} />
      </main>
    </div>
  )
}
