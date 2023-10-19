import { create } from 'zustand'

import type { State, Store } from './types.ts'

const initialState: State = {
  user: null
}

export const useUserStore = create<Store>((set, get) => ({
  /* State */
  ...initialState,

  /* Computed */
  isAuth: () => Boolean(get().user),

  /* Actions */
  signin: user => set({ user }),
  signout: () => ({ user: null })
}))
