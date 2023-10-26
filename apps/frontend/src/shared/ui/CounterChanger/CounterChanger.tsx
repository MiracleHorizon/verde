import cn from 'classnames'

import { ButtonChangeCount } from './ButtonChangeCount'
import type { CounterChangerVariant } from './CounterChanger.types'
import type { ClassNameProps } from '@interfaces/ClassNameProps'
import styles from './CounterChanger.module.scss'

export function CounterChanger({
  count,
  variant,
  increment,
  decrement,
  isIncrementDisabled,
  isDecrementDisabled,
  className
}: Props) {
  return (
    <div
      className={cn(
        styles.root,
        { [styles.rootSeparated]: variant === 'separated' },
        className
      )}
    >
      <ButtonChangeCount
        destination='decrement'
        variant={variant}
        isDisabled={isDecrementDisabled}
        onClick={decrement}
      />
      <div
        className={cn(styles.countContainer, {
          [styles.countContainerSeparated]: variant === 'separated'
        })}
      >
        <span title={`Количество: ${count}`} className={styles.count}>
          {count}
        </span>
      </div>
      <ButtonChangeCount
        destination='increment'
        variant={variant}
        isDisabled={isIncrementDisabled}
        onClick={increment}
      />
    </div>
  )
}

interface Props extends ClassNameProps {
  variant: CounterChangerVariant
  count: number
  increment: VoidFunction
  decrement: VoidFunction
  isIncrementDisabled: boolean
  isDecrementDisabled: boolean
}
