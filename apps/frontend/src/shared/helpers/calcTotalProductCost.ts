// NOTE: This is a mock value calculation.

export const MAX_PERCENT = 100
export const MIN_COST = 1 // In russian rubles.

/**
 * @param fullPrice - the value of the full price of the product (In russian rubles).
 * @param discountPercentage - the value of the discount on the product as a percentage.
 */
export function calcTotalProductCost(
  fullPrice: number,
  discountPercentage: number
): number {
  if (discountPercentage <= 0) {
    return fullPrice
  }

  if (discountPercentage >= MAX_PERCENT) {
    return MIN_COST
  }

  return Math.ceil(fullPrice - (fullPrice / MAX_PERCENT) * discountPercentage)
}
