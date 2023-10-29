import { OrderCardHeader } from './OrderCardHeader'
import { OrderCardProductList } from './OrderCardProductList'
import type { Order } from '@interfaces/Order'
import styles from './OrderCard.module.scss'

export function OrderCard({
  totalCost,
  createdAt,
  deliveredAt,
  products
}: Order) {
  return (
    <div className={styles.root}>
      <OrderCardHeader
        totalCost={totalCost}
        createdAt={createdAt}
        deliveredAt={deliveredAt}
      />
      <OrderCardProductList products={products} />
    </div>
  )
}
