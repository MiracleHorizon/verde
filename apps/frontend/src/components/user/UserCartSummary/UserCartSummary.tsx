'use client'

import { usePathname, useRouter } from 'next/navigation'
import cn from 'classnames'

import { Button } from '@ui/Button'
import { IconCart } from '@ui/icons/IconCart'
import { useCartSummary } from '@stores/hooks/useCartSummary'
import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import { Route } from '@enums/Route'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './UserCartSummary.module.scss'

export function UserCartSummary({ className }: ClassNameProps) {
  const summary = useCartSummary()
  const formattedSummary = formatCurrencyWithThinSpace(summary)

  const pathname = usePathname()
  const router = useRouter()

  const navigateToCart = () => router.push(Route.CART)

  if (summary === 0 || isNaN(summary) || pathname === Route.CART) {
    return null
  }

  return (
    <Button
      variant='primary'
      title={formattedSummary}
      titleAttribute={`Общая стоимость: ${formattedSummary}`}
      leadIcon={<IconCart className={styles.icon} />}
      className={cn(styles.root, className)}
      onClick={navigateToCart}
    />
  )
}
