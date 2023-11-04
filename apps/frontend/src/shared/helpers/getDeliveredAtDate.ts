import random from 'lodash.random'

export function getDeliveredAtDate(): string {
  const MAX_DELIVERY_TIME = 140
  const MIN_DELIVERY_TIME = 30

  const currentDate = new Date()
  const randomDeliveryTime = random(MIN_DELIVERY_TIME, MAX_DELIVERY_TIME)

  return new Date(
    currentDate.getTime() + randomDeliveryTime * 60 * 1000
  ).toString()
}
