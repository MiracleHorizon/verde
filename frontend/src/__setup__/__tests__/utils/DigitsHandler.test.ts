import { describe, expect, it } from '@jest/globals'

import { DigitsHandler } from '@utils/DigitsHandler.ts'

describe('DigitsHandler.ts', () => {
  it('should return the last one digit of the number', () => {
    expect(DigitsHandler.getLastDigit(0)).toBe(0)
    expect(DigitsHandler.getLastDigit(30)).toBe(0)
    expect(DigitsHandler.getLastDigit(548)).toBe(8)
    expect(DigitsHandler.getLastDigit(-213)).toBe(3)
    expect(DigitsHandler.getLastDigit(-332.347)).toBe(7)
    expect(DigitsHandler.getLastDigit(121.32442)).toBe(2)
    expect(DigitsHandler.getLastDigit(NaN)).toBe(0)
  })

  it('should return the last N digits of the number', () => {
    expect(DigitsHandler.getNLastDigits(0, 4)).toBe(0)
    expect(DigitsHandler.getNLastDigits(0, -4)).toBe(0)
    expect(DigitsHandler.getNLastDigits(4, 3)).toBe(4)
    expect(DigitsHandler.getNLastDigits(59, -1)).toBe(59)
    expect(DigitsHandler.getNLastDigits(-49, 3)).toBe(-49)
    expect(DigitsHandler.getNLastDigits(549, 4)).toBe(549)
    expect(DigitsHandler.getNLastDigits(3932, 4)).toBe(3932)
    expect(DigitsHandler.getNLastDigits(1275, 2)).toBe(75)
    expect(DigitsHandler.getNLastDigits(943.239, 3)).toBe(239)
    expect(DigitsHandler.getNLastDigits(321.437, 5)).toBe(21437)
    expect(DigitsHandler.getNLastDigits(NaN, 5)).toBe(0)
  })
})
