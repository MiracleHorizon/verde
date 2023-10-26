import { useId } from 'react'
import cn from 'classnames'

import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

import { IconExclamationTriangle } from '@ui/icons/IconExclamationTriangle'
import type { InputProps } from '@interfaces/InputProps'
import styles from './AuthFormInput.module.scss'

export function AuthFormInput<T extends string>({
  register,
  error,
  ...inputAttributes
}: Props<T>) {
  const id = useId()

  return (
    <label htmlFor={id} className={styles.root}>
      <input
        id={id}
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
