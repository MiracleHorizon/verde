import Link from 'next/link'

import { OrderCardHeader } from './OrderCardHeader'
import { OrderCardProductList } from './OrderCardProductList'
import { getOrderRoute } from '@helpers/getOrderRoute'
import type { Order } from '@interfaces/Order'
import styles from './OrderCard.module.scss'

export function OrderCard({
  id,
  totalCost,
  createdAt,
  deliveredAt,
  products
}: Order) {
  return (
    <Link href={getOrderRoute(id)} className={styles.root}>
      <OrderCardHeader
        totalCost={totalCost}
        createdAt={createdAt}
        deliveredAt={deliveredAt}
      />
      <OrderCardProductList products={products} />
    </Link>
  )
}
