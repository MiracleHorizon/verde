import { Route } from '@enums/Route'

export function getCategoryRoute(categoryId: number | string): string {
  return Route.CATEGORY + '/' + categoryId
}
