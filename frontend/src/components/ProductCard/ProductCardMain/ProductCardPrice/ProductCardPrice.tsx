import { useMemo } from 'react'
import cn from 'classnames'

import { calcTotalProductPrice } from '@helpers/calcTotalProductPrice.ts'
import type { Props } from '@components/ProductCard'
import styles from './ProductCardPrice.module.scss'

export function ProductCardPrice({
  fullPrice,
  discount
}: Pick<Props, 'fullPrice' | 'discount'>) {
  const { totalPrice, withDiscount } = useMemo(
    () => calcTotalProductPrice(fullPrice, discount),
    [fullPrice, discount]
  )

  return (
    <>
      {withDiscount ? (
        <div className={styles.discountContainer}>
          <span className={cn(styles.price, styles.discountPrice)}>
            {totalPrice}
          </span>
          <span className={styles.throughFullPrice}>{fullPrice}</span>
        </div>
      ) : (
        <span className={styles.price}>{totalPrice}</span>
      )}
    </>
  )
}
