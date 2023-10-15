import { Route } from '@shared/@types/Route.ts'

export function getCategoryRoute(categoryId: number): string {
  return Route.CATEGORY + '/' + categoryId
}
