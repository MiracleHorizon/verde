'use client'

import { AuthForm } from '../components'
import { useSignup } from './hooks'
import { signupInputs } from './data'
import type { SignupPayload } from './interfaces'

const defaultValues: SignupPayload = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: ''
}

export function SignupForm() {
  const { handleSignup } = useSignup()

  return (
    <AuthForm
      inputs={signupInputs}
      defaultValues={defaultValues}
      onSubmit={handleSignup}
      submitError={null}
    />
  )
}
