import { ProductsSectionHeader } from './ProductsSectionHeader'
import { ProductsList } from './ProductsList'
import styles from './ProductsSection.module.scss'

export function ProductsSection() {
  return (
    <section className={styles.root}>
      <ProductsSectionHeader />
      <ProductsList />
    </section>
  )
}
