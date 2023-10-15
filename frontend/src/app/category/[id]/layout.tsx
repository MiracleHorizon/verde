import type { PropsWithChildren } from 'react'

import { DefaultLayout } from '@components/Layout'
import { Navigation } from '@components/Navigation'
import styles from './CategoryLayout.module.scss'

export default function CategoryLayout({ children }: PropsWithChildren) {
  return (
    <DefaultLayout>
      <div>
        <div className={styles.root}>
          <Navigation />
        </div>
        <main>{children}</main>
      </div>
    </DefaultLayout>
  )
}
