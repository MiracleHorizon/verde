'use client'

import { useRef } from 'react'
import { Dialog } from '@headlessui/react'
import cn from 'classnames'

import { UserMenu } from '../UserMenu'
import { Modal, type ModalProps } from '@ui/modals/Modal'
import { roboto } from '@styles/fonts'
import type { User } from '@interfaces/User'
import styles from './UserMenuModal.module.scss'

export function UserMenuModal({ user, ...modalProps }: Props) {
  const titleRef = useRef<HTMLHeadingElement | null>(null)

  return (
    <Modal initialFocus={titleRef} withBackdrop {...modalProps}>
      <Dialog.Panel className={styles.root}>
        <header className={styles.header}>
          <article className={styles.titleArticle}>
            <Dialog.Title
              as='h3'
              ref={titleRef}
              title={user.name}
              className={cn(styles.title, roboto.className)}
            >
              {user.name}
            </Dialog.Title>
          </article>
        </header>

        <UserMenu />
      </Dialog.Panel>
    </Modal>
  )
}

type Props = {
  user: User
} & Pick<ModalProps<never>, 'open' | 'onClose'>
