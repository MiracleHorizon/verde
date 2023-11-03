import { DigitsHandler } from '@utils/DigitsHandler'
import { ruNumberFormatter } from '@utils/NumberFormatter'
import { setThinSpaceBeforeCurrencySign } from './setThinSpaceBeforeCurrencySign'

const MAX_PENNIES = 2

/**
 * @param value - the numeric currency value for the formatting.
 */
export function formatCurrencyWithThinSpace(value: number): string {
  const formattedValue = ruNumberFormatter.formatCurrency(value, {
    maximumSignificantDigits: DigitsHandler.getDigitCount(value) + MAX_PENNIES
  })

  return setThinSpaceBeforeCurrencySign(formattedValue)
}
