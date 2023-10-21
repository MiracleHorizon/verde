'use client'

import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@ui/Button'
import { IconSignin } from '@ui/icons/IconSignin'
import { getSigninRedirectURL } from '@helpers/getSigninRedirectURL'
import { Route } from '@enums/Route'
import type { ClassNameProps } from '@interfaces/ClassNameProps'

export function ButtonSignin(props: ClassNameProps) {
  const router = useRouter()
  const pathname = usePathname()

  const navigateToSignin = useCallback(() => {
    if (pathname === Route.HOME) {
      return router.push(Route.SIGNIN)
    }

    const signinRedirectURL = getSigninRedirectURL()

    if (!signinRedirectURL) {
      return router.push(Route.SIGNIN)
    }

    router.push(signinRedirectURL)
  }, [pathname, router])

  return (
    <Button
      variant='secondary'
      title='Войти'
      leadIcon={<IconSignin />}
      onClick={navigateToSignin}
      {...props}
    />
  )
}
