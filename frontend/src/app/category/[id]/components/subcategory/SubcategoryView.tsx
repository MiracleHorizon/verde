import { SubcategoryHeader } from './SubcategoryHeader'
import type { ProductSubcategory } from '@shared/@types/ProductSubcategory.ts'
import styles from './SubcategoryView.module.scss'
import { ProductsGrid } from '@components/ProductsGrid'

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
