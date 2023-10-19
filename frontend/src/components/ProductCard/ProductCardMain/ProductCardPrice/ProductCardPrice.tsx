import { useMemo } from 'react'
import cn from 'classnames'

import { DigitsHandler } from '@utils/DigitsHandler.ts'
import { ruNumberFormatter } from '@utils/NumberFormatter'
import { getVariantStyles, type Props } from '@components/ProductCard'
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

  const priceClassName = getVariantStyles(styles, variant)

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
    return (
      <span className={cn(styles.price, priceClassName)}>
        {formattedTotalPrice}
      </span>
    )
  }

  return (
    <div className={styles.discountContainer}>
      <span className={cn(styles.price, styles.discountPrice, priceClassName)}>
        {formattedTotalPrice}
      </span>
      <span className={styles.throughFullPrice}>{formattedFullPrice}</span>
    </div>
  )
}
