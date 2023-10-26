'use client'

import { useRouter } from 'next/navigation'
import cn from 'classnames'

import { IconCart } from '@ui/icons/IconCart'
import { useCartSummary } from '@stores/hooks/useCartSummary'
import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import { Route } from '@enums/Route'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './UserCartSummary.module.scss'

export function UserCartSummary({ className }: ClassNameProps) {
  const summary = useCartSummary()
  const formattedSummary = formatCurrencyWithThinSpace(summary)

  const router = useRouter()
  const navigateToCart = () => router.push(Route.CART)

  if (summary === 0 || isNaN(summary)) {
    return null
  }

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
