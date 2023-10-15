'use client'

import { memo, useMemo } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'

import { getCategoryRoute } from '@helpers/getCategoryRoute.ts'
import type { NavigationCategory } from '@shared/@types/NavigationCategory.ts'
import styles from './NavigationItem.module.scss'

function NavigationItem({ id, title, imagePath }: NavigationCategory) {
  const params = useParams()
  const selected = params.id === id.toString()

  const imageStyle = useMemo(() => {
    if (!imagePath) return

    return {
      backgroundImage: `url("${imagePath}")`
    }
  }, [imagePath])

  return (
    <li className={cn(styles.root, { [styles.selected]: selected })}>
      <Link href={getCategoryRoute(id)} className={styles.link}>
        <div
          style={imageStyle}
          className={imagePath ? styles.image : styles.imageFallback}
        />
        <span className={styles.title}>{title}</span>
      </Link>
    </li>
  )
}

const MemoizedNavigationItem = memo(NavigationItem)

export { MemoizedNavigationItem as NavigationItem }
