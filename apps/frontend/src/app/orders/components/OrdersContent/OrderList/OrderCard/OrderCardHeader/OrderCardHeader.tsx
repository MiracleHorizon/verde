import { useMemo } from 'react'
import cn from 'classnames'

import { DateFns } from '@libs/DateFns'
import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import type { Order } from '@interfaces/Order'
import styles from './OrderCardHeader.module.scss'

export function OrderCardHeader({ totalCost, createdAt, deliveredAt }: Props) {
  const { title: statusTitle, isDelivered } = useMemo(
    () => getStatus(deliveredAt),
    [deliveredAt]
  )

  return (
    <header className={styles.root}>
      <div className={styles.left}>
        <span className={styles.boldText}>{formatDate(createdAt)}</span>
        <span className={styles.deliveryAddress}>Ул. Пушкина, д. 31/6</span>
      </div>
      <div className={styles.right}>
        <span className={styles.boldText}>
          {formatCurrencyWithThinSpace(totalCost)}
        </span>
        <span
          className={cn(
            styles.status,
            isDelivered ? styles.delivered : styles.payed
          )}
        >
          {statusTitle}
        </span>
      </div>
    </header>
  )
}

type Props = Pick<Order, 'totalCost' | 'createdAt' | 'deliveredAt'>

function formatDate(createdAt: string): string {
  const createdAtDate = new Date(createdAt)
  const orderYear = createdAtDate.getFullYear()
  const currentYear = new Date().getFullYear()
  const createdAtDateFormat = `d MMMM k:mm${
    currentYear !== orderYear ? ', yyyy' : ''
  }`

  return DateFns.format(createdAtDate, createdAtDateFormat)
}

function getStatus(deliveredAt: string) {
  const currentDate = Date.now()
  const deliveredAtDate = new Date(deliveredAt)
  const isDelivered = deliveredAtDate.getTime() - currentDate <= 0

  return {
    title: isDelivered ? 'Доставлен' : 'Оплачен',
    isDelivered
  }
}
