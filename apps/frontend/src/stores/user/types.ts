import type { User } from '@interfaces/User'

export type Store = State & Computed & Actions

/* eslint no-unused-vars: 0 */
export interface State {
  user: User | null
}

interface Computed {
  isAuth: () => boolean
}

interface Actions {
  signin: (user: User) => void
  signout: VoidFunction
}
