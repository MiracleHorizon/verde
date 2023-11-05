import { create } from 'zustand'
import Cookies from 'js-cookie'

import { USER_SESSION_KEY } from '@constants/browserStorages'
import type { State, Store } from './types'

const initialState: State = {
  user: null
}

export const useUserStore = create<Store>((set, get) => ({
  /* State */
  ...initialState,

  /* Computed */
  isAuth: () => Boolean(get().user),

  /* Actions */
  signin: user => {
    set({ user })

    if (!user._isSessionActive) return

    Cookies.set(USER_SESSION_KEY, JSON.stringify(true))
  },
  signout: () => {
    set({ user: null })

    Cookies.set(USER_SESSION_KEY, JSON.stringify(false))
  }
}))
