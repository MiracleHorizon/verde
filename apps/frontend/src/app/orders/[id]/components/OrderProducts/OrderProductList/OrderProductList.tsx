import { OrderProductItem } from './OrderProductItem'
import type { UserOrder } from '@interfaces/user/UserOrder'
import styles from './OrderProductList.module.scss'

export function OrderProductList({ products }: Pick<UserOrder, 'products'>) {
  return (
    <ul className={styles.root}>
      {products.map(product => (
        <OrderProductItem key={product.id} {...product} />
      ))}
    </ul>
  )
}
