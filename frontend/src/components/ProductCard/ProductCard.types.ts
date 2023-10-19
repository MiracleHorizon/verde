import type { Product } from '@shared/@types/Product.ts'
import type { ClassNameProps } from '@shared/@types/ClassNameProps.ts'

export interface Props extends Product, ClassNameProps {
  variant?: ProductCardVariant
}

export type ProductCardVariant = 'default' | 'small'
