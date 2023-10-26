import cn from 'classnames'

import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
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
        <span className={styles.cost}>{formatCurrencyWithThinSpace(cost)}</span>
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
