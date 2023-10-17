import cn from 'classnames'

import { ProductCardPrice } from './ProductCardPrice'
import { ProductCardVariant, type Props } from '@components/ProductCard'
import styles from './ProductCardMain.module.scss'

export function ProductCardMain({
  title,
  variant,
  ...priceData
}: Pick<Props, 'title' | 'fullPrice' | 'discount' | 'variant'>) {
  return (
    <main
      className={cn(styles.root, {
        [styles.default]: variant === ProductCardVariant.DEFAULT || !variant,
        [styles.small]: variant === ProductCardVariant.SMALL
      })}
    >
      <ProductCardPrice {...priceData} />
      <span className={styles.title}>{title}</span>
    </main>
  )
}