import { Route } from '@enums/Route'

export function getAuthSuggestionData(route: Route) {
  switch (route) {
    case Route.SIGNIN:
      return {
        title: 'Еще нет аккаунта?',
        linkTitle: 'Зарегистрируйтесь',
        href: Route.SIGNUP
      }
    case Route.SIGNUP:
      return {
        title: 'Уже есть аккаунт?',
        linkTitle: 'Войдите',
        href: Route.SIGNIN
      }
    default:
      return {
        title: 'На главную',
        linkTitle: 'Вернуться',
        href: Route.HOME
      }
  }
}
