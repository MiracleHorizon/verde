import { describe, expect, it } from '@jest/globals'

import { getSubcategoryRoute } from '@helpers/getSubcategoryRoute.ts'
import { Route } from '@shared/@types/Route.ts'

describe('getCategoryRoute.ts', () => {
  it('should return the generated link to the category with the passed id', () => {
    const categoryId1 = 4321
    const subcategoryId1 = 93
    const route1 = getSubcategoryRoute(categoryId1, subcategoryId1)
    expect(route1.endsWith(subcategoryId1.toString())).toBeTruthy()
    expect(route1.startsWith(Route.CATEGORY)).toBeTruthy()
    expect(route1).toBe(
      `${Route.CATEGORY}/${categoryId1}?subcategory=${subcategoryId1}`
    )

    const categoryId2 = 4321
    const subcategoryId2 = 93
    const route2 = getSubcategoryRoute(categoryId2, subcategoryId2)
    expect(route2.endsWith(subcategoryId2.toString())).toBeTruthy()
    expect(route2.startsWith(Route.CATEGORY)).toBeTruthy()
    expect(route2).toBe(
      `${Route.CATEGORY}/${categoryId2}?subcategory=${subcategoryId2}`
    )

    const categoryId3 = 4321
    const subcategoryId3 = 93
    const route3 = getSubcategoryRoute(categoryId3, subcategoryId3)
    expect(route3.endsWith(subcategoryId3.toString())).toBeTruthy()
    expect(route3.startsWith(Route.CATEGORY)).toBeTruthy()
    expect(route3).toBe(
      `${Route.CATEGORY}/${categoryId3}?subcategory=${subcategoryId3}`
    )
  })
})
