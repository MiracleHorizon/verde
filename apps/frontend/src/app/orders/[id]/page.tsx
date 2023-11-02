import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

import { OrderViewLoader } from './components/OrderViewLoader'
import type { PageProps } from '@interfaces/next/PageProps'
import type { GenerateMetadataParams } from '@interfaces/next/GenerateMetadataParams'
import './styles/_mixins.scss'

const OrderView = dynamic(() => import('./components/OrderView'), {
  ssr: false,
  loading: OrderViewLoader
})

export async function generateMetadata({
  params
}: GenerateMetadataParams): Promise<Metadata> {
  return {
    title: `Заказ №${params.id}`
  }
}

export default function OrderPage({ params }: PageProps) {
  return <OrderView id={params.id} />
}
