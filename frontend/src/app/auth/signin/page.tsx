import type { Metadata } from 'next'

import { SigninForm } from './SigninForm'
import { writePageTitle } from '@helpers/writePageTitle'

export const metadata: Metadata = {
  title: writePageTitle('Вход')
}

export default function SigninPage() {
  return <SigninForm />
}
