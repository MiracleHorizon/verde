import cn from 'classnames'

import { calcTotalProductCost } from '@helpers/calcTotalProductCost'
import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import type { CartProduct } from '@interfaces/business/CartProduct'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './ProductItemPrice.module.scss'

export function ProductItemPrice({
  fullPrice,
  discountPercentage,
  className
}: Props) {
  const totalCost = calcTotalProductCost(fullPrice, discountPercentage)

  const formattedTotalCost = formatCurrencyWithThinSpace(totalCost)
  const formattedFullPrice = formatCurrencyWithThinSpace(fullPrice)

  return (
    <div className={cn(styles.root, className)}>
      {discountPercentage > 0 && (
        <span className={styles.throughFullPrice}>{formattedFullPrice}</span>
      )}
      <span className={styles.price}>{formattedTotalCost}</span>
    </div>
  )
}

type Props = Pick<CartProduct, 'fullPrice' | 'discountPercentage'> &
  ClassNameProps
