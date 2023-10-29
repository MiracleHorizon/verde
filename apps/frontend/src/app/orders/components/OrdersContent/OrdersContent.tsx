import { OrderList } from './OrderList'
import type { Order } from '@interfaces/Order'
import styles from './OrdersContent.module.scss'

export function OrdersContent({ orders }: Props) {
  return (
    <main className={styles.root}>
      <article className={styles.titleArticle}>
        <h1 className={styles.title}>Мои заказы</h1>
      </article>
      <OrderList orders={orders} />
    </main>
  )
}

interface Props {
  orders: Order[]
}
