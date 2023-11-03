import { describe, expect, it } from 'vitest'

import { getOrderRoute } from '@helpers/getOrderRoute'
import { Route } from '@enums/Route'

describe('getOrderRoute', () => {
  it('should return correct generated link to the order with the passed id', () => {
    const id1 = 1
    const route1 = getOrderRoute(id1)
    expect(route1.endsWith(id1.toString())).toBeTruthy()
    expect(route1.startsWith(Route.ORDERS)).toBeTruthy()
    expect(route1).toBe(`${Route.ORDERS}/${id1}`)

    const id2 = '3218r8safsbhdshjfd'
    const route2 = getOrderRoute(id2)
    expect(route2.endsWith(id2.toString())).toBeTruthy()
    expect(route2.startsWith(Route.ORDERS)).toBeTruthy()
    expect(route2).toBe(`${Route.ORDERS}/${id2}`)

    const id3 = 'dsae2313dsa9'
    const route3 = getOrderRoute(id3)
    expect(route3.endsWith(id3.toString())).toBeTruthy()
    expect(route3.startsWith(Route.ORDERS)).toBeTruthy()
    expect(route3).toBe(`${Route.ORDERS}/${id3}`)
  })
})
