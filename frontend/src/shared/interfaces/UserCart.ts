import type { CartProduct } from './CartProduct.ts'

export interface UserCart {
  id: string
  products: CartProduct[]
}
