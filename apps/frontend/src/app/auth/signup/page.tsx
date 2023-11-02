import type { Metadata } from 'next'

import { SignupForm } from './SignupForm'

export const metadata: Metadata = {
  title: 'Регистрация'
}

export default function SignupPage() {
  return <SignupForm />
}
