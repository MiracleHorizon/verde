import type { Metadata } from 'next'

import { SigninForm } from './SigninForm'

export const metadata: Metadata = {
  title: 'Вход'
}

export default function SigninPage() {
  return <SigninForm />
}
