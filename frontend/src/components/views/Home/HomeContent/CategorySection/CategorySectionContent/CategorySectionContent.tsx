import { ProductCard, ProductCardVariant } from '@components/ProductCard'
import type { Product } from '@shared/@types/Product.ts'
import styles from './CategorySectionContent.module.scss'

export function CategorySectionContent({ products }: Props) {
  return (
    <main className={styles.root}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          variant={ProductCardVariant.SMALL}
          {...product}
        />
      ))}
    </main>
  )
}

interface Props {
  products: Product[]
}
