import type { UserOrderProduct } from './UserOrderProduct'

export interface UserOrder {
  id: string
  userId: string
  totalCost: number
  productsCost: number
  deliveryCost: number
  serviceFee: number
  products: UserOrderProduct[]
  createdAt: string
  deliveredAt: string
}
