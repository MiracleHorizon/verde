import type { ElementType, PropsWithChildren } from 'react'
import type { DialogProps } from '@headlessui/react'

export type ModalProps<TagType extends ElementType> = DialogProps<TagType> &
  PropsWithChildren
