import type { CartProduct } from '@interfaces/business/CartProduct'

export interface UserOrderProduct
  extends Pick<CartProduct, 'id' | 'title' | 'quantity' | 'imagePath'> {
  orderId: string
  totalCost: number
}
