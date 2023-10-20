'use client'

import { AuthForm } from '../components'
import { signinInputs } from './data'
import type { SigninPayload } from './interfaces'

const defaultValues: SigninPayload = {
  email: '',
  password: ''
}

export function SigninForm() {
  function handleSignin(payload: SigninPayload) {
    console.log('signin', payload)
  }

  return (
    <AuthForm
      inputs={signinInputs}
      defaultValues={defaultValues}
      onSubmit={handleSignin}
    />
  )
}
