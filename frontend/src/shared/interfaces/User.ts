export interface User {
  id: number
  cartId: number
  email: string
  name: string
  phoneNumber: string | null
  // NOTE: Flags for implementing mock authorization.
  _isSessionActive: boolean
  _encryptedPassword: string
}
