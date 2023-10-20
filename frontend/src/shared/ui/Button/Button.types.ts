import type { ButtonHTMLAttributes, ReactNode } from 'react'

import type { ClassNameProps } from '@interfaces/ClassNameProps'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  ClassNameProps &
  Content & {
    variant: 'primary' | 'secondary'
    isDisabled?: boolean
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
