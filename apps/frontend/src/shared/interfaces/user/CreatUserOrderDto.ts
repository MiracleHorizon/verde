import type { UserOrder } from './UserOrder'
import type { CartProduct } from '@interfaces/business/CartProduct'

export type CreatUserOrderDto = Omit<
  UserOrder,
  'id' | 'products' | 'createdAt' | 'deliveredAt'
> & {
  products: CartProduct[]
}
