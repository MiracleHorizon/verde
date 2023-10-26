import { OrderSummary } from './OrderSummary'
import styles from './PaymentSectionContent.module.scss'

export function PaymentSectionContent() {
  return (
    <main className={styles.root}>
      <OrderSummary />
    </main>
  )
}
