import { ButtonPay } from '@components/ButtonPay'
import { useOrderCost } from '@stores/hooks/useOrderCost'
import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import styles from './PaymentSectionFooter.module.scss'

export function PaymentSectionFooter() {
  const { orderCost, minOrderCostShortage, isMinOrderCostExceeded } =
    useOrderCost()

  return (
    <footer className={styles.root}>
      {isMinOrderCostExceeded ? (
        <ButtonPay
          title='Оплатить'
          cost={orderCost}
          className={styles.buttonPay}
        />
      ) : (
        <ButtonPay
          title={`Добавьте еще на ${formatCurrencyWithThinSpace(
            minOrderCostShortage
          )}`}
          isDisabled
          className={styles.buttonPay}
        />
      )}
    </footer>
  )
}
