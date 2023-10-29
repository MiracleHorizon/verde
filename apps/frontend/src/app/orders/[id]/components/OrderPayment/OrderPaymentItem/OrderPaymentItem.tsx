import cn from 'classnames'

import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import styles from './OrderPaymentItem.module.scss'

export function OrderPaymentItem({ title, value }: Props) {
  const formattedValue = formatCurrencyWithThinSpace(value)

  return (
    <li
      title={`${title}: ${formattedValue}`}
      className={cn(
        styles.root,
        title === 'Итого' ? styles.totalCost : styles.default
      )}
    >
      <span className={styles.title}>{title}</span>
      <span className={styles.value}>{formattedValue}</span>
    </li>
  )
}

interface Props {
  title: string
  value: number
}
