'use client'

import { useToggle } from 'usehooks-ts'

import { Button } from '@ui/Button'
import { ConfirmModal } from '@ui/modals/ConfirmModal'
import { IconSignout } from '@ui/icons/IconSignout'
import { useSignout } from '@hooks/auth/useSignout'
import type { ClassNameProps } from '@interfaces/ClassNameProps'

export function ButtonSignout(props: ClassNameProps) {
  const [isOpen, , setOpen] = useToggle()
  const { handleSignout } = useSignout()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const onConfirmSignout = () => {
    handleSignout()
    handleClose()
  }

  return (
    <>
      <Button
        variant='secondary'
        title='Выйти'
        leadIcon={<IconSignout />}
        onClick={handleOpen}
        {...props}
      />
      <ConfirmModal
        titleConfirm='Выйти'
        titleReject='Отменить'
        titleRoot='Вы уверены, что хотите выйти?'
        open={isOpen}
        onConfirm={onConfirmSignout}
        onReject={handleClose}
      />
    </>
  )
}
