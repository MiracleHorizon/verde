'use client'

import { notFound } from 'next/navigation'
import { useIsClient } from 'usehooks-ts'

import { OrderHeader } from './OrderHeader'
import { OrderProducts } from './OrderProducts'
import { OrderPayment } from './OrderPayment'
import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { USER_ORDERS_KEY } from '@constants/browserStorages'
import type { Order } from '@interfaces/Order'
import styles from './OrderView.module.scss'

export function OrderView({ id }: Id) {
  const isClient = useIsClient()

  if (!isClient) {
    // TODO: Loader
    return <div>Loading...</div>
  }

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

type Id = Pick<Order, 'id'>

function getOrder({ id }: Id): Order | null {
  const localStorageProvider = new BrowserStorageProvider(localStorage)
  const orders = localStorageProvider.get<Order[]>(USER_ORDERS_KEY)

  if (!orders) {
    return null
  }

  const order = orders.find(order => order.id === id)

  if (!order) {
    return null
  }

  return order
}
