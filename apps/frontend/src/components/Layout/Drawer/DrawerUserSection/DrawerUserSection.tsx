'use client'

import dynamic from 'next/dynamic'

import { useUserStore } from '@stores/user'
import styles from './DrawerUserSection.module.scss'

const UserMenu = dynamic(
  () => import('@components/user/UserMenu').then(mod => mod.UserMenu),
  { ssr: false }
)
const ButtonSignin = dynamic(
  () => import('@components/user/ButtonSignin').then(mod => mod.ButtonSignin),
  { ssr: false }
)

export function DrawerUserSection() {
  const isAuth = useUserStore(state => state.isAuth())

  return (
    <>
      <section className={styles.root}>
        {isAuth ? (
          <UserMenu className={styles.userMenu} />
        ) : (
          <ButtonSignin className={styles.buttonSignin} />
        )}
      </section>
      <div className={styles.divider} />
    </>
  )
}
