import dynamic from 'next/dynamic'
import cn from 'classnames'

import { ProductCardFooterSkeleton } from './ProductCardFooterSkeleton'
import { getVariantStyles, type Props } from '@components/ProductCard'
import styles from './ProductCardFooter.module.scss'

const ProductCardFooterContent = dynamic(
  () => import('./ProductCardFooterContent'),
  {
    ssr: false,
    loading: ProductCardFooterSkeleton
  }
)

export function ProductCardFooter({
  variant,
  ...product
}: Omit<Props, 'className'>) {
  return (
    <footer className={cn(styles.root, getVariantStyles(styles, variant))}>
      <ProductCardFooterContent {...product} variant={variant} />
    </footer>
  )
}
