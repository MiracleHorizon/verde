import Link from 'next/link'
import cn from 'classnames'

import { APP_TITLE } from '@constants/seo'
import { Route } from '@enums/Route'
import { roboto } from '@styles/fonts'
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
