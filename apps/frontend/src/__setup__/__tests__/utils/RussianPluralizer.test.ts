import { describe, expect, it } from '@jest/globals'

import { RussianPluralizer } from '@utils/RussianPluralizer'

const productPluralizer = new RussianPluralizer({
  singularForm: 'товар',
  fewForm: 'товара',
  pluralForm: 'товаров'
})

describe('RussianPluralizer.ts', () => {
  it('should return the correct singular form', () => {
    expect(productPluralizer.pluralizeNoun(1)).toBe('1 товар')
    expect(productPluralizer.pluralizeNoun(21)).toBe('21 товар')
    expect(productPluralizer.pluralizeNoun(301)).toBe('301 товар')
    expect(productPluralizer.pluralizeNoun(1001)).toBe('1001 товар')
  })

  it('should return the correct few form', () => {
    expect(productPluralizer.pluralizeNoun(2)).toBe('2 товара')
    expect(productPluralizer.pluralizeNoun(4)).toBe('4 товара')
    expect(productPluralizer.pluralizeNoun(33)).toBe('33 товара')
    expect(productPluralizer.pluralizeNoun(492)).toBe('492 товара')
  })

  it('should return the correct plural form', () => {
    expect(productPluralizer.pluralizeNoun(5)).toBe('5 товаров')
    expect(productPluralizer.pluralizeNoun(11)).toBe('11 товаров')
    expect(productPluralizer.pluralizeNoun(20)).toBe('20 товаров')
    expect(productPluralizer.pluralizeNoun(67)).toBe('67 товаров')
    expect(productPluralizer.pluralizeNoun(840)).toBe('840 товаров')
    expect(productPluralizer.pluralizeNoun(1996)).toBe('1996 товаров')
  })

  it('should throw an error for num greater than MAX_SAFE_INTEGER', () => {
    expect(() =>
      productPluralizer.pluralizeNoun(Number.MAX_SAFE_INTEGER + 1)
    ).toThrow('Value must be less than MAX_SAFE_INTEGER')
  })

  it('should throw an error for non-integer numbers', () => {
    expect(() => productPluralizer.pluralizeNoun(1.2)).toThrow(
      'Value must be an integer'
    )
    expect(() => productPluralizer.pluralizeNoun(49.01)).toThrow(
      'Value must be an integer'
    )
  })

  it('should throw an error for negative numbers', () => {
    expect(() => productPluralizer.pluralizeNoun(-1)).toThrow()
    expect(() => productPluralizer.pluralizeNoun(-10)).toThrow()
  })
})
