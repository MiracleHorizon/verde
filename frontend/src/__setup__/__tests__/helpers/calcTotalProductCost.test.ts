import { describe, expect, it } from '@jest/globals'

import {
  calcTotalProductCost,
  MAX_PERCENT,
  MIN_COST
} from '@helpers/calcTotalProductCost'

describe('calcTotalProductCost.ts', () => {
  it('should calculate the total cost of the product from the full price and the discount percentage', () => {
    const fullPrice1 = 100
    const discount1 = 30
    const result1 = calcTotalProductCost(fullPrice1, discount1)
    expect(result1.withDiscount).toBeTruthy()
    expect(result1.totalCost).not.toBe(fullPrice1)
    expect(result1.totalCost).toBe(70)

    const fullPrice2 = 384
    const discount2 = 0
    const result2 = calcTotalProductCost(fullPrice2, discount2)
    expect(result2.withDiscount).toBeFalsy()
    expect(result2.totalCost).toBe(fullPrice2)

    const fullPrice3 = 203
    const discount3 = MAX_PERCENT + 10
    const result3 = calcTotalProductCost(fullPrice3, discount3)
    expect(result3.withDiscount).toBeTruthy()
    expect(result3.totalCost).toBe(MIN_COST)
  })
})
