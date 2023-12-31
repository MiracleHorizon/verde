import cn from 'classnames'

import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './TailSpin.module.scss'

export function TailSpin({ className }: ClassNameProps) {
  return <span className={cn(styles.root, className)} />
}
