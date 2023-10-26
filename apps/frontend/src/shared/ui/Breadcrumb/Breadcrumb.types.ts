import type { ClassNameProps } from '@interfaces/ClassNameProps'

export interface Props extends ClassNameProps {
  items: BreadcrumbItem[]
  customSeparator?: string
  withFinishingSeparator?: boolean
}

export interface BreadcrumbItem {
  title: string
  href: string
}
