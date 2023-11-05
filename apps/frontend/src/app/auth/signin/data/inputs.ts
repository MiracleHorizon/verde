import {
  emailRegex,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH
} from '@app/auth/validation'
import type { ReactHookFormInput } from '@libs/react-hook-form/interfaces/ReactHookFormInput'
import type { SigninPayload } from '@interfaces/auth/SigninPayload'

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
      minLength: MIN_PASSWORD_LENGTH,
      maxLength: MAX_PASSWORD_LENGTH,
      required: {
        value: true,
        message: 'Пожалуйста, введите свой пароль.'
      }
    }
  }
]
