'use client'

import { AuthForm } from '../components'
import { useSignin } from './hooks'
import { signinInputs } from './data'
import type { SigninPayload } from './interfaces'

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
      onSubmit={handleSignin}
      submitError={error}
    />
  )
}
