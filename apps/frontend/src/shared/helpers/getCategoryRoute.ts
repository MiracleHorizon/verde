import { Route } from '@enums/Route'

/**
 * @param categoryId - the identifier of the product category to be included
 * in the route.
 */
export function getCategoryRoute(categoryId: number | string): string {
  return Route.CATEGORY + '/' + categoryId
}
