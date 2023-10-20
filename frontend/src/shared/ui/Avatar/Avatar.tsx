import Image from 'next/image'
import cn from 'classnames'

import type { ClassNameProps } from '@interfaces/ClassNameProps'
import userPng from '@public/user.png'
import styles from './Avatar.module.scss'

export function Avatar({ className, onClick }: Props) {
  return (
    <div
      className={cn(
        styles.root,
        { [styles.withAction]: Boolean(onClick) },
        className
      )}
      onClick={onClick}
    >
      <Image
        src={userPng.src}
        alt='Пользователь'
        sizes='100%'
        fill
        className={styles.image}
      />
    </div>
  )
}

interface Props extends ClassNameProps {
  onClick?: VoidFunction
}
