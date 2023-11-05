import { Route } from '@enums/Route'

export class RouteStatusHandler {
  private readonly AUTHORIZED_ROUTES: Route[] = [Route.ORDERS, Route.CART]
  private readonly UNAUTHORIZED_ROUTES: Route[] = [Route.SIGNIN, Route.SIGNUP]

  /* eslint no-unused-vars: 0 */
  constructor(private readonly routePathname: Route) {}

  public isAuthorizedRoute(): boolean {
    return (
      this.AUTHORIZED_ROUTES.includes(this.routePathname) ||
      this.checkRouteWithDynamicParams(
        this.AUTHORIZED_ROUTES,
        this.routePathname
      )
    )
  }

  public isUnauthorizedRoute(): boolean {
    return this.UNAUTHORIZED_ROUTES.includes(this.routePathname)
  }

  private checkRouteWithDynamicParams(routes: Route[], route: Route): boolean {
    return routes.some(r =>
      r === route
        ? this.routePathname === route
        : this.routePathname.startsWith(r)
    )
  }
}
