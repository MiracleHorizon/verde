import {
  emailRegex,
  passwordLengthValidation,
  passwordValidate
} from '@app/auth/validation'
import type { ReactHookFormInput } from '@libs/react-hook-form/interfaces/ReactHookFormInput'
import type { SignupPayload } from '@interfaces/auth/SignupPayload'

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
      required: {
        value: true,
        message: 'Пожалуйста, подтвердите пароль.'
      },
      validate: (value: string, formValues: SignupPayload) =>
        value === formValues.password || 'Пароли не совпадают.'
    }
  }
]
