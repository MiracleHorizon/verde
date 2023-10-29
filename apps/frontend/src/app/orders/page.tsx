import type { Metadata } from 'next'

import { OrdersView } from './components/OrdersView'
import { writePageTitle } from '@helpers/writePageTitle'

export const metadata: Metadata = {
  title: writePageTitle('Мои заказы')
}

export default function OrdersPage() {
  return <OrdersView />
}
