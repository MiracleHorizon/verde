import { ProductCard } from '@components/ProductCard'
import type { Product } from '@interfaces/business/Product'
import styles from './CategorySectionContent.module.scss'

export function CategorySectionContent({ products }: Props) {
  return (
    <main className={styles.root}>
      {products.map(product => (
        <ProductCard key={product.id} variant='small' {...product} />
      ))}
    </main>
  )
}

interface Props {
  products: Product[]
}
