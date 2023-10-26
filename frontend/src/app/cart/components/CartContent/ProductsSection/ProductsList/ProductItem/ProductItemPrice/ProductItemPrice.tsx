import cn from 'classnames'

import { DigitsHandler } from '@utils/DigitsHandler'
import { ruNumberFormatter } from '@utils/NumberFormatter'
import { calcTotalProductCost } from '@helpers/calcTotalProductCost'
import { setThinSpaceBeforeCurrencySign } from '@helpers/setThinSpaceBeforeCurrencySign'
import type { CartProduct } from '@interfaces/CartProduct'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './ProductItemPrice.module.scss'

export function ProductItemPrice({
  fullPrice,
  discountPercentage,
  className
}: Props) {
  const totalCost = calcTotalProductCost(fullPrice, discountPercentage)

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
