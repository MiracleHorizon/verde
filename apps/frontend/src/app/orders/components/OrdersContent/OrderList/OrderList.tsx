import { OrderCard } from './OrderCard'
import type { Order } from '@interfaces/Order'
import styles from './OrderList.module.scss'

export function OrderList({ orders }: Props) {
  return (
    <ul className={styles.root}>
      {orders.map(order => (
        <OrderCard key={order.id} {...order} />
      ))}
    </ul>
  )
}

interface Props {
  orders: Order[]
}
