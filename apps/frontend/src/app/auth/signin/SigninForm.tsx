'use client'

import { AuthForm } from '../components'
import { useSignin } from '@hooks/auth/useSignin'
import { signinInputs } from './data'
import type { SigninPayload } from '@interfaces/auth/SigninPayload'

const defaultValues: SigninPayload = {
  email: '',
  password: ''
}

export function SigninForm() {
  const { handleSignin, error } = useSignin()

  return (
    <AuthForm
      inputs={signinInputs}
      defaultValues={defaultValues}
      submitTitle='Войти'
      submitError={error}
      onSubmit={handleSignin}
    />
  )
}
