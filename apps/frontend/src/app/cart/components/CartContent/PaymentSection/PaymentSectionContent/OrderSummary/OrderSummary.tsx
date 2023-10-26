'use client'

import { useMemo } from 'react'

import { OrderSummaryItem } from './OrderSummaryItem'
import { useOrderSummary } from '@stores/hooks/useOrderSummary'
import styles from './OrderSummary.module.scss'

export function OrderSummary() {
  const { productsCost, deliveryCost, serviceFee } = useOrderSummary()

  const summary = useMemo(
    () => [
      { title: 'Стоимость продуктов', value: productsCost },
      { title: 'Доставка', value: deliveryCost },
      { title: 'Работа сервиса', value: serviceFee }
    ],
    [deliveryCost, productsCost, serviceFee]
  )

  return (
    <ul className={styles.root}>
      {summary.map(item => (
        <OrderSummaryItem key={item.title} {...item} />
      ))}
    </ul>
  )
}
