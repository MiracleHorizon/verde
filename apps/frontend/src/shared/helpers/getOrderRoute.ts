import { Route } from '@enums/Route'

/**
 * @param orderId - the identifier of the order to be included in the route.
 */
export function getOrderRoute(orderId: number | string): string {
  return Route.ORDERS + '/' + orderId
}
