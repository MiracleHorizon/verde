'use client'

import { useToggle } from 'usehooks-ts'

import { Button } from '@ui/Button'
import { ConfirmModal } from '@ui/modals/ConfirmModal'
import { IconSignout } from '@ui/icons/IconSignout'
import type { ClassNameProps } from '@interfaces/ClassNameProps'

export function ButtonSignout(props: ClassNameProps) {
  const [isOpen, , setOpen] = useToggle()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSignout = () => {
    console.log('signout')
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
        onConfirm={handleSignout}
        onReject={handleClose}
      />
    </>
  )
}
