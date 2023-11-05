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

type Content =
  | WithLeadIconAndTitle
  | WithTrailIconAndTitle
  | WithLeadIcon
  | WithTrailIcon
  | WithTitle

interface WithLeadIconAndTitle {
  title: string
  leadIcon: ReactNode
  trailIcon?: never
}

interface WithTrailIconAndTitle {
  title: string
  trailIcon: ReactNode
  leadIcon?: never
}

interface WithLeadIcon {
  leadIcon: ReactNode
  title?: never
  trailIcon?: never
}

interface WithTrailIcon {
  trailIcon: ReactNode
  title?: never
  leadIcon?: never
}

interface WithTitle {
  title: string
  leadIcon?: never
  trailIcon?: never
}
