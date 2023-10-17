import { describe, expect, it } from '@jest/globals'

import { CurrencySign, Locale, NumberFormatter } from '@utils/NumberFormatter'

const ruNumberFormatter = new NumberFormatter(Locale.RU)
const enNumberFormatter = new NumberFormatter(Locale.EN)

describe('NumberFormatter.ts', () => {
  it('should return the formatted currency value (ru, RUB)', () => {
    const value1 = 309
    const result = ruNumberFormatter.formatCurrency(value1)

    expect(result).toContain(value1.toString())
    expect(result).toContain(CurrencySign.RUB)
    expect(result.endsWith(CurrencySign.RUB)).toBeTruthy()

    expect(ruNumberFormatter.formatCurrency(NaN)).toBe('')
  })

  it('should return the formatted currency value (en, USD)', () => {
    const value = 238
    const result = enNumberFormatter.formatCurrency(value)

    expect(result).toContain(value.toString())
    expect(result).toContain(CurrencySign.USD)
    expect(result.startsWith(CurrencySign.USD)).toBeTruthy()

    expect(enNumberFormatter.formatCurrency(NaN)).toBe('')
  })
})
