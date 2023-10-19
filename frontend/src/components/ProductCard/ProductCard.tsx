import cn from 'classnames'

import { ProductCardImage } from './ProductCardImage'
import { ProductCardMain } from './ProductCardMain'
import { ProductCardFooter } from './ProductCardFooter'
import { getVariantStyles } from './helpers/getVariantStyles.ts'
import type { Props } from './ProductCard.types.ts'
import styles from './ProductCard.module.scss'

export function ProductCard({ variant, className, ...product }: Props) {
  const { title, imagePath, fullPrice, discount } = product

  return (
    <div
      className={cn(styles.root, getVariantStyles(styles, variant), className)}
    >
      <ProductCardImage title={title} imagePath={imagePath} variant={variant} />
      <ProductCardMain
        title={title}
        fullPrice={fullPrice}
        discount={discount}
        variant={variant}
      />
      <ProductCardFooter {...product} variant={variant} />
    </div>
  )
}
