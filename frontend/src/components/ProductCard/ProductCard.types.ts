import type { Product } from '@shared/@types/Product.ts'
import type { ClassNameProps } from '@shared/@types/ClassNameProps.ts'

export interface Props extends Product, ClassNameProps {
  variant?: ProductCardVariant
}

/* eslint no-unused-vars: 0 */
export enum ProductCardVariant {
  DEFAULT = 'default',
  SMALL = 'small'
}
