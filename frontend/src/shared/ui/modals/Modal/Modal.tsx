import { Dialog } from '@headlessui/react'
import type { ElementType } from 'react'

import type { ModalProps } from './Modal.types'
import styles from './Modal.module.scss'

export function Modal<TagType extends ElementType>({
  children,
  ...dialogProps
}: ModalProps<TagType>) {
  return (
    <Dialog {...dialogProps} className={styles.root}>
      <div className={styles.backdrop} />
      <div className={styles.container}>{children}</div>
    </Dialog>
  )
}
