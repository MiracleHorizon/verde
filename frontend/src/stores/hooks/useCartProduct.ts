'use client'

import { useCartStore } from '@stores/cart'
import { MAX_PRODUCT_QUANTITY } from '@constants/mock'

export function useCartProduct(productId: string) {
  const quantity = useCartStore(state => state.productQuantity(productId))

  const isIncrementDisabled = quantity >= MAX_PRODUCT_QUANTITY
  const isDecrementDisabled = quantity <= 0

  const increment = useCartStore(state => state.incrementProductQuantity)
  const decrement = useCartStore(state => state.decrementProductQuantity)

  const handleIncrement = () => increment(productId)
  const handleDecrement = () => decrement(productId)

  return {
    quantity,
    increment: handleIncrement,
    decrement: handleDecrement,
    isIncrementDisabled,
    isDecrementDisabled
  }
}
