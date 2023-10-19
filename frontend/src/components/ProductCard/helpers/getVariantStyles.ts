import cn from 'classnames'

import { ProductCardVariant } from '@components/ProductCard'

export function getVariantStyles(
  styles: Record<string, string>,
  variant?: ProductCardVariant
): string {
  let propertyDefault = 'default'
  let propertySmall = 'small'

  for (const styleName in styles) {
    const isPropertyDefault = styleName.toLocaleLowerCase().includes('default')
    const isPropertySmall = styleName.toLocaleLowerCase().includes('small')

    if (isPropertyDefault && styleName !== propertyDefault) {
      propertyDefault = styleName
    }

    if (isPropertySmall && styleName !== propertySmall) {
      propertySmall = styleName
    }
  }

  if (!variant) {
    return styles[propertyDefault]
  }

  return cn({
    [styles[propertyDefault]]: variant === 'default',
    [styles[propertySmall]]: variant === 'small'
  })
}
