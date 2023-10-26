'use client'

import { useRouter } from 'next/navigation'

import { IconChevronLeft } from '@ui/icons/IconChevronLeft'
import { Route } from '@enums/Route'
import styles from './ButtonBackHome.module.scss'

export function ButtonBackHome() {
  const router = useRouter()

  const handleBackHome = () => router.push(Route.HOME)

  return (
    <button className={styles.root} onClick={handleBackHome}>
      <IconChevronLeft className={styles.icon} />
      <span className={styles.title}>На главную</span>
    </button>
  )
}
