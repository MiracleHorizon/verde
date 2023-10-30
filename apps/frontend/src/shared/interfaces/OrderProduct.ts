import type { CartProduct } from '@interfaces/CartProduct'

export interface OrderProduct
  extends Pick<CartProduct, 'id' | 'title' | 'quantity' | 'imagePath'> {
  orderId: string
  totalCost: number
}
