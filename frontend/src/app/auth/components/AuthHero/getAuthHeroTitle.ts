import { Route } from '@enums/Route'

export function getAuthHeroTitle(route: Route): string {
  switch (route) {
    case Route.SIGNIN:
      return 'Войдите в свой аккаунт'
    case Route.SIGNUP:
      return 'Зарегистрируйтесь'
    default:
      return 'Добро пожаловать!'
  }
}
