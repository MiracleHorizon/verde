'use client'

import { useCallback, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { useUserStore } from '@stores/user'
import { useCartStore } from '@stores/cart'
import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { UnauthorizedException } from '@exceptions/UnauthorizedException'
import { NotFoundException } from '@exceptions/NotFoundException'
import { USER_CART_KEY, USER_KEY } from '@constants/browserStorages'
import { Route } from '@enums/Route'
import type { User } from '@interfaces/User'
import type { UserCart } from '@interfaces/UserCart'
import type { SigninPayload } from '@interfaces/auth/SigninPayload'

export function useSignin() {
  const [error, setError] = useState<Error | null>(null)

  const signin = useUserStore(state => state.signin)
  const initializeUserCart = useCartStore(state => state.initialize)

  const router = useRouter()
  const searchParams = useSearchParams()

  const navigateToFromPage = useCallback(() => {
    const routeFrom = searchParams.get('from')

    if (routeFrom === null) {
      return router.replace(Route.HOME)
    }

    router.replace(routeFrom)
  }, [router, searchParams])

  const handleSignin = useCallback(
    ({ email, password }: SigninPayload) => {
      const localStorageProvider = new BrowserStorageProvider(localStorage)
      const user = localStorageProvider.get<User>(USER_KEY)

      if (!user || user.email !== email) {
        return setError(new NotFoundException())
      }

      if (user._encryptedPassword !== password) {
        return setError(new UnauthorizedException())
      }

      user._isSessionActive = true

      let userCart = localStorageProvider.get<UserCart>(USER_CART_KEY)

      if (!userCart) {
        const createdUserCart = {
          id: crypto.randomUUID(),
          products: []
        }

        userCart = createdUserCart
        user.cartId = createdUserCart.id
      }

      localStorageProvider.set(USER_KEY, user)
      localStorageProvider.set(USER_CART_KEY, userCart)

      signin(user)
      initializeUserCart(userCart)

      navigateToFromPage()
    },
    [initializeUserCart, signin, navigateToFromPage]
  )

  return { handleSignin, error }
}
