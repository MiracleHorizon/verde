import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { CartLayoutHeader } from './components/CartLayoutHeader'
import styles from './layout.module.scss'
import './styles/_mixins.scss'

export const metadata: Metadata = {
  title: 'Моя корзина'
}

export default function CartLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <CartLayoutHeader />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
