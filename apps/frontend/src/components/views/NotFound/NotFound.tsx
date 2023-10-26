import { NotFoundMain } from './NotFoundMain'
import { NotFoundImage } from './NotFoundImage'
import styles from './NotFound.module.scss'

export function NotFoundView() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <NotFoundMain />
        <NotFoundImage />
      </div>
    </div>
  )
}
