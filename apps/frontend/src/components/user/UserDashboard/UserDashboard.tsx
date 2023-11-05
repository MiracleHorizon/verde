'use client'

import dynamic from 'next/dynamic'

import { ButtonSignin } from '../ButtonSignin'
import { useUserStore } from '@stores/user'
import styles from './UserDashboard.module.scss'

const ButtonOrders = dynamic(
  () => import('../ButtonOrders').then(mod => mod.ButtonOrders),
  { ssr: false }
)
const UserCartSummary = dynamic(
  () => import('../UserCartSummary').then(mod => mod.UserCartSummary),
  { ssr: false }
)
const UserMenuModalContainer = dynamic(
  () =>
    import('../UserMenuModalContainer').then(mod => mod.UserMenuModalContainer),
  { ssr: false }
)

export function UserDashboard() {
  const user = useUserStore(state => state.user)

  if (!user) {
    return <ButtonSignin />
  }

  return (
    <div className={styles.root}>
      <ButtonOrders />
      <UserCartSummary className={styles.userCartSummary} />
      <UserMenuModalContainer user={user} />
    </div>
  )
}
