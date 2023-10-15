import dynamic from 'next/dynamic'
import type { PropsWithChildren } from 'react'

import { LayoutHeader } from './LayoutHeader'
import { NavigationAside } from './aside/NavigationAside'
import styles from './Layout.module.scss'

const MobileMenu = dynamic(
  () => import('./MobileMenu').then(mod => mod.MobileMenu),
  { ssr: true }
)

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <div className={styles.view}>
        <LayoutHeader />
        <div className={styles.wrapper}>
          <NavigationAside />
          <div content={styles.content}>{children}</div>
        </div>
      </div>

      <MobileMenu />
    </div>
  )
}
