'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@ui/Button'
import { IconSignin } from '@ui/icons/IconSignin'
import { Route } from '@enums/Route'
import type { ClassNameProps } from '@interfaces/ClassNameProps'

export function ButtonSignin(props: ClassNameProps) {
  const router = useRouter()

  const navigateToSignin = () => router.push(Route.SIGNIN)

  return (
    <Button
      variant='secondary'
      title='Войти'
      leadIcon={<IconSignin />}
      onClick={navigateToSignin}
      {...props}
    />
  )
}
