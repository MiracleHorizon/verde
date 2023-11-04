import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { ClassNameProps } from '@interfaces/ClassNameProps'

export type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title'> &
  ClassNameProps &
  Content & {
    variant: 'primary' | 'secondary'
    isDisabled?: boolean
    titleAttribute?: string
    onClick?: VoidFunction
  }

type Content = WithLeadIconAndTitle | WithLeadIcon | WithTitle

interface WithLeadIconAndTitle {
  title: string
  leadIcon: ReactNode
}

interface WithLeadIcon {
  leadIcon: ReactNode
  title?: never
}

interface WithTitle {
  title: string
  leadIcon?: never
}
