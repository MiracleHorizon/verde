import Link from 'next/link'
import cn from 'classnames'

import { APP_TITLE } from '@shared/const/seo.ts'
import { Route } from '@shared/@types/Route.ts'
import { roboto } from '@styles/fonts.ts'
import styles from './Logo.module.scss'

export function Logo() {
  return (
    <div className={styles.root}>
      <Link href={Route.HOME} className={styles.link}>
        <div className={styles.mock} />
      </Link>
      <h2 className={cn(styles.title, roboto.className)}>{APP_TITLE}</h2>
    </div>
  )
}
