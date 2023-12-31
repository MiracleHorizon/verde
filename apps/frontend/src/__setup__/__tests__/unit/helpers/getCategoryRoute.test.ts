import { describe, expect, it } from 'vitest'

import { getCategoryRoute } from '@helpers/getCategoryRoute'
import { Route } from '@enums/Route'

describe('getCategoryRoute', () => {
  it('should return correct generated link to the category with the passed id', () => {
    const id1 = 4
    const route1 = getCategoryRoute(id1)
    expect(route1.endsWith(id1.toString())).toBeTruthy()
    expect(route1.startsWith(Route.CATEGORY)).toBeTruthy()
    expect(route1).toBe(`${Route.CATEGORY}/${id1}`)

    const id2 = '1'
    const route2 = getCategoryRoute(id2)
    expect(route2.endsWith(id2.toString())).toBeTruthy()
    expect(route2.startsWith(Route.CATEGORY)).toBeTruthy()
    expect(route2).toBe(`${Route.CATEGORY}/${id2}`)

    const id3 = 27
    const route3 = getCategoryRoute(id3)
    expect(route3.endsWith(id3.toString())).toBeTruthy()
    expect(route3.startsWith(Route.CATEGORY)).toBeTruthy()
    expect(route3).toBe(`${Route.CATEGORY}/${id3}`)
  })
})
