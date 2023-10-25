interface Constructor {
  singularForm: string
  fewForm: string
  pluralForm: string
}

export class RussianPluralizer {
  private readonly FEW_FORM_NUMERALS: number[] = [2, 3, 4]

  private readonly singularForm: string
  private readonly fewForm: string
  private readonly pluralForm: string

  constructor({ singularForm, fewForm, pluralForm }: Constructor) {
    this.singularForm = singularForm
    this.fewForm = fewForm
    this.pluralForm = pluralForm
  }

  public pluralizeNoun(num: number): string {
    const pluralizedNoun = this.getPluralizedNoun(num)
    return `${num} ${pluralizedNoun}`
  }

  private getPluralizedNoun(num: number): string {
    if (num > Number.MAX_SAFE_INTEGER) {
      throw new Error('Value must be less than MAX_SAFE_INTEGER')
    }

    if (!Number.isInteger(num)) {
      throw new Error('Value must be an integer')
    }

    if (num < 0) {
      throw new Error('Value must be positive')
    }

    const nMod100 = num % 100
    if (nMod100 >= 11 && nMod100 <= 20) {
      return this.pluralForm
    }

    const nMod10 = num % 10

    if (nMod10 === 1) {
      return this.singularForm
    }

    if (this.FEW_FORM_NUMERALS.includes(nMod10)) {
      return this.fewForm
    }

    return this.pluralForm
  }
}
