import dynamic from 'next/dynamic'
import cn from 'classnames'
import type { PropsWithChildren } from 'react'

import { LayoutHeader } from './LayoutHeader'
import { NavigationAside } from './aside/NavigationAside'
import styles from './Layout.module.scss'

const MobileMenu = dynamic(
  () => import('./MobileMenu').then(mod => mod.MobileMenu),
  { ssr: true }
)
const ButtonBackTop = dynamic(() => import('@components/ButtonBackTop'), {
  ssr: false
})

export function DefaultLayout({ children, withoutNavigation }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.view}>
        <LayoutHeader />
        <div className={styles.wrapper}>
          {!withoutNavigation && <NavigationAside />}
          <div
            className={cn(
              styles.content,
              withoutNavigation
                ? styles.withoutNavigation
                : styles.withNavigation
            )}
          >
            {children}
          </div>
        </div>
      </div>

      <MobileMenu />
      <ButtonBackTop />
    </div>
  )
}

interface Props extends PropsWithChildren {
  withoutNavigation?: boolean
}
