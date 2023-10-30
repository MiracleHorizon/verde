import dynamic from 'next/dynamic'

import { OrderViewLoader } from './components/OrderViewLoader'
import type { PageProps } from '@interfaces/next/PageProps'
import './styles/_mixins.scss'

const OrderView = dynamic(() => import('./components/OrderView'), {
  ssr: false,
  loading: OrderViewLoader
})

export default function OrderPage({ params }: PageProps) {
  return <OrderView id={params.id} />
}
