import type { CartProduct } from '@interfaces/business/CartProduct'

export interface UserCart {
  id: string
  products: CartProduct[]
}
