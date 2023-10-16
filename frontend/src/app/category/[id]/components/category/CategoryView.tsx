import { CategoryHeader } from './CategoryHeader'
import type { ProductCategory } from '@shared/@types/ProductCategory.ts'
import styles from './CategoryView.module.scss'

export function CategoryView({ title }: ProductCategory) {
  return (
    <div className={styles.root}>
      <CategoryHeader title={title} />
      <main></main>
    </div>
  )
}
