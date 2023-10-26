import { ruNumberFormatter } from '@utils/NumberFormatter'
import { DigitsHandler } from '@utils/DigitsHandler'
import { setThinSpaceBeforeCurrencySign } from '@helpers/setThinSpaceBeforeCurrencySign'
import styles from './OrderSummaryItem.module.scss'

export function OrderSummaryItem({ title, value }: Props) {
  const formattedValue = setThinSpaceBeforeCurrencySign(
    ruNumberFormatter.formatCurrency(value, {
      maximumSignificantDigits: DigitsHandler.getDigitCount(value) + 2
    })
  )

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
