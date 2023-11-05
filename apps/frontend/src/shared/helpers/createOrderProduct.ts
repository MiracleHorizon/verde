import { calcTotalProductCost } from './calcTotalProductCost'
import type { CartProduct } from '@interfaces/business/CartProduct'
import type { UserOrderProduct } from '@interfaces/user/UserOrderProduct'

export function createOrderProduct(
  orderId: string,
  { quantity, title, imagePath, fullPrice, discountPercentage }: CartProduct
): UserOrderProduct {
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
