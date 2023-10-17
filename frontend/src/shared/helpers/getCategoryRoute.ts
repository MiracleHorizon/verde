import { Route } from '@shared/@types/Route.ts'

export function getCategoryRoute(categoryId: number | string): string {
  return Route.CATEGORY + '/' + categoryId
}
