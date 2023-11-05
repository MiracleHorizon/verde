import dynamic from 'next/dynamic'
import { useToggle } from 'usehooks-ts'

import { Avatar } from '@ui/Avatar'
import type { User } from '@interfaces/User'

const UserMenuModal = dynamic(
  () => import('./UserMenuModal').then(mod => mod.UserMenuModal),
  { ssr: false }
)

export function UserMenuModalContainer({ user }: Props) {
  const [isOpen, , setOpen] = useToggle()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Avatar onClick={handleOpen} />
      <UserMenuModal user={user} open={isOpen} onClose={handleClose} />
    </>
  )
}

interface Props {
  user: User
}
