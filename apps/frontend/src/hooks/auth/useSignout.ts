'use client'

import { useCallback } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { useUserStore } from '@stores/user'
import { useCartStore } from '@stores/cart'
import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import { USER_KEY } from '@constants/browserStorages'
import { Route } from '@enums/Route'
import type { User } from '@interfaces/user/User'

export function useSignout() {
  const signout = useUserStore(state => state.signout)
  const deinitializeCart = useCartStore(state => state.deinitialize)

  const pathname = usePathname()
  const router = useRouter()

  const handleSignout = useCallback(() => {
    const localStorageProvider = new BrowserStorageProvider(localStorage)
    const user = localStorageProvider.get<User>(USER_KEY)

    if (!user) return

    user._isSessionActive = false
    localStorageProvider.set(USER_KEY, user)

    signout()
    deinitializeCart()

    if (pathname === Route.CART || pathname === Route.ORDERS) {
      router.replace(Route.HOME)
    }
  }, [signout, deinitializeCart, router, pathname])

  return { handleSignout }
}
