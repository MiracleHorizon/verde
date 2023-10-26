'use client'

import { useMemo } from 'react'
import cn from 'classnames'

import { UserMenuItem } from './UserMenuItem'
import { useSignout } from '@hooks/auth/useSignout'
import { Route } from '@enums/Route'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './UserMenu.module.scss'

export function UserMenu({ className, onClickItem }: Props) {
  const { handleSignout } = useSignout()

  const items = useMemo(
    () => [
      {
        title: 'Мои заказы',
        href: Route.ORDERS
      },
      {
        title: 'Выйти',
        onClick: handleSignout
      }
    ],
    [handleSignout]
  )

  return (
    <ul className={cn(styles.root, className)}>
      {items.map(item => (
        <UserMenuItem key={item.title} {...item} onClickRoot={onClickItem} />
      ))}
    </ul>
  )
}

interface Props extends ClassNameProps {
  onClickItem?: VoidFunction
}
