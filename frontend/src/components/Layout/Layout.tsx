import dynamic from 'next/dynamic'
import type { PropsWithChildren } from 'react'

import { LayoutHeader } from './LayoutHeader'
import styles from './Layout.module.scss'

const MobileMenu = dynamic(
  () => import('./MobileMenu').then(mod => mod.MobileMenu),
  { ssr: true }
)

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <LayoutHeader />
        <main>{children}</main>
      </div>

      <MobileMenu />
    </div>
  )
}
