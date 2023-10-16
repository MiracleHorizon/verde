'use client'

import { createPortal } from 'react-dom'
import type { PropsWithChildren } from 'react'

export const ROOT_ID: string = '__next'

export function Portal({ children, containerSelector }: Props) {
  const container = document.querySelector(containerSelector || ROOT_ID)

  if (!container) {
    return null
  }

  return createPortal(children, container)
}

interface Props extends PropsWithChildren {
  containerSelector?: string
}
