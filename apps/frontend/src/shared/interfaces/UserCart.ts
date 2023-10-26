import type { CartProduct } from './CartProduct'

export interface UserCart {
  id: string
  products: CartProduct[]
}
