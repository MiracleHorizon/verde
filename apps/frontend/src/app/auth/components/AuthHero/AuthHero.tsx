'use client'

import { usePathname } from 'next/navigation'

import { AuthBackHome } from './AuthBackHome'
import { getAuthHeroTitle } from './getAuthHeroTitle'
import type { Route } from '@enums/Route'
import styles from './AuthHero.module.scss'

export function AuthHero() {
  const pathname = usePathname()

  return (
    <section className={styles.root}>
      <AuthBackHome />
      <article className={styles.titleArticle}>
        <h1 className={styles.title}>{getAuthHeroTitle(pathname as Route)}</h1>
      </article>
    </section>
  )
}
