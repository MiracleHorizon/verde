import type { OrderProduct } from './OrderProduct'

export interface Order {
  id: string
  userId: string
  totalCost: number
  productsCost: number
  deliveryCost: number
  serviceFee: number
  products: OrderProduct[]
  createdAt: string
  deliveredAt: string
}
