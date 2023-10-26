import cn from 'classnames'

import { ruNumberFormatter } from '@utils/NumberFormatter'
import { DigitsHandler } from '@utils/DigitsHandler'
import { setThinSpaceBeforeCurrencySign } from '@helpers/setThinSpaceBeforeCurrencySign'
import type { ClassNameProps } from '@interfaces/ClassNameProps.ts'
import styles from './ButtonPay.module.scss'

export function ButtonPay({
  title,
  cost,
  isDisabled,
  onClick,
  className
}: Props) {
  const withCost = typeof cost !== 'undefined'

  return (
    <button
      title={title}
      className={cn(
        styles.root,
        {
          [styles.withoutCost]: !withCost,
          disabled: isDisabled
        },
        className
      )}
      onClick={onClick}
    >
      <span className={styles.title}>{title}</span>
      {withCost && (
        <span className={styles.cost}>
          {setThinSpaceBeforeCurrencySign(
            ruNumberFormatter.formatCurrency(cost, {
              maximumSignificantDigits: DigitsHandler.getDigitCount(cost) + 2
            })
          )}
        </span>
      )}
    </button>
  )
}

interface Props extends ClassNameProps {
  title: string
  cost?: number
  isDisabled?: boolean
  onClick?: VoidFunction
}
