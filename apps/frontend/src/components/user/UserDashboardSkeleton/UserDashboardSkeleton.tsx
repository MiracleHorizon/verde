import styles from './UserDashboardSkeleton.module.scss'

export function UserDashboardSkeleton() {
  return (
    <div className={styles.root}>
      <div className={styles.buttonOrders} />
      <div className={styles.userCartSummary} />
      <div className={styles.avatar} />
    </div>
  )
}
