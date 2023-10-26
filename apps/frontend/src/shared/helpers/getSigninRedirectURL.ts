import { Route } from '@enums/Route'

export function getSigninRedirectURL(): string | null {
  if (typeof window === 'undefined') {
    return null
  }

  const { pathname, search } = window.location
  const searchParams = new URLSearchParams()
  searchParams.set('from', pathname + search)

  return Route.SIGNIN + '?' + searchParams.toString()
}
