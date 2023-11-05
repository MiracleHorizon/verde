import type { NextRequest } from 'next/server'

import { RouteAccessHandler } from '@utils/RouteAccessHandler.ts'

export function middleware(req: NextRequest) {
  const routesAccessHandler = new RouteAccessHandler(req)

  return routesAccessHandler.handleRouteAccess()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
