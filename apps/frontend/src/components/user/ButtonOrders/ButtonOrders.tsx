'use client'

import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

import { Button } from '@ui/Button'
import { Route } from '@enums/Route'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import listSvg from '@public/svg/list.svg'
import styles from './ButtonOrders.module.scss'

export function ButtonOrders(props: ClassNameProps) {
  const pathname = usePathname()
  const router = useRouter()

  const navigateToOrders = () => router.push(Route.ORDERS)

  if (pathname === Route.ORDERS || pathname.includes(Route.ORDERS)) {
    return null
  }

  return (
    <Button
      variant='secondary'
      title='Заказы'
      trailIcon={
        <Image width={24} height={24} src={listSvg.src} alt='Заказы' />
      }
      className={styles.root}
      onClick={navigateToOrders}
      {...props}
    />
  )
}
