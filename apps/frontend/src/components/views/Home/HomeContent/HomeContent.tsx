import { CategorySection } from './CategorySection'
import type { ProductCategory } from '@interfaces/business/ProductCategory'
import styles from './HomeContent.module.scss'

export function HomeContent({ categories }: Props) {
  return (
    <main className={styles.root}>
      {categories.map(category => (
        <CategorySection key={category.id} {...category} />
      ))}
    </main>
  )
}

interface Props {
  categories: ProductCategory[]
}
