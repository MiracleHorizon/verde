import cn from 'classnames'

import { TailSpin } from '@ui/spinners/TailSpin'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './FullWidthSpinner.module.scss'

export function FullWidthSpinner({ className }: ClassNameProps) {
  return (
    <div className={cn(styles.root, className)}>
      <TailSpin />
    </div>
  )
}
