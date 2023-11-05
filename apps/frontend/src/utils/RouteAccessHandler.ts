import { NextRequest, NextResponse } from 'next/server'
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import { RouteStatusHandler } from './RouteStatusHandler'
import { USER_SESSION_KEY } from '@constants/browserStorages'
import { Route } from '@enums/Route'

export class RouteAccessHandler {
  private readonly nextRequest: NextRequest
  private readonly routeStatusHandler: RouteStatusHandler

  constructor(nextRequest: NextRequest) {
    this.nextRequest = nextRequest
    this.routeStatusHandler = new RouteStatusHandler(this.routePathname)
  }

  public async handleRouteAccess(): Promise<NextResponse> {
    const userSessionCookie = this.extractUserSessionCookie()
    const isAuthorizedRoute = this.routeStatusHandler.isAuthorizedRoute()
    const isUnauthorizedRoute = this.routeStatusHandler.isUnauthorizedRoute()

    if (!userSessionCookie) {
      if (isAuthorizedRoute) {
        return this.signinRouteRedirect
      }

      return NextResponse.next()
    }

    const isSessionActive = userSessionCookie.value === 'true'

    if (!isSessionActive) {
      if (isAuthorizedRoute) {
        return this.signinRouteRedirect
      }

      return NextResponse.next()
    }

    if (isUnauthorizedRoute) {
      return this.homeRouteRedirect
    }

    return NextResponse.next()
  }

  private extractUserSessionCookie(): RequestCookie | null {
    return this.nextRequest.cookies.get(USER_SESSION_KEY) || null
  }

  private get routePathname(): Route {
    return this.nextRequest.nextUrl.pathname as Route
  }

  private get homeRouteRedirect(): NextResponse {
    return this.getNextResponseRedirect(this.homeRouteUrl)
  }

  private get signinRouteRedirect(): NextResponse {
    return this.getNextResponseRedirect(this.signinRouteURL)
  }

  private getNextResponseRedirect(routeUrl: URL): NextResponse {
    return NextResponse.redirect(routeUrl)
  }

  private get homeRouteUrl(): URL {
    return this.generateRouteURL(Route.HOME)
  }

  private get signinRouteURL(): URL {
    return this.generateRouteURL(Route.SIGNIN)
  }

  private generateRouteURL(route: Route): URL {
    return new URL(route, this.nextRequest.url)
  }
}
