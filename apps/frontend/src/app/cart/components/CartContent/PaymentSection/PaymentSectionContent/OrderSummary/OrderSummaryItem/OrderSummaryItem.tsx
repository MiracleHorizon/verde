import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import styles from './OrderSummaryItem.module.scss'

export function OrderSummaryItem({ title, value }: Props) {
  const formattedValue = formatCurrencyWithThinSpace(value)

  return (
    <li className={styles.root}>
      <span>{title}</span>
      <span>{formattedValue}</span>
    </li>
  )
}

interface Props {
  title: string
  value: number
}
