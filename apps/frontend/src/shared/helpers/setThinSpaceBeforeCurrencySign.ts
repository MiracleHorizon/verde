export const THIN_SPACE = ' '

/**
 * @param value - the string value to which a thin space will be added before
 * the currency sign.
 */
export function setThinSpaceBeforeCurrencySign(value: string): string {
  const splitValue = value.split('')

  if (splitValue.length <= 1) {
    return value
  }

  const sign = splitValue.pop() ?? ''
  const trimmedValue = splitValue.join('').trim()

  return trimmedValue + THIN_SPACE + sign
}
