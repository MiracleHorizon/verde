import { getCategoryRoute } from './getCategoryRoute'

/**
 * @param categoryId - the identifier of the parent product category to be
 * included in the route.
 * @param subcategoryId - the identifier of the product subcategory to be
 * included in the route.
 */
export function getSubcategoryRoute(
  categoryId: number | string,
  subcategoryId: number | string
): string {
  const categoryRoute = getCategoryRoute(categoryId)

  return categoryRoute + '?subcategory=' + subcategoryId
}
