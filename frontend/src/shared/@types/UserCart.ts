import type { CartProduct } from '@shared/@types/CartProduct.ts'

export interface UserCart {
  id: number
  products: CartProduct[]
}
