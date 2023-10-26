import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import styles from './OrderSummaryItem.module.scss'

export function OrderSummaryItem({ title, value }: Props) {
  return (
    <li className={styles.root}>
      <span>{title}</span>
      <span>{formatCurrencyWithThinSpace(value)}</span>
    </li>
  )
}

interface Props {
  title: string
  value: number
}
