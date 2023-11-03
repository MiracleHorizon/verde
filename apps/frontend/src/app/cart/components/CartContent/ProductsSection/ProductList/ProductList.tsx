import { ProductItem } from './ProductItem'
import { useCartStore } from '@stores/cart'
import styles from './ProductList.module.scss'

export function ProductList() {
  const products = useCartStore(state => state.products)

  return (
    <ul className={styles.root}>
      {products.map(product => (
        <ProductItem key={product.id} {...product} />
      ))}
    </ul>
  )
}
