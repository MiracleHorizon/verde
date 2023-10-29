import { PageProps } from '@interfaces/next/PageProps'
import { OrderView } from './components/OrderView'
import './styles/_mixins.scss'

export default function OrderPage({ params }: PageProps) {
  return <OrderView id={params.id} />
}
