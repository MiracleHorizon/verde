import { ProductItemPrice } from '../ProductItemPrice'
import { CounterChanger } from '@ui/CounterChanger'
import { useCartProduct } from '@stores/hooks/useCartProduct'
import type { CartProduct } from '@interfaces/CartProduct'
import styles from './ProductItemRight.module.scss'

export function ProductItemRight({
  id,
  fullPrice,
  discountPercentage
}: Pick<CartProduct, 'id' | 'fullPrice' | 'discountPercentage'>) {
  const { quantity, ...counterChangerProps } = useCartProduct(id)

  return (
    <div className={styles.root}>
      <CounterChanger
        {...counterChangerProps}
        variant='separated'
        count={quantity}
        className={styles.counterChanger}
      />
      <ProductItemPrice
        fullPrice={fullPrice}
        discountPercentage={discountPercentage}
        className={styles.price}
      />
    </div>
  )
}
