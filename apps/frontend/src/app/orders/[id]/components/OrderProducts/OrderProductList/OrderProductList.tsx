import { OrderProductItem } from './OrderProductItem'
import type { Order } from '@interfaces/Order'
import styles from './OrderProductList.module.scss'

export function OrderProductList({ products }: Pick<Order, 'products'>) {
  return (
    <ul className={styles.root}>
      {products.map(product => (
        <OrderProductItem key={product.id} {...product} />
      ))}
    </ul>
  )
}
