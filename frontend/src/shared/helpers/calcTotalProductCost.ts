// NOTE: This is a mock value calculation.

export const MAX_PERCENT = 100
export const MIN_COST = 1 // In russian rubles.

/**
 * @param fullPrice - the value of the full price of the product.
 * @param discount - the value of the discount on the product as a percentage.
 */
export function calcTotalProductCost(fullPrice: number, discount: number) {
  if (discount <= 0) {
    return {
      totalCost: fullPrice,
      withDiscount: false
    }
  }

  if (discount >= MAX_PERCENT) {
    return {
      totalCost: MIN_COST,
      withDiscount: true
    }
  }

  const totalCost = Math.ceil(fullPrice - (fullPrice / MAX_PERCENT) * discount)

  return {
    totalCost,
    withDiscount: true
  }
}
