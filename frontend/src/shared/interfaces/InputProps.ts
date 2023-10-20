import type { HTMLAttributes, HTMLInputTypeAttribute } from 'react'

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'> {
  placeholder: string
  type: HTMLInputTypeAttribute
  autoComplete?: string
}
