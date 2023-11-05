'use client'

import dynamic from 'next/dynamic'

import { UserDashboardSkeleton } from '@components/user/UserDashboardSkeleton'
import { breakpoints } from '@styles/breakpoints'
import styles from './LayoutHeaderRight.module.scss'

const UserDashboard = dynamic(
  () => import('@components/user/UserDashboard').then(mod => mod.UserDashboard),
  { ssr: false, loading: UserDashboardSkeleton }
)
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
      <UserDashboard />
      <HamburgerMenu {...hamburgerMenuProps}>
        <Drawer />
      </HamburgerMenu>
    </div>
  )
}
