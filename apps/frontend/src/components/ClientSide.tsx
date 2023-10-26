'use client'

import { Fragment } from 'react'

import { useInitUser } from '@hooks/useInitUser'

export function ClientSide() {
  useInitUser()

  return <Fragment />
}
