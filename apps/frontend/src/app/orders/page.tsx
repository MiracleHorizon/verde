import type { Metadata } from 'next'

import { OrdersView } from './components/OrdersView'

export const metadata: Metadata = {
  title: 'Мои заказы'
}

export default function OrdersPage() {
  return <OrdersView />
}
