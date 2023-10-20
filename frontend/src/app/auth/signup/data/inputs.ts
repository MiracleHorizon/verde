import {
  emailRegex,
  passwordLengthValidation,
  passwordValidate
} from '@app/auth/validation'
import type { ReactHookFormInput } from '@interfaces/ReactHookFormInput'
import type { SignupPayload } from '../interfaces'

export const signupInputs: ReactHookFormInput<SignupPayload>[] = [
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
    fieldName: 'name',
    type: 'text',
    placeholder: 'Как к Вам обращаться?',
    autoComplete: 'given-name',
    registerOptions: {
      required: {
        value: true,
        message: 'Пожалуйста, укажите свое имя.'
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
        message: 'Пожалуйста, придумайте пароль.'
      },
      validate: passwordValidate
    }
  },
  {
    fieldName: 'passwordRepeat',
    type: 'password',
    placeholder: 'Подтвердите пароль',
    registerOptions: {
      ...passwordLengthValidation,
      validate: (value: string, formValues: SignupPayload) =>
        value === formValues.password || 'Пароли не совпадают.'
    }
  }
]
