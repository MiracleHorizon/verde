import { useId, useRef } from 'react'
import { useEventListener } from 'usehooks-ts'
import cn from 'classnames'

import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

import { IconExclamationTriangle } from '@ui/icons/IconExclamationTriangle'
import { KeyboardCode } from '@enums/KeyboardCode'
import type { InputProps } from '@interfaces/InputProps'
import styles from './AuthFormInput.module.scss'

export function AuthFormInput<T extends string>({
  register: { ref, ...register },
  error,
  ...inputAttributes
}: Props<T>) {
  const id = useId()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleMount = (node: HTMLInputElement | null) => {
    ref(node)
    inputRef.current = node
  }

  useEventListener('keydown', ev => {
    if (ev.code !== KeyboardCode.ESCAPE) return
    inputRef.current?.blur()
  })

  return (
    <label htmlFor={id} className={styles.root}>
      <input
        id={id}
        ref={handleMount}
        className={cn(
          styles.field,
          error && error.message !== ''
            ? styles.errorStatus
            : styles.defaultStatus
        )}
        {...register}
        {...inputAttributes}
      />
      {error && error.message !== '' && (
        <span className={styles.error} title={error.message}>
          <IconExclamationTriangle className={styles.errorIcon} />
          {error.message}
        </span>
      )}
    </label>
  )
}

interface Props<T extends string> extends InputProps {
  register: UseFormRegisterReturn<T>
  error?: FieldError
}
