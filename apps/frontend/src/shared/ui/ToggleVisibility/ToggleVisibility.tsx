'use client'

import cn from 'classnames'

import { IconEye } from '@ui/icons/IconEye'
import { IconEyeSlash } from '@ui/icons/IconEyeSlash'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './ToggleVisibility.module.scss'

export function ToggleVisibility({
  isHidden,
  titleVisible,
  titleHidden,
  onToggle,
  className
}: Props) {
  return (
    <div
      title={isHidden ? titleHidden : titleVisible}
      className={cn(styles.root, className)}
      onClick={onToggle}
    >
      {isHidden ? <IconEyeSlash /> : <IconEye />}
    </div>
  )
}

interface Props extends ClassNameProps {
  isHidden: boolean
  titleVisible: string
  titleHidden: string
  onToggle: VoidFunction
}
