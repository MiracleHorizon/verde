import cn from 'classnames'

import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import { getVariantStyles, type Props } from '@components/ProductCard'
import { calcTotalProductCost } from '@helpers/calcTotalProductCost'
import styles from './ProductCardPrice.module.scss'

export function ProductCardPrice({
  fullPrice,
  discountPercentage,
  variant
}: Pick<Props, 'fullPrice' | 'discountPercentage' | 'variant'>) {
  const totalCost = calcTotalProductCost(fullPrice, discountPercentage)
  const priceClassName = getVariantStyles(styles, variant)

  const formattedTotalCost = formatCurrencyWithThinSpace(totalCost)
  const formattedFullPrice = formatCurrencyWithThinSpace(fullPrice)

  if (!(discountPercentage > 0)) {
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
