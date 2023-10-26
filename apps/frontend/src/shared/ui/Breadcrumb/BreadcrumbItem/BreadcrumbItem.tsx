'use client'

import { memo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

import type { BreadcrumbItem as Props } from '@ui/Breadcrumb'
import styles from './BreadcrumbItem.module.scss'

function BreadcrumbItem({ href, title }: Props) {
  const pathname = usePathname()
  const selected = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        styles.root,
        selected ? styles.selected : styles.unselected
      )}
    >
      {title}
    </Link>
  )
}

const MemoizedBreadcrumbItem = memo(BreadcrumbItem)

export { MemoizedBreadcrumbItem as BreadcrumbItem }
