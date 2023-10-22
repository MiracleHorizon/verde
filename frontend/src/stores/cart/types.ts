import type { UserCart } from '@interfaces/UserCart'
import type { Product } from '@interfaces/Product'
import type { CartProduct } from '@interfaces/CartProduct'

export type Store<T> = State<T> & Computed<T> & Actions<T>

/* eslint no-unused-vars: 0 */
export interface State<T> {
  cartId: T | null
  products: CartProduct[]
}

interface Computed<T> {
  isEmpty: () => boolean
  isProductInCart: (productId: T) => boolean
  productCount: (productId: T) => number
  productsCost: () => number
}

interface Actions<T> {
  initialize: (cart: UserCart) => void
  deinitialize: VoidFunction
  clear: VoidFunction
  updateProducts: (products: CartProduct[]) => boolean
  addProduct: (product: Product) => void
  removeProduct: (productId: T) => void
  incrementProductCount: (productId: T) => void
  decrementProductCount: (productId: T) => void
}
