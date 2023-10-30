import { FullWidthSpinner } from '@ui/spinners/FullWidthSpinner'
import styles from './OrderViewLoader.module.scss'

export function OrderViewLoader() {
  return (
    <div className={styles.root}>
      <FullWidthSpinner />
    </div>
  )
}
