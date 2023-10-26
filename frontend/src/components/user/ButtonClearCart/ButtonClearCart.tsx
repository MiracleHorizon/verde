'use client'

import cn from 'classnames'

import { useCartStore } from '@stores/cart'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './ButtonClearCart.module.scss'

export function ButtonClearCart({ title, className }: Props) {
  const clear = useCartStore(state => state.clear)

  return (
    <button className={cn(styles.root, className)} onClick={clear}>
      <span className={styles.title}>{title || 'Очистить'}</span>
    </button>
  )
}

interface Props extends ClassNameProps {
  title?: string
}
