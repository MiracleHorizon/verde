'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { useUserStore } from '@stores/user'
import { useCartStore } from '@stores/cart'
import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { USER_CART_KEY, USER_KEY } from '@constants/browserStorages'
import { Route } from '@enums/Route'
import type { User } from '@interfaces/User'
import type { UserCart } from '@interfaces/UserCart'
import type { SignupPayload } from '../interfaces'

export function useSignup() {
  const signin = useUserStore(state => state.signin)
  const initializeUserCart = useCartStore(state => state.initialize)

  const router = useRouter()

  const handleSignup = useCallback(
    ({ name, email, password }: SignupPayload) => {
      const localStorageProvider = new BrowserStorageProvider(localStorage)

      // Preliminary guaranteed cleaning of already stored user data.
      localStorageProvider.removeMultiply([USER_KEY, USER_CART_KEY])

      // Creating a new user with an activated session.
      const userCart: UserCart = {
        id: Math.random() * 100,
        products: []
      }
      const user: User = {
        id: Math.random() * 100,
        cartId: userCart.id,
        name,
        email,
        phoneNumber: null,
        _isSessionActive: true,
        _encryptedPassword: password
      }

      localStorageProvider.set(USER_KEY, user)
      localStorageProvider.set(USER_CART_KEY, userCart)

      signin(user)
      initializeUserCart(userCart)

      router.replace(Route.HOME)
    },
    [signin, initializeUserCart, router]
  )

  return { handleSignup }
}
