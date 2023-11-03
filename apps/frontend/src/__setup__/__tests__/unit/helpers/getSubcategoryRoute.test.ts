import { describe, expect, it } from 'vitest'

import { getSubcategoryRoute } from '@helpers/getSubcategoryRoute'
import { Route } from '@enums/Route'

describe('getSubcategoryRoute', () => {
  it('should return correct generated link to the subcategory with the passed id', () => {
    const categoryId1 = 39
    const subcategoryId1 = 231
    const route1 = getSubcategoryRoute(categoryId1, subcategoryId1)
    expect(route1.endsWith(subcategoryId1.toString())).toBeTruthy()
    expect(route1.startsWith(Route.CATEGORY)).toBeTruthy()
    expect(route1).toBe(
      `${Route.CATEGORY}/${categoryId1}?subcategory=${subcategoryId1}`
    )

    const categoryId2 = '3dsudeyd43u'
    const subcategoryId2 = '4382dasmj'
    const route2 = getSubcategoryRoute(categoryId2, subcategoryId2)
    expect(route2.endsWith(subcategoryId2.toString())).toBeTruthy()
    expect(route2.startsWith(Route.CATEGORY)).toBeTruthy()
    expect(route2).toBe(
      `${Route.CATEGORY}/${categoryId2}?subcategory=${subcategoryId2}`
    )

    const categoryId3 = 'dsamjg421i9dsa'
    const subcategoryId3 = 93
    const route3 = getSubcategoryRoute(categoryId3, subcategoryId3)
    expect(route3.endsWith(subcategoryId3.toString())).toBeTruthy()
    expect(route3.startsWith(Route.CATEGORY)).toBeTruthy()
    expect(route3).toBe(
      `${Route.CATEGORY}/${categoryId3}?subcategory=${subcategoryId3}`
    )
  })
})
