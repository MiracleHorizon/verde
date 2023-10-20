import { memo } from 'react'
import cn from 'classnames'

import type { Props } from './Button.types'
import styles from './Button.module.scss'

function Button({
  variant,
  title,
  leadIcon,
  isDisabled,
  className,
  ...buttonAttributes
}: Props) {
  const withLeadIcon = Boolean(leadIcon)

  return (
    <button
      className={cn(
        styles.root,
        withLeadIcon ? styles.withLeadIcon : styles.withoutLeadIcon,
        {
          [styles.primary]: variant === 'primary',
          [styles.secondary]: variant === 'secondary',
          [styles.disabled]: isDisabled
        },
        className
      )}
      {...buttonAttributes}
    >
      {leadIcon}
      {title && (
        <span
          className={cn(styles.title, {
            [styles.titleWithLeadIcon]: withLeadIcon
          })}
        >
          {title}
        </span>
      )}
    </button>
  )
}

const MemoizedButton = memo(Button)

export { MemoizedButton as Button }
