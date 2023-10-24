import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { CartLayoutHeader } from './components/CartLayoutHeader'
import { writePageTitle } from '@helpers/writePageTitle'
import styles from './layout.module.scss'

export const metadata: Metadata = {
  title: writePageTitle('Моя корзина')
}

export default function CartLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <CartLayoutHeader />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
