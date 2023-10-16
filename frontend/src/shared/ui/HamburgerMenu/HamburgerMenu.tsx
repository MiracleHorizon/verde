'use client'

import { useEventListener, useToggle } from 'usehooks-ts'
import { type MediaQueryAllQueryable, useMediaQuery } from 'react-responsive'
import cn from 'classnames'
import type { PropsWithChildren } from 'react'

import { Portal } from '@components/Portal.tsx'
import { IconXMark } from '@ui/icons/IconXMark.tsx'
import { IconThreeBars } from '@ui/icons/IconThreeBars.tsx'
import { KeyboardCode } from '@shared/@types/KeyboardCode.ts'
import type { ClassNameProps } from '@shared/@types/ClassNameProps.ts'
import styles from './HamburgerMenu.module.scss'

export function HamburgerMenu({
  children,
  viewportMaxWidth,
  className
}: Props) {
  const [isOpen, toggleOpen, setOpen] = useToggle(false)
  const isSuitableViewportWidth = useMediaQuery({
    ...viewportMaxWidth
  })

  const handleClose = () => setOpen(false)

  const handlePressEscape = (ev: KeyboardEvent) => {
    if (ev.code !== KeyboardCode.ESCAPE) return
    handleClose()
  }

  const handleWindowResize = () => {
    if (isSuitableViewportWidth) return
    handleClose()
  }

  useEventListener('keydown', handlePressEscape)
  useEventListener('resize', handleWindowResize)

  return (
    <>
      <div className={cn(styles.root, className)}>
        <button className={styles.button} onClick={toggleOpen}>
          {isOpen ? <IconXMark /> : <IconThreeBars />}
        </button>
      </div>
      {isOpen && <Portal>{children}</Portal>}
    </>
  )
}

interface Props extends PropsWithChildren, ClassNameProps {
  viewportMaxWidth: Pick<MediaQueryAllQueryable, 'maxWidth'>
}
