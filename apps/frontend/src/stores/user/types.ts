import type { User } from '@interfaces/user/User'

export type Store = State & Computed & Actions

export interface State {
  user: User | null
}

interface Computed {
  isAuth: () => boolean
}

/* eslint no-unused-vars: 0 */
interface Actions {
  signin: (user: User) => void
  signout: VoidFunction
}
