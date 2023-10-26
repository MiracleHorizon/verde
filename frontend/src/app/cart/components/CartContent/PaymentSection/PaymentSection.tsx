import { PaymentSectionContent } from './PaymentSectionContent'
import { PaymentSectionFooter } from './PaymentSectionFooter'
import styles from './PaymentSection.module.scss'

export function PaymentSection() {
  return (
    <section className={styles.root}>
      <PaymentSectionContent />
      <PaymentSectionFooter />
    </section>
  )
}
