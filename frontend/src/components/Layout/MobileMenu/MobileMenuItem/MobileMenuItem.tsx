'use client'

import { memo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import { Route } from '@shared/@types/Route.ts'
import styles from './MobileMenuItem.module.scss'

function MobileMenuItem({ href, title, imagePath }: Props) {
  const pathname = usePathname()
  const selected = pathname === href

  return (
    <li className={cn(selected ? styles.selected : styles.unselected)}>
      <Link href={href} className={styles.link}>
        <span className={styles.imageContainer}>
          <Image src={imagePath} alt={title} sizes='100%' fill priority />
        </span>
        {title}
      </Link>
    </li>
  )
}

const MemoizedMobileMenuItem = memo(MobileMenuItem)

export { MemoizedMobileMenuItem as MobileMenuItem }

interface Props {
  href: Route
  title: string
  imagePath: string
}
