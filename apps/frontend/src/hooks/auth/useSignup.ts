'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { useUserStore } from '@stores/user'
import { useCartStore } from '@stores/cart'
import { createUser } from '@helpers/createUser'
import { Route } from '@enums/Route'
import type { SignupPayload } from '@interfaces/auth/SignupPayload'

export function useSignup() {
  const signin = useUserStore(state => state.signin)
  const initializeUserCart = useCartStore(state => state.initialize)

  const router = useRouter()

  const handleSignup = useCallback(
    (payload: Omit<SignupPayload, 'passwordRepeat'>) => {
      const { user, userCart } = createUser(payload)

      signin(user)
      initializeUserCart(userCart)

      router.replace(Route.HOME)
    },
    [signin, initializeUserCart, router]
  )

  return { handleSignup }
}
