import type { ElementType, PropsWithChildren } from 'react'
import type { DialogProps } from '@headlessui/react'

export type ModalProps<TagType extends ElementType> = {
  withBackdrop?: boolean
} & DialogProps<TagType> &
  PropsWithChildren
