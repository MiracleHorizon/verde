import { DateFns } from '@libs/DateFns'
import type { Order } from '@interfaces/Order'
import styles from './OrderHeader.module.scss'

export function OrderHeader({
  id,
  createdAt
}: Pick<Order, 'id' | 'createdAt'>) {
  const dateFormat = 'd MMMM yyyy, k:mm'
  const formattedDate = DateFns.format(createdAt, dateFormat)

  return (
    <header className={styles.root}>
      <div title={id} className={styles.idContainer}>
        <span>№{id}</span>
      </div>
      <div title={`Создан ${formattedDate}`} className={styles.dateContainer}>
        <span>Создан {formattedDate}</span>
      </div>
    </header>
  )
}
