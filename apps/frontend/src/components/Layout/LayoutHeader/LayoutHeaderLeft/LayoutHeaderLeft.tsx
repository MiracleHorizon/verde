import { Logo } from '@components/Logo'

import styles from './LayoutHeaderLeft.module.scss'

export function LayoutHeaderLeft() {
  return (
    <div className={styles.root}>
      <Logo />
    </div>
  )
}
