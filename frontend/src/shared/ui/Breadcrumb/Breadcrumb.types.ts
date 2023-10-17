import type { ClassNameProps } from '@shared/@types/ClassNameProps.ts'

export interface Props extends ClassNameProps {
  items: BreadcrumbItem[]
  customSeparator?: string
  withFinishingSeparator?: boolean
}

export interface BreadcrumbItem {
  title: string
  href: string
}
