'use client'

import { useUserStore } from '@stores/user'
import { useCartStore } from '@stores/cart'
import { SERVICE_FEE } from '@constants/payment'

export function useCartSummary(): number {
  const isAuth = useUserStore(state => state.isAuth())
  const isEmpty = useCartStore(state => state.isEmpty())
  const productsCost = useCartStore(state => state.productsCost())

  if (!isAuth || isEmpty || productsCost <= 0) {
    return 0
  }

  return productsCost - SERVICE_FEE
}
