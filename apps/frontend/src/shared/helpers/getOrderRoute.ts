import { Route } from '@enums/Route'

export function getOrderRoute(orderId: number | string): string {
  return Route.ORDERS + '/' + orderId
}
