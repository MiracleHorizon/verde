'use client'

import { AuthForm } from '../components/AuthForm'
import { signupInputs } from './inputs'
import type { SignupPayload } from '@interfaces/SignupPayload'

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
