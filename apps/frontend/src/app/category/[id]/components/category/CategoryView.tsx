import { CategoryHeader } from './CategoryHeader'
import { CategoryShowcase } from './CategoryShowcase'
import type { ProductCategory } from '@interfaces/business/ProductCategory'
import styles from './CategoryView.module.scss'

export function CategoryView({ title, subcategories }: ProductCategory) {
  return (
    <div className={styles.root}>
      <CategoryHeader title={title} />
      <CategoryShowcase subcategories={subcategories} />
    </div>
  )
}
