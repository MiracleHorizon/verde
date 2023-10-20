import { emailRegex, passwordLengthValidation } from '@app/auth/validation'
import type { ReactHookFormInput } from '@interfaces/ReactHookFormInput'
import type { SigninPayload } from '../interfaces'

export const signinInputs: ReactHookFormInput<SigninPayload>[] = [
  {
    fieldName: 'email',
    type: 'email',
    placeholder: 'Введите Эл. почту',
    autoComplete: 'email',
    registerOptions: {
      required: {
        value: true,
        message: 'Пожалуйста, укажите свою Эл. почту.'
      },
      pattern: {
        value: emailRegex,
        message: 'Пожалуйста, укажите корректное значение электронной почты.'
      }
    }
  },
  {
    fieldName: 'password',
    type: 'password',
    placeholder: 'Введите пароль',
    registerOptions: {
      ...passwordLengthValidation,
      required: {
        value: true,
        message: 'Пожалуйста, введите свой пароль.'
      }
    }
  }
]
