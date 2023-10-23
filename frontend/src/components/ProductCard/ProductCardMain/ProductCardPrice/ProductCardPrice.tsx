import { useMemo } from 'react'
import cn from 'classnames'

import { DigitsHandler } from '@utils/DigitsHandler'
import { ruNumberFormatter } from '@utils/NumberFormatter'
import { getVariantStyles, type Props } from '@components/ProductCard'
import { calcTotalProductCost } from '@helpers/calcTotalProductCost'
import { setThinSpaceBeforeCurrencySign } from '@helpers/setThinSpaceBeforeCurrencySign'
import styles from './ProductCardPrice.module.scss'

export function ProductCardPrice({
  fullPrice,
  discountPercentage,
  variant
}: Pick<Props, 'fullPrice' | 'discountPercentage' | 'variant'>) {
  const totalCost = useMemo(
    () => calcTotalProductCost(fullPrice, discountPercentage),
    [fullPrice, discountPercentage]
  )

  const priceClassName = getVariantStyles(styles, variant)

  const formattedTotalCost = setThinSpaceBeforeCurrencySign(
    ruNumberFormatter.formatCurrency(totalCost, {
      maximumSignificantDigits: DigitsHandler.getDigitCount(totalCost) + 2
    })
  )
  const formattedFullPrice = setThinSpaceBeforeCurrencySign(
    ruNumberFormatter.formatCurrency(fullPrice, {
      maximumSignificantDigits: DigitsHandler.getDigitCount(fullPrice) + 2
    })
  )

  if (discountPercentage > 0) {
    return (
      <span className={cn(styles.price, priceClassName)}>
        {formattedTotalCost}
      </span>
    )
  }

  return (
    <div className={styles.discountContainer}>
      <span className={cn(styles.price, styles.discountPrice, priceClassName)}>
        {formattedTotalCost}
      </span>
      <span className={styles.throughFullPrice}>{formattedFullPrice}</span>
    </div>
  )
}
