'use client'

import dynamic from 'next/dynamic'

import styles from './LayoutHeaderRight.module.scss'
import { breakpoints } from '@styles/breakpoints.ts'

const HamburgerMenu = dynamic(
  () => import('@ui/HamburgerMenu').then(mod => mod.HamburgerMenu),
  { ssr: false }
)
const Drawer = dynamic(
  () => import('@components/Layout/Drawer').then(mod => mod.Drawer),
  { ssr: false }
)

const hamburgerMenuProps = {
  className: styles.hamburgerMenu,
  viewportMaxWidth: {
    maxWidth: breakpoints.tablet
  }
}

export function LayoutHeaderRight() {
  return (
    <div className={styles.root}>
      <HamburgerMenu {...hamburgerMenuProps}>
        <Drawer />
      </HamburgerMenu>
    </div>
  )
}
