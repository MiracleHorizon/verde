import { BrowserStorageProvider } from '@utils/BrowserStorageProvider'
import {
  USER_CART_KEY,
  USER_KEY,
  USER_ORDERS_KEY
} from '@constants/browserStorages'
import type { User } from '@interfaces/user/User'
import type { UserCart } from '@interfaces/user/UserCart'
import type { SignupPayload } from '@interfaces/auth/SignupPayload'

export function createUser({
  name,
  email,
  password
}: Omit<SignupPayload, 'passwordRepeat'>) {
  const localStorageProvider = new BrowserStorageProvider(localStorage)

  // Preliminary guaranteed cleaning of already stored user data.
  localStorageProvider.removeMultiply([
    USER_KEY,
    USER_CART_KEY,
    USER_ORDERS_KEY
  ])

  // Creating a new user with an activated session.
  const userCart: UserCart = {
    id: crypto.randomUUID(),
    products: []
  }
  const user: User = {
    id: crypto.randomUUID(),
    cartId: userCart.id,
    name,
    email,
    phoneNumber: null,
    _isSessionActive: true,
    _encryptedPassword: password
  }

  localStorageProvider.set(USER_KEY, user)
  localStorageProvider.set(USER_CART_KEY, userCart)
  localStorageProvider.set(USER_ORDERS_KEY, [])

  return { user, userCart }
}
