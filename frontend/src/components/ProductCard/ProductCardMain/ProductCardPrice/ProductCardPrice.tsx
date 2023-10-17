import { useMemo } from 'react'
import cn from 'classnames'

import { DigitsHandler } from '@utils/DigitsHandler.ts'
import { ruNumberFormatter } from '@utils/NumberFormatter'
import { calcTotalProductPrice } from '@helpers/calcTotalProductPrice.ts'
import { setThinSpaceBeforeCurrencySign } from '@helpers/setThinSpaceBeforeCurrencySign.ts'
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

  return (
    <>
      {withDiscount ? (
        <div className={styles.discountContainer}>
          <span className={cn(styles.price, styles.discountPrice)}>
            {formattedTotalPrice}
          </span>
          <span className={styles.throughFullPrice}>{formattedFullPrice}</span>
        </div>
      ) : (
        <span className={styles.price}>{formattedTotalPrice}</span>
      )}
    </>
  )
}
