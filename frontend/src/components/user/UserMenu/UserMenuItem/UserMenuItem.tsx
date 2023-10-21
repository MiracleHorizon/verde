'use client'

import { memo } from 'react'
import Link from 'next/link'

import type { Props } from './UserMenuItem.types'
import styles from './UserMenuItem.module.scss'

function UserMenuItem({ title, href, onClick, onClickRoot }: Props) {
  const handleClick = () => {
    if (onClick) onClick()
    if (onClickRoot) onClickRoot()
  }

  return (
    <li className={styles.root} onClick={handleClick}>
      {href ? (
        <Link href={href} className={styles.title}>
          {title}
        </Link>
      ) : (
        <span className={styles.title}>{title}</span>
      )}
    </li>
  )
}

const MemoizedUserMenuItem = memo(UserMenuItem)

export { MemoizedUserMenuItem as UserMenuItem }
