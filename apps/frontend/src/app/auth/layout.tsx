import type { PropsWithChildren } from 'react'

import { AuthHero, AuthSuggestion } from './components'
import styles from './layout.module.scss'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.root}>
      <main className={styles.content}>
        <AuthHero />
        {children}
        <AuthSuggestion />
      </main>
    </div>
  )
}
