import Link from 'next/link'
import cn from 'classnames'

import { IconLogoVerde } from '@ui/icons/IconLogoVerde'
import { APP_TITLE } from '@constants/seo'
import { Route } from '@enums/Route'
import { roboto } from '@styles/fonts'
import styles from './Logo.module.scss'

export function Logo() {
  return (
    <div className={styles.root}>
      <Link href={Route.HOME} className={styles.link}>
        <IconLogoVerde className={styles.logo} />
      </Link>
      <h2 className={cn(styles.title, roboto.className)}>{APP_TITLE}</h2>
    </div>
  )
}
