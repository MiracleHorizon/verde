import { APP_TITLE } from '@constants/seo'

export function writePageTitle(title: string): string {
  return `${title} | ${APP_TITLE}`
}
