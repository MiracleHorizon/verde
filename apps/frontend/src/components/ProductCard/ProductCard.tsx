import cn from 'classnames'

import { ProductCardImage } from './ProductCardImage'
import { ProductCardMain } from './ProductCardMain'
import { ProductCardFooter } from './ProductCardFooter'
import { getVariantStyles } from './helpers/getVariantStyles'
import type { Props } from './ProductCard.types'
import styles from './ProductCard.module.scss'

export function ProductCard({ variant, className, ...product }: Props) {
  const { title, imagePath, fullPrice, discountPercentage } = product

  return (
    <div
      className={cn(styles.root, getVariantStyles(styles, variant), className)}
    >
      <ProductCardImage title={title} imagePath={imagePath} variant={variant} />
      <ProductCardMain
        title={title}
        fullPrice={fullPrice}
        discountPercentage={discountPercentage}
        variant={variant}
      />
      <ProductCardFooter {...product} variant={variant} />
    </div>
  )
}
