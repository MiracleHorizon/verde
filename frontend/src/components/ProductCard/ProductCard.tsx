import cn from 'classnames'

import { ProductCardImage } from './ProductCardImage'
import { ProductCardMain } from './ProductCardMain'
import { ProductCardVariant, type Props } from './ProductCard.types.ts'
import styles from './ProductCard.module.scss'

export function ProductCard({
  title,
  imagePath,
  fullPrice,
  discount,
  variant,
  className
}: Props) {
  return (
    <div
      className={cn(
        styles.root,
        {
          [styles.default]: variant === ProductCardVariant.DEFAULT || !variant,
          [styles.small]: variant === ProductCardVariant.SMALL
        },
        className
      )}
    >
      <ProductCardImage title={title} imagePath={imagePath} variant={variant} />
      <ProductCardMain
        title={title}
        fullPrice={fullPrice}
        discount={discount}
        variant={variant}
      />
    </div>
  )
}
