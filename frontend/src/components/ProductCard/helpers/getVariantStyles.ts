import cn from 'classnames'

import type { ProductCardVariant } from '@components/ProductCard'

/**\
 *
 * @param styles - CSS-modules class list
 * @param variant - variant of the ProductCard style
 * @param classPrefix - additional class selector prefix
 */
export function getVariantStyles(
  styles: Record<string, string>,
  variant: ProductCardVariant,
  classPrefix?: string
): string {
  const propertyDefault = classPrefix ? `${classPrefix}Default` : 'default'
  const propertySmall = classPrefix ? `${classPrefix}Small` : 'small'

  return cn({
    [styles[propertyDefault]]: variant === 'default',
    [styles[propertySmall]]: variant === 'small'
  })
}
