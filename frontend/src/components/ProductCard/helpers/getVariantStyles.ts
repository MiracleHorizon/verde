import cn from 'classnames'

import type { ProductCardVariant } from '@components/ProductCard'

export function getVariantStyles(
  styles: Record<string, string>,
  variant?: ProductCardVariant,
  classPrefix?: string
): string {
  const propertyDefault = classPrefix ? `${classPrefix}Default` : 'default'
  const propertySmall = classPrefix ? `${classPrefix}Small` : 'small'

  if (!variant) {
    return styles[propertyDefault]
  }

  return cn({
    [styles[propertyDefault]]: variant === 'default',
    [styles[propertySmall]]: variant === 'small'
  })
}
