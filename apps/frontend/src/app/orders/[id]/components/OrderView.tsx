'use client'

import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

import { FullWidthSpinner } from '@ui/spinners/FullWidthSpinner'
import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { USER_ORDERS_KEY } from '@constants/browserStorages'
import type { UserOrder } from '@interfaces/user/UserOrder'
import styles from './OrderView.module.scss'

const LoadingSpinner = () => <FullWidthSpinner className={styles.spinner} />

const OrderHeader = dynamic(
  () => import('./OrderHeader').then(mod => mod.OrderHeader),
  { ssr: false, loading: LoadingSpinner }
)
const OrderProducts = dynamic(
  () => import('./OrderProducts').then(mod => mod.OrderProducts),
  { ssr: false, loading: LoadingSpinner }
)
const OrderPayment = dynamic(
  () => import('./OrderPayment').then(mod => mod.OrderPayment),
  { ssr: false, loading: LoadingSpinner }
)

export default function OrderView({ id }: Id) {
  const order = getOrder({ id })

  if (!order) {
    notFound()
  }

  const {
    totalCost,
    productsCost,
    deliveryCost,
    serviceFee,
    createdAt,
    products
  } = order

  return (
    <main className={styles.root}>
      <OrderHeader id={id} createdAt={createdAt} />
      <OrderProducts products={products} />
      <OrderPayment
        totalCost={totalCost}
        productsCost={productsCost}
        deliveryCost={deliveryCost}
        serviceFee={serviceFee}
      />
    </main>
  )
}

type Id = Pick<UserOrder, 'id'>

function getOrder({ id }: Id): UserOrder | null {
  const localStorageProvider = new BrowserStorageProvider(localStorage)
  const orders = localStorageProvider.get<UserOrder[]>(USER_ORDERS_KEY)

  if (!orders) {
    return null
  }

  const order = orders.find(order => order.id === id)

  if (!order) {
    return null
  }

  return order
}
