import { Dialog } from '@headlessui/react'
import type { ElementType } from 'react'

import type { ModalProps } from './Modal.types'
import styles from './Modal.module.scss'

export function Modal<TagType extends ElementType>({
  children,
  withBackdrop,
  ...dialogProps
}: ModalProps<TagType>) {
  return (
    <Dialog {...dialogProps} className={styles.root}>
      {withBackdrop && <div className={styles.backdrop} />}
      <div className={styles.container}>{children}</div>
    </Dialog>
  )
}
