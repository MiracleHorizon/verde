'use client'

import { Fragment } from 'react'

import { useInitUser } from '@hooks/useInitUser.ts'

export function ClientSide() {
  useInitUser()

  return <Fragment />
}
