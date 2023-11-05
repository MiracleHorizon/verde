import { memo } from 'react'
import cn from 'classnames'

import { ProductItemLeft } from './ProductItemLeft'
import { ProductItemRight } from './ProductItemRight'
import type { CartProduct } from '@interfaces/business/CartProduct'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './ProductItem.module.scss'

function ProductItem({
  id,
  title,
  imagePath,
  fullPrice,
  discountPercentage,
  className
}: Props) {
  return (
    <div className={cn(styles.root, className)}>
      <ProductItemLeft
        title={title}
        imagePath={imagePath}
        fullPrice={fullPrice}
        discountPercentage={discountPercentage}
      />
      <ProductItemRight
        id={id}
        fullPrice={fullPrice}
        discountPercentage={discountPercentage}
      />
    </div>
  )
}

const MemoizedProductItem = memo(ProductItem)

export { MemoizedProductItem as ProductItem }

type Props = Omit<CartProduct, 'quantity'> & ClassNameProps
