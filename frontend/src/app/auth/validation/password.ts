import { digitRegex, specialCharRegex, uppercaseRegex } from './regex'

export const MIN_PASSWORD_LENGTH = 6
export const MAX_PASSWORD_LENGTH = 24
export const passwordLengthValidation = {
  minLength: {
    value: MIN_PASSWORD_LENGTH,
    message: 'Пароль не должен быть короче 6 символов.'
  },
  maxLength: {
    value: MAX_PASSWORD_LENGTH,
    message: 'Пароль не должен быть длиннее 24 символов.'
  }
}

export const passwordValidate = {
  uppercase: (value: string) =>
    uppercaseRegex.test(value) ||
    'Пароль должен содержать хотя бы одну заглавную букву.',
  specialChar: (value: string) =>
    specialCharRegex.test(value) ||
    'Пароль должен содержать хотя бы один специальный символ.',
  digit: (value: string) =>
    digitRegex.test(value) || 'Пароль должен содержать хотя бы одну цифру.'
}
