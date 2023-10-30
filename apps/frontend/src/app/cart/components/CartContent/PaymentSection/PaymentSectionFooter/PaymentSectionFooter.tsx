import { ButtonPay } from '@components/ButtonPay'
import { useOrderCost } from '@stores/hooks/useOrderCost'
import { useMakeOrder } from '@stores/hooks/useMakeOrder'
import { formatCurrencyWithThinSpace } from '@helpers/formatCurrencyWithThinSpace'
import styles from './PaymentSectionFooter.module.scss'

export function PaymentSectionFooter() {
  const { orderCost, minOrderCostShortage, isMinOrderCostExceeded } =
    useOrderCost()
  const { handleMakeOrder } = useMakeOrder()

  return (
    <footer className={styles.root}>
      {isMinOrderCostExceeded ? (
        <ButtonPay
          title='Оплатить'
          cost={orderCost}
          className={styles.buttonPay}
          onClick={handleMakeOrder}
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
