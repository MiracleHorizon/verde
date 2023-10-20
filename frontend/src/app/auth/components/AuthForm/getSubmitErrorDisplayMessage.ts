import { NotFoundException } from '@exceptions/NotFoundException'
import { UnauthorizedException } from '@exceptions/UnauthorizedException'

export function getSubmitErrorDisplayMessage<T extends Error>(
  error: T | null
): string | null {
  if (error instanceof NotFoundException) {
    return 'Пользователь не найден.'
  }

  if (error instanceof UnauthorizedException) {
    return 'Неверно указанные данные.'
  }

  return null
}
