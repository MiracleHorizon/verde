'use client'

import dynamic from 'next/dynamic'
import { useIsClient } from 'usehooks-ts'

import { CartContentLoader } from './CartContentLoader'
import { EmptyCart } from './EmptyCart'
import { useCartStore } from '@stores/cart'

const CartContent = dynamic(
  () => import('./CartContent').then(mod => mod.CartContent),
  { ssr: false, loading: CartContentLoader }
)

export default function CartView() {
  const isClient = useIsClient()

  const isEmpty = useCartStore(state => state.isEmpty())

  if (!isClient || isEmpty) {
    return <EmptyCart />
  }

  return <CartContent />
}
