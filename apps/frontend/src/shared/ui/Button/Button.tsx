import { memo } from 'react'
import cn from 'classnames'

import type { Props } from './Button.types'
import styles from './Button.module.scss'

function Button({
  variant,
  title,
  titleAttribute,
  leadIcon,
  trailIcon,
  isDisabled,
  className,
  ...buttonAttributes
}: Props) {
  const withLeadIcon = Boolean(leadIcon)
  const withTrailIcon = Boolean(trailIcon)

  return (
    <button
      title={titleAttribute}
      className={cn(
        styles.root,
        withLeadIcon || withTrailIcon ? styles.withIcon : styles.withoutIcon,
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
            [styles.titleWithLeadIcon]: withLeadIcon,
            [styles.titleWithTrailIcon]: withTrailIcon
          })}
        >
          {title}
        </span>
      )}
      {trailIcon}
    </button>
  )
}

const MemoizedButton = memo(Button)

export { MemoizedButton as Button }
