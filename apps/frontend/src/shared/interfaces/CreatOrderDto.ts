import type { Order } from './Order'
import type { CartProduct } from './CartProduct'

export type CreatOrderDto = Omit<
  Order,
  'id' | 'products' | 'createdAt' | 'deliveredAt'
> & {
  products: CartProduct[]
}
