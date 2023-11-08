import Link from 'next/link'

import { IconLogoVerde } from '@ui/icons/IconLogoVerde'
import { Route } from '@enums/Route'
import styles from './AuthBackHome.module.scss'

export function AuthBackHome() {
  return (
    <Link href={Route.HOME} className={styles.root}>
      <IconLogoVerde className={styles.logo} />
    </Link>
  )
}
