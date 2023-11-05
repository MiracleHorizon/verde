'use client'

import dynamic from 'next/dynamic'
import { useIsClient } from 'usehooks-ts'

import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { USER_ORDERS_KEY } from '@constants/browserStorages'
import type { UserOrder } from '@interfaces/user/UserOrder'

const OrdersContent = dynamic(
  () => import('./OrdersContent').then(mod => mod.OrdersContent),
  { ssr: false }
)

export function OrdersView() {
  const isClient = useIsClient()

  if (!isClient) {
    return <h1>Loading...</h1>
  }

  const localStorageProvider = new BrowserStorageProvider(localStorage)
  const orders = localStorageProvider.get<UserOrder[]>(USER_ORDERS_KEY)

  if (!orders || orders.length === 0) {
    return (
      <main>
        <article>
          <h1>Вы пока не делали заказов :(</h1>
        </article>
      </main>
    )
  }

  return <OrdersContent orders={orders} />
}
