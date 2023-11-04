import { getDeliveredAtDate } from './getDeliveredAtDate'
import { createOrderProduct } from './createOrderProduct'
import type { Order } from '@interfaces/Order'
import type { CreatOrderDto } from '@interfaces/CreatOrderDto'

export function createOrder({ products, ...dto }: CreatOrderDto): Order {
  const order = {
    id: crypto.randomUUID(),
    ...dto
  }

  return {
    ...order,
    createdAt: new Date().toString(),
    deliveredAt: getDeliveredAtDate(),
    products: products.map(cartProduct =>
      createOrderProduct(order.id, cartProduct)
    )
  }
}
