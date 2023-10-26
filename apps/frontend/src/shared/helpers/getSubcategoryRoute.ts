import { getCategoryRoute } from './getCategoryRoute'

export function getSubcategoryRoute(
  categoryId: number | string,
  subcategoryId: number | string
): string {
  const categoryRoute = getCategoryRoute(categoryId)

  return categoryRoute + '?subcategory=' + subcategoryId
}
