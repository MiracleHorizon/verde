'use client'

import { createPortal } from 'react-dom'
import type { PropsWithChildren } from 'react'

export const ROOT_SELECTOR: string = '#root'

export function Portal({ children, containerSelector }: Props) {
  const container = document.querySelector(containerSelector || ROOT_SELECTOR)

  if (!container) {
    return null
  }

  return createPortal(children, container)
}

interface Props extends PropsWithChildren {
  containerSelector?: string
}
