import { useCallback } from 'react'

import { useOrderCost } from './useOrderCost'
import { calcTotalProductCost } from '@helpers/calcTotalProductCost'
import { MAX_CART_TOTAL } from '@constants/mock'
import type { Product } from '@interfaces/Product'

export function useCanAddToCart() {
  const { orderCost } = useOrderCost()

  const canAddToCart = useCallback(
    ({
      fullPrice,
      discountPercentage
    }: Pick<Product, 'fullPrice' | 'discountPercentage'>): boolean => {
      const productCost = calcTotalProductCost(fullPrice, discountPercentage)

      return orderCost + productCost <= MAX_CART_TOTAL
    },
    [orderCost]
  )

  return { canAddToCart }
}
