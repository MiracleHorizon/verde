'use client'

import { useRef } from 'react'
import { Dialog } from '@headlessui/react'
import cn from 'classnames'

import { Modal, type ModalProps } from '@ui/modals/Modal'
import { Button } from '@ui/Button'
import { roboto } from '@styles/fonts'
import styles from './ConfirmModal.module.scss'

export function ConfirmModal({
  open,
  titleReject,
  titleConfirm,
  titleRoot,
  onConfirm,
  onReject
}: Props) {
  const contentRef = useRef<HTMLElement | null>(null)

  return (
    <Modal
      initialFocus={contentRef}
      open={open}
      onClose={onReject}
      withBackdrop
    >
      <Dialog.Panel className={styles.root}>
        {titleRoot && (
          <header className={cn(styles.header, roboto.className)}>
            <article className={styles.titleArticle}>
              <Dialog.Title as='h3' className={styles.title}>
                {titleRoot}
              </Dialog.Title>
            </article>
          </header>
        )}
        <main ref={contentRef} className={styles.content}>
          <Button
            variant='secondary'
            title={titleReject}
            onClick={onReject}
            className={styles.button}
          />
          <Button
            variant='primary'
            title={titleConfirm}
            onClick={onConfirm}
            className={styles.button}
          />
        </main>
      </Dialog.Panel>
    </Modal>
  )
}

type Props = {
  titleConfirm: string
  titleReject: string
  onConfirm: VoidFunction
  onReject: VoidFunction
  titleRoot?: string
} & Pick<ModalProps<never>, 'open'>
