'use client'

import { memo } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

import { CategoryImage } from '@components/CategoryImage'
import { getCategoryRoute } from '@helpers/getCategoryRoute'
import type { NavigationCategory } from '@interfaces/business/NavigationCategory'
import styles from './NavigationItem.module.scss'

function NavigationItem({ id, title, imagePath }: NavigationCategory) {
  const params = useParams()
  const selected = params.id === id.toString()

  return (
    <li
      title={title}
      className={cn(styles.root, { [styles.selected]: selected })}
    >
      <Link href={getCategoryRoute(id)} className={styles.link}>
        <CategoryImage imagePath={imagePath} />
        <span className={styles.title}>{title}</span>
      </Link>
    </li>
  )
}

const MemoizedNavigationItem = memo(NavigationItem)

export { MemoizedNavigationItem as NavigationItem }
