import type { UserCart } from '@shared/@types/UserCart.ts'
import type { Product } from '@shared/@types/Product.ts'
import type { CartProduct } from '@shared/@types/CartProduct.ts'

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