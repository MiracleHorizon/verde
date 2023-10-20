import type { Metadata } from 'next'

import { SignupForm } from './SignupForm'
import { writePageTitle } from '@helpers/writePageTitle'

export const metadata: Metadata = {
  title: writePageTitle('Регистрация')
}

export default function SignupPage() {
  return <SignupForm />
}
