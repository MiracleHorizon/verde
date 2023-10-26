'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { getAuthSuggestionData } from './getAuthSuggestionData'
import { Route } from '@enums/Route'
import styles from './AuthSuggestion.module.scss'

export function AuthSuggestion() {
  const pathname = usePathname()
  const { title, linkTitle, href } = getAuthSuggestionData(pathname as Route)

  return (
    <section className={styles.root}>
      <span className={styles.title}>{title}</span>
      <Link href={href} className={styles.link}>
        {linkTitle}
      </Link>
    </section>
  )
}
