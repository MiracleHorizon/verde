import type { Product } from '@shared/@types/Product.ts'

export interface CartProduct extends Product {
  count: number
}
