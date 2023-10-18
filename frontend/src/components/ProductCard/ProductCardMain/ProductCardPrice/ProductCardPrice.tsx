import { useMemo } from 'react'
import cn from 'classnames'

import { ProductCardVariant, type Props } from '@components/ProductCard'
import { DigitsHandler } from '@utils/DigitsHandler.ts'
import { ruNumberFormatter } from '@utils/NumberFormatter'
import { calcTotalProductPrice } from '@helpers/calcTotalProductPrice.ts'
import { setThinSpaceBeforeCurrencySign } from '@helpers/setThinSpaceBeforeCurrencySign.ts'
import styles from './ProductCardPrice.module.scss'

export function ProductCardPrice({
  fullPrice,
  discount,
  variant
}: Pick<Props, 'fullPrice' | 'discount' | 'variant'>) {
  const { totalPrice, withDiscount } = useMemo(
    () => calcTotalProductPrice(fullPrice, discount),
    [fullPrice, discount]
  )

  const formattedTotalPrice = setThinSpaceBeforeCurrencySign(
    ruNumberFormatter.formatCurrency(totalPrice, {
      maximumSignificantDigits: DigitsHandler.getDigits(totalPrice).length + 2
    })
  )
  const formattedFullPrice = setThinSpaceBeforeCurrencySign(
    ruNumberFormatter.formatCurrency(fullPrice, {
      maximumSignificantDigits: DigitsHandler.getDigits(fullPrice).length + 2
    })
  )

  if (!withDiscount) {
    return <span className={styles.price}>{formattedTotalPrice}</span>
  }

  return (
    <div className={styles.discountContainer}>
      <span
        className={cn(styles.price, styles.discountPrice, {
          [styles.default]: variant === ProductCardVariant.DEFAULT || !variant,
          [styles.small]: variant === ProductCardVariant.SMALL
        })}
      >
        {formattedTotalPrice}
      </span>
      <span className={styles.throughFullPrice}>{formattedFullPrice}</span>
    </div>
  )
}
