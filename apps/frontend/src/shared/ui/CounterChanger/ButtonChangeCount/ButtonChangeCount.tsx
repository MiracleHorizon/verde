import { memo } from 'react'
import cn from 'classnames'

import { IconPlus } from '@ui/icons/IconPlus'
import { IconMinus } from '@ui/icons/IconMinus'
import type { CounterChangerVariant } from '@ui/CounterChanger'
import styles from './ButtonChangeCount.module.scss'

function ButtonChangeCount({
  variant,
  destination,
  isDisabled,
  onClick
}: Props) {
  return (
    <button
      className={cn(
        styles.root,
        {
          [styles.rootSeparated]: variant === 'separated',
          [styles.disabled]: isDisabled
        },
        variant === 'solid' && {
          [styles.rootSolid]: true,
          [styles.leftSolid]: destination === 'decrement',
          [styles.rightSolid]: destination === 'increment'
        }
      )}
      onClick={onClick}
    >
      {destination === 'increment' ? <IconPlus /> : <IconMinus />}
    </button>
  )
}

const MemoizedButtonChangeCount = memo(ButtonChangeCount)

export { MemoizedButtonChangeCount as ButtonChangeCount }

interface Props {
  variant: CounterChangerVariant
  destination: 'increment' | 'decrement'
  isDisabled: boolean
  onClick: VoidFunction
}
