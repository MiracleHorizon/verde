export interface User {
  id: string
  cartId: string
  email: string
  name: string
  phoneNumber: string | null
  // NOTE: Flags for implementing mock authorization.
  _isSessionActive: boolean
  _encryptedPassword: string
}
