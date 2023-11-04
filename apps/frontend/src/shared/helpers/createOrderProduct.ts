import { calcTotalProductCost } from './calcTotalProductCost'
import type { CartProduct } from '@interfaces/CartProduct'
import type { OrderProduct } from '@interfaces/OrderProduct'

export function createOrderProduct(
  orderId: string,
  { quantity, title, imagePath, fullPrice, discountPercentage }: CartProduct
): OrderProduct {
  const totalCost = calcTotalProductCost(fullPrice, discountPercentage)

  return {
    id: crypto.randomUUID(),
    title,
    quantity,
    imagePath,
    orderId,
    totalCost
  }
}
