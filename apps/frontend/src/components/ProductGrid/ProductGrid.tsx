import { ProductCard } from '@components/ProductCard'
import type { Product } from '@interfaces/Product'
import styles from './ProductGrid.module.scss'

export function ProductGrid({ products }: Props) {
  return (
    <div className={styles.root}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          variant='default'
          className={styles.card}
          {...product}
        />
      ))}
    </div>
  )
}

interface Props {
  products: Product[]
}
