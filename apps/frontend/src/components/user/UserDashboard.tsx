'use client'

import dynamic from 'next/dynamic'
import { useToggle } from 'usehooks-ts'

import { Avatar } from '@ui/Avatar'
import { ButtonSignin } from './ButtonSignin'
import { useUserStore } from '@stores/user'

const UserMenuModal = dynamic(
  () => import('./UserMenuModal').then(mod => mod.UserMenuModal),
  { ssr: false }
)

export function UserDashboard() {
  const [isOpen, , setOpen] = useToggle()
  const user = useUserStore(state => state.user)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  if (!user) {
    return <ButtonSignin />
  }

  return (
    <>
      <Avatar onClick={handleOpen} />
      <UserMenuModal user={user} open={isOpen} onClose={handleClose} />
    </>
  )
}
