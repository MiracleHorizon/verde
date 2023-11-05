import type { Product } from '@interfaces/business/Product'
import type { ClassNameProps } from '@interfaces/ClassNameProps'

export interface Props extends Product, ClassNameProps {
  variant: ProductCardVariant
}

export type ProductCardVariant = 'default' | 'small'
