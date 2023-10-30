import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import random from 'lodash.random'

import { useUserStore } from '@stores/user'
import { useCartStore } from '@stores/cart'
import { useOrderCost } from '@stores/hooks/useOrderCost'
import { useOrderSummary } from '@stores/hooks/useOrderSummary'
import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { calcTotalProductCost } from '@helpers/calcTotalProductCost'
import { getOrderRoute } from '@helpers/getOrderRoute'
import { USER_ORDERS_KEY } from '@constants/browserStorages'
import type { Order } from '@interfaces/Order'
import type { OrderProduct } from '@interfaces/OrderProduct'
import type { CreatOrderDto } from '@interfaces/CreatOrderDto'
import type { CartProduct } from '@interfaces/CartProduct'

export function useMakeOrder() {
  const router = useRouter()

  const user = useUserStore(state => state.user)
  const products = useCartStore(state => state.products)
  const { productsCost, serviceFee, deliveryCost } = useOrderSummary()
  const { orderCost } = useOrderCost()

  const clearCart = useCartStore(state => state.clear)

  const handleMakeOrder = useCallback(() => {
    if (!user) return

    const order = createOrder({
      userId: user.id,
      totalCost: orderCost,
      deliveryCost,
      productsCost,
      serviceFee,
      products
    })

    const localStorageProvider = new BrowserStorageProvider(localStorage)

    const userOrders = localStorageProvider.get<Order[]>(USER_ORDERS_KEY)

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

function createOrder({ products, ...dto }: CreatOrderDto): Order {
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

function getDeliveredAtDate(): string {
  const MAX_DELIVERY_TIME = 140
  const MIN_DELIVERY_TIME = 30

  const currentDate = new Date()
  const randomDeliveryTime = random(MIN_DELIVERY_TIME, MAX_DELIVERY_TIME)

  return new Date(currentDate.getTime() + randomDeliveryTime * 60000).toString()
}

function createOrderProduct(
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
