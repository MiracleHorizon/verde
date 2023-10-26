import cn from 'classnames'

import { roboto } from '@styles/fonts'
import { Navigation } from '@components/Navigation'
import styles from './NavigationAside.module.scss'

export function NavigationAside() {
  return (
    <aside className={styles.root}>
      <h4 className={cn(styles.title, roboto.className)}>Каталог</h4>
      <Navigation />
    </aside>
  )
}
