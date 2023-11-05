import { useMemo } from 'react'

import { OrderPaymentItem } from './OrderPaymentItem'
import type { UserOrder } from '@interfaces/user/UserOrder'
import styles from './OrderPayment.module.scss'

export function OrderPayment({
  totalCost,
  productsCost,
  deliveryCost,
  serviceFee
}: Pick<
  UserOrder,
  'totalCost' | 'productsCost' | 'deliveryCost' | 'serviceFee'
>) {
  const items = useMemo(
    () => [
      { title: 'Стоимость товаров', value: productsCost },
      { title: 'Стоимость доставки', value: deliveryCost },
      { title: 'Сервисный сбор', value: serviceFee },
      { title: 'Итого', value: totalCost }
    ],
    [productsCost, deliveryCost, serviceFee, totalCost]
  )

  return (
    <section>
      <article>
        <h4 className={styles.title}>Оплата</h4>
      </article>
      <ul className={styles.list}>
        {items.map(item => (
          <OrderPaymentItem key={item.title} {...item} />
        ))}
      </ul>
    </section>
  )
}
