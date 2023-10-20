'use client'

import { AuthForm } from '../components'
import { signupInputs } from './data'
import type { SignupPayload } from './interfaces'

const defaultValues: SignupPayload = {
  name: '',
  email: '',
  password: '',
  passwordRepeat: ''
}

export default function SignupForm() {
  function handleSignup(payload: SignupPayload) {
    console.log('signup', payload)
  }

  return (
    <AuthForm
      inputs={signupInputs}
      defaultValues={defaultValues}
      onSubmit={handleSignup}
    />
  )
}
