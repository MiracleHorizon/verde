'use client'

import { useCartStore } from '@stores/cart'
import { useCanAddToCart } from '@stores/hooks/useCanAddToCart'
import { MAX_PRODUCT_QUANTITY } from '@constants/mock'
import type { Product } from '@interfaces/Product'

export function useCartProduct({
  id,
  fullPrice,
  discountPercentage
}: Pick<Product, 'id' | 'fullPrice' | 'discountPercentage'>) {
  const quantity = useCartStore(state => state.productQuantity(id))

  const { canAddToCart } = useCanAddToCart()
  const isCanAddToCart = canAddToCart({ fullPrice, discountPercentage })

  const increment = useCartStore(state => state.incrementProductQuantity)
  const decrement = useCartStore(state => state.decrementProductQuantity)

  const handleIncrement = () => increment(id)
  const handleDecrement = () => decrement(id)

  return {
    quantity,
    increment: handleIncrement,
    decrement: handleDecrement,
    isIncrementDisabled: quantity >= MAX_PRODUCT_QUANTITY || !isCanAddToCart,
    isDecrementDisabled: quantity <= 0
  }
}
