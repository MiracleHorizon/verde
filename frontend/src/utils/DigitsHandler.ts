export class DigitsHandler {
  public static getLastDigit(num: number): number {
    if (isNaN(num)) {
      return 0
    }

    const digits = DigitsHandler.getDigits(num)

    if (digits.length <= 1) {
      return num
    }

    return digits[digits.length - 1]
  }

  public static getNLastDigits(num: number, n: number): number {
    if (isNaN(num)) {
      return 0
    }

    if (n < 0) {
      return num
    }

    const digits = DigitsHandler.getDigits(num)

    if (digits.length < n) {
      return num
    }

    return +digits.slice(-n).join('')
  }

  public static getDigits(num: number): number[] {
    if (isNaN(num)) {
      return []
    }

    return num
      .toString()
      .split('')
      .filter(value => Number.isInteger(+value))
      .map(digit => +digit)
  }
}
