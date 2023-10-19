import type { User } from '@shared/@types/User.ts'

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
