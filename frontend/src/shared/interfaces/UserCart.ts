import type { CartProduct } from './CartProduct.ts'

export interface UserCart {
  id: number
  products: CartProduct[]
}
