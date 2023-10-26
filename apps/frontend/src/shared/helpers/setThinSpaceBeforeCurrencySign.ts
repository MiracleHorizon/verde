export const THIN_SPACE = ' '

export function setThinSpaceBeforeCurrencySign(value: string): string {
  const splitValue = value.split('')

  if (splitValue.length <= 1) {
    return value
  }

  const sign = splitValue.pop() ?? ''
  const trimmedValue = splitValue.join('').trim()

  return trimmedValue + THIN_SPACE + sign
}
