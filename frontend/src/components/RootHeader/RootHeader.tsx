import type { PropsWithChildren } from 'react'

import styles from './RootHeader.module.scss'

export function RootHeader({ children }: PropsWithChildren) {
  return (
    <header className={styles.root}>
      <div className={styles.content}>{children}</div>
      <div className={styles.divider} />
    </header>
  )
}
