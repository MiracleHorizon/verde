'use client'

import { useRouter } from 'next/navigation'
import cn from 'classnames'

import { IconCart } from '@ui/icons/IconCart'
import { useCartSummary } from '@stores/hooks/useCartSummary'
import { DigitsHandler } from '@utils/DigitsHandler'
import { ruNumberFormatter } from '@utils/NumberFormatter'
import { setThinSpaceBeforeCurrencySign } from '@helpers/setThinSpaceBeforeCurrencySign'
import { Route } from '@enums/Route'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './UserCartSummary.module.scss'

export function UserCartSummary({ className }: ClassNameProps) {
  const router = useRouter()
  const summary = useCartSummary()

  const formattedSummary = setThinSpaceBeforeCurrencySign(
    ruNumberFormatter.formatCurrency(summary, {
      maximumSignificantDigits: DigitsHandler.getDigitCount(summary) + 2
    })
  )

  const navigateToCart = () => router.push(Route.CART)

  return (
    <button
      title={`Общая стоимость: ${formattedSummary}`}
      className={cn(styles.root, className)}
      onClick={navigateToCart}
    >
      <IconCart className={styles.icon} />
      <span className={styles.value}>{formattedSummary}</span>
    </button>
  )
}
