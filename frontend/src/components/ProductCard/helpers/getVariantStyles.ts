import cn from 'classnames'

import { ProductCardVariant } from '@components/ProductCard'

export function getVariantStyles(
  styles: Record<string, string>,
  variant?: ProductCardVariant
): string {
  if (!variant) {
    return styles.default
  }

  return cn({
    [styles.default]: variant === ProductCardVariant.DEFAULT,
    [styles.small]: variant === ProductCardVariant.SMALL
  })
}
