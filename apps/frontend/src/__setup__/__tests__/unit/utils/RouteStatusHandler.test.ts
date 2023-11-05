// @vitest-environment jsdom

import { describe, expect, it } from 'vitest'

import { RouteStatusHandler } from '@utils/RouteStatusHandler'
import { getOrderRoute } from '@helpers/getOrderRoute'
import { getCategoryRoute } from '@helpers/getCategoryRoute'
import { getSubcategoryRoute } from '@helpers/getSubcategoryRoute'
import { Route } from '@enums/Route'

describe('RouteStatusHandler', () => {
  it('should return the correct values for the home route', () => {
    const route = Route.HOME
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  it('should return the correct values for the cart route', () => {
    const route = Route.CART
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isAuthorizedRoute()).toBeTruthy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  it('should return the correct values for the orders route', () => {
    const route = Route.ORDERS
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isAuthorizedRoute()).toBeTruthy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  it('should return the correct values for the orders route with dynamic params', () => {
    const route = getOrderRoute(crypto.randomUUID()) as Route
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isAuthorizedRoute()).toBeTruthy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  it('should return the correct values for the product category routes', () => {
    const route = getCategoryRoute(crypto.randomUUID()) as Route
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  it('should return the correct values for the product subcategory routes', () => {
    const route = getSubcategoryRoute(
      crypto.randomUUID(),
      crypto.randomUUID()
    ) as Route
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })

  it('should return the correct values for the signup route', () => {
    const route = Route.SIGNUP
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeTruthy()
  })

  it('should return the correct values for the signin route', () => {
    const route = Route.SIGNIN
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeTruthy()
  })

  it('should return false in all cases for a not found routes', () => {
    const route = (Route.HOME + 'some-error-route') as Route
    const routeStatusHandler = new RouteStatusHandler(route)

    expect(routeStatusHandler.isAuthorizedRoute()).toBeFalsy()
    expect(routeStatusHandler.isUnauthorizedRoute()).toBeFalsy()
  })
})
