import { Currency, Locale } from './types.ts'

export class NumberFormatter {
  private readonly locale: Locale
  private readonly currency: Currency

  constructor(locale: Locale) {
    this.locale = locale

    switch (locale) {
      case Locale.RU:
        this.currency = Currency.RUB
        break
      case Locale.EN:
        this.currency = Currency.USD
        break
    }
  }

  public formatCurrency(
    value: number,
    options?: Omit<Intl.NumberFormatOptions, 'style' | 'currency'>
  ): string {
    if (isNaN(value)) {
      return ''
    }

    const numberFormat = Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: this.currency,
      ...options
    })

    return numberFormat.format(value)
  }
}

export const ruNumberFormatter = new NumberFormatter(Locale.RU)
