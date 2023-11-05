import { getDeliveredAtDate } from './getDeliveredAtDate'
import { createOrderProduct } from './createOrderProduct'
import type { UserOrder } from '@interfaces/user/UserOrder'
import type { CreatUserOrderDto } from '@interfaces/user/CreatUserOrderDto'

export function createUserOrder({
  products,
  ...dto
}: CreatUserOrderDto): UserOrder {
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
