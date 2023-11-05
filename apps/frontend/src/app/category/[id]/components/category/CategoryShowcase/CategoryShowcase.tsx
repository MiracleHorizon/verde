import { SubcategorySection } from './SubcategorySection'
import type { ProductCategory } from '@interfaces/business/ProductCategory'
import styles from './CategoryShowcase.module.scss'

export function CategoryShowcase({
  subcategories
}: Pick<ProductCategory, 'subcategories'>) {
  return (
    <main className={styles.root}>
      {subcategories.map(subcategory => (
        <SubcategorySection key={subcategory.id} {...subcategory} />
      ))}
    </main>
  )
}
