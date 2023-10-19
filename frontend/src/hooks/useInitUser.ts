'use client'

import { useEffect } from 'react'
import { useIsClient } from 'usehooks-ts'

import { useCartStore } from '@stores/cart'
import { useUserStore } from '@stores/user'
import { BrowserStorageProvider } from '@utils/BrowserStorageProvider.ts'
import { USER_CART_KEY, USER_KEY } from '@shared/const/browserStorages.ts'
import type { User } from '@shared/@types/User.ts'
import type { UserCart } from '@shared/@types/UserCart.ts'

export function useInitUser() {
  const isClient = useIsClient()

  const signin = useUserStore(state => state.signin)
  const initializeUserCart = useCartStore(state => state.initialize)

  useEffect(() => {
    if (!isClient) return

    const localStorageProvider = new BrowserStorageProvider(localStorage)
    const user = localStorageProvider.get<User>(USER_KEY)

    if (!user) return

    let userCart = localStorageProvider.get<UserCart>(USER_CART_KEY)
    if (!userCart || user.cartId !== userCart.id) {
      userCart = createUserCart(user, localStorageProvider)
    }

    signin(user)
    initializeUserCart(userCart)
  }, [isClient, signin, initializeUserCart])
}

function createUserCart(
  user: User,
  storageProvider: BrowserStorageProvider
): UserCart {
  const userCart: UserCart = {
    id: Math.random() * 100,
    products: []
  }
  const updatedUser: User = {
    ...user,
    cartId: userCart.id
  }

  storageProvider.set(USER_KEY, updatedUser)
  storageProvider.set(USER_CART_KEY, userCart)

  return userCart
}
