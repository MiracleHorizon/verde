import { ProductCard } from '@components/ProductCard'
import type { Product } from '@shared/@types/Product.ts'
import styles from './ProductsGrid.module.scss'

export function ProductsGrid({ products }: Props) {
  return (
    <div className={styles.root}>
      {products.map(product => (
        <ProductCard key={product.id} className={styles.card} {...product} />
      ))}
    </div>
  )
}

interface Props {
  products: Product[]
}
