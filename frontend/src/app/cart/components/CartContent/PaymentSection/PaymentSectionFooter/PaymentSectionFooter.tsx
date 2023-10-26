import { ButtonPay } from '@components/ButtonPay'
import { useOrderCost } from '@stores/hooks/useOrderCost'
import { ruNumberFormatter } from '@utils/NumberFormatter'
import { DigitsHandler } from '@utils/DigitsHandler'
import { setThinSpaceBeforeCurrencySign } from '@helpers/setThinSpaceBeforeCurrencySign'
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
          title={`Добавьте еще на ${setThinSpaceBeforeCurrencySign(
            ruNumberFormatter.formatCurrency(minOrderCostShortage, {
              maximumSignificantDigits:
                DigitsHandler.getDigitCount(minOrderCostShortage) + 2
            })
          )}`}
          isDisabled
          className={styles.buttonPay}
        />
      )}
    </footer>
  )
}
