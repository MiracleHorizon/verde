// NOTE: This is a mock value calculation.

export const MAX_PERCENT = 100
export const MIN_PRICE = 1 // In russian rubles.

/**
 * @param fullPrice - the value of the full price of the product.
 * @param discount - the value of the discount on the product as a percentage.
 */
export function calcTotalProductPrice(fullPrice: number, discount: number) {
  if (discount <= 0) {
    return {
      totalPrice: fullPrice,
      withDiscount: false
    }
  }

  if (discount >= MAX_PERCENT) {
    return {
      totalPrice: MIN_PRICE,
      withDiscount: true
    }
  }

  const totalPrice = Math.ceil(fullPrice - (fullPrice / MAX_PERCENT) * discount)

  return {
    totalPrice,
    withDiscount: true
  }
}
