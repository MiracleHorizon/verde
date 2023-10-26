// NOTE: This is a mock value calculation.

export const MORNING_DELIVERY_COST = 149
export const DAY_DELIVERY_COST = 199
export const EVENING_DELIVERY_COST = 299
export const NIGHT_DELIVERY_COST = 399

export function calcDeliveryCostByDaytime(): number {
  const currentDate = new Date()
  const currentHour = currentDate.getHours()

  if (currentHour >= 6 && currentHour < 12) {
    return MORNING_DELIVERY_COST
  }

  if (currentHour >= 12 && currentHour < 18) {
    return DAY_DELIVERY_COST
  }

  if (currentHour >= 18 && currentHour < 24) {
    return EVENING_DELIVERY_COST
  }

  return NIGHT_DELIVERY_COST
}
