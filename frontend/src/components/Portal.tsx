import { createPortal } from 'react-dom'
import type { PropsWithChildren } from 'react'

export const ROOT_ID: string = '__next'

export function Portal({ children, containerSelector }: Props) {
  const container = document.querySelector(containerSelector || ROOT_ID)

  return createPortal(children, container)
}

interface Props extends PropsWithChildren {
  containerSelector?: string
}
