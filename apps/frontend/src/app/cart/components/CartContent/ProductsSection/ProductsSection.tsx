import { ProductsSectionHeader } from './ProductsSectionHeader'
import { ProductList } from './ProductList'
import styles from './ProductsSection.module.scss'

export function ProductsSection() {
  return (
    <section className={styles.root}>
      <ProductsSectionHeader />
      <ProductList />
    </section>
  )
}
