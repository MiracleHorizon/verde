import Link from 'next/link'
import cn from 'classnames'
import { Satisfy } from 'next/font/google'

import { IconLogoVerde } from '@ui/icons/IconLogoVerde'
import { APP_TITLE } from '@constants/seo'
import { Route } from '@enums/Route'
import styles from './Logo.module.scss'

const satisfy = Satisfy({
  preload: false,
  weight: '400',
  subsets: ['latin']
})

export function Logo() {
  return (
    <div className={styles.root}>
      <Link href={Route.HOME} className={styles.link}>
        <IconLogoVerde className={styles.logo} />
      </Link>
      <h2 className={cn(styles.title, satisfy.className)}>{APP_TITLE}</h2>
    </div>
  )
}
