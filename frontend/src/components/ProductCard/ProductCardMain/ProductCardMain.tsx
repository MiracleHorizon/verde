import cn from 'classnames'

import { ProductCardPrice } from './ProductCardPrice'
import { getVariantStyles, type Props } from '@components/ProductCard'
import styles from './ProductCardMain.module.scss'

export function ProductCardMain({
  title,
  variant,
  ...priceData
}: Pick<Props, 'title' | 'fullPrice' | 'discountPercentage' | 'variant'>) {
  return (
    <main className={cn(styles.root, getVariantStyles(styles, variant))}>
      <ProductCardPrice variant={variant} {...priceData} />
      <span className={styles.title}>{title}</span>
    </main>
  )
}
