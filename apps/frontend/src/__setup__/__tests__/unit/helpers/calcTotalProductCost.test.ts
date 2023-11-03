import { describe, expect, it } from 'vitest'

import {
  calcTotalProductCost,
  MAX_PERCENT,
  MIN_COST
} from '@helpers/calcTotalProductCost'

describe('calcTotalProductCost', () => {
  it('should calculate the total cost of the product from the full price', () => {
    const fullPrice1 = 100
    const discountPercentage1 = 30
    const result1 = calcTotalProductCost(fullPrice1, discountPercentage1)
    expect(result1).not.toBe(fullPrice1)
    expect(result1).toBe(70)

    const fullPrice2 = 384
    const discountPercentage2 = 0
    const result2 = calcTotalProductCost(fullPrice2, discountPercentage2)
    expect(result2).toBe(fullPrice2)

    const fullPrice3 = 203
    const discountPercentage3 = MAX_PERCENT + 10
    const result3 = calcTotalProductCost(fullPrice3, discountPercentage3)
    expect(result1).not.toBe(fullPrice3)
    expect(result3).toBe(MIN_COST)
  })
})
