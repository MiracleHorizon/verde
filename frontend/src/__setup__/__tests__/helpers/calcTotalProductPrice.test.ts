import { describe, expect, it } from '@jest/globals'

import {
  calcTotalProductPrice,
  MAX_PERCENT,
  MIN_PRICE
} from '@helpers/calcTotalProductPrice.ts'

describe('calcTotalProductPrice.ts', () => {
  it('should calculate the total price of the product from the full price and the discount percentage', () => {
    const fullPrice1 = 100
    const discount1 = 30
    const result1 = calcTotalProductPrice(fullPrice1, discount1)
    expect(result1.withDiscount).toBeTruthy()
    expect(result1.totalPrice).not.toBe(fullPrice1)
    expect(result1.totalPrice).toBe(70)

    const fullPrice2 = 384
    const discount2 = 0
    const result2 = calcTotalProductPrice(fullPrice2, discount2)
    expect(result2.withDiscount).toBeFalsy()
    expect(result2.totalPrice).toBe(fullPrice2)

    const fullPrice3 = 203
    const discount3 = MAX_PERCENT + 10
    const result3 = calcTotalProductPrice(fullPrice3, discount3)
    expect(result3.withDiscount).toBeTruthy()
    expect(result3.totalPrice).toBe(MIN_PRICE)
  })
})
