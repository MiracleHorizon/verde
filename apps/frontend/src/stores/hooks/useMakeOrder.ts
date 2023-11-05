import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { useUserStore } from '@stores/user'
import { useCartStore } from '@stores/cart'
import { useOrderCost } from '@stores/hooks/useOrderCost'
import { useOrderSummary } from '@stores/hooks/useOrderSummary'
import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { createUserOrder } from '@helpers/createUserOrder'
import { getOrderRoute } from '@helpers/getOrderRoute'
import { USER_ORDERS_KEY } from '@constants/browserStorages'
import type { UserOrder } from '@interfaces/user/UserOrder'

export function useMakeOrder() {
  const router = useRouter()

  const user = useUserStore(state => state.user)
  const products = useCartStore(state => state.products)
  const { productsCost, serviceFee, deliveryCost } = useOrderSummary()
  const { orderCost } = useOrderCost()

  const clearCart = useCartStore(state => state.clear)

  const handleMakeOrder = useCallback(() => {
    if (!user) return

    const order = createUserOrder({
      userId: user.id,
      totalCost: orderCost,
      deliveryCost,
      productsCost,
      serviceFee,
      products
    })

    const localStorageProvider = new BrowserStorageProvider(localStorage)

    const userOrders = localStorageProvider.get<UserOrder[]>(USER_ORDERS_KEY)

    if (userOrders) {
      localStorageProvider.set(USER_ORDERS_KEY, [...userOrders, order])
    } else {
      localStorageProvider.set(USER_ORDERS_KEY, [order])
    }

    clearCart()
    router.replace(getOrderRoute(order.id))
  }, [
    router,
    clearCart,
    deliveryCost,
    orderCost,
    products,
    productsCost,
    serviceFee,
    user
  ])

  return { handleMakeOrder }
}
