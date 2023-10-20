'use client'

import { usePathname } from 'next/navigation'

import { getAuthHeroTitle } from './getAuthHeroTitle'
import { Route } from '@enums/Route'
import styles from './AuthHero.module.scss'

export function AuthHero() {
  const pathname = usePathname()

  return (
    <section className={styles.root}>
      <article>
        <h1 className={styles.title}>{getAuthHeroTitle(pathname as Route)}</h1>
      </article>
    </section>
  )
}
