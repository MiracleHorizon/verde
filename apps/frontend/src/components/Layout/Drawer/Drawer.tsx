'use client'

import dynamic from 'next/dynamic'

import { DrawerUserSection } from './DrawerUserSection'
import styles from './Drawer.module.scss'

const Navigation = dynamic(
  () => import('@components/Navigation').then(mod => mod.Navigation),
  { ssr: false }
)

export function Drawer() {
  return (
    <div className={styles.root}>
      <main className={styles.content}>
        <DrawerUserSection />
        <Navigation />
      </main>
    </div>
  )
}
