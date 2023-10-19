import type { Product } from './Product'

export interface CartProduct extends Product {
  count: number
}
