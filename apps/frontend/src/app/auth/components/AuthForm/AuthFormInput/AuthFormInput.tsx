import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { useEventListener } from 'usehooks-ts'
import cn from 'classnames'
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

import { IconExclamationTriangle } from '@ui/icons/IconExclamationTriangle'
import { KeyboardCode } from '@enums/KeyboardCode'
import type { InputProps } from '@interfaces/InputProps'
import styles from './AuthFormInput.module.scss'

const TogglePasswordVisibility = dynamic(
  () =>
    import('@components/TogglePasswordVisibility').then(
      mod => mod.TogglePasswordVisibility
    ),
  { ssr: false }
)

export function AuthFormInput<T extends string>({
  register: { ref, ...register },
  error,
  type,
  ...inputAttributes
}: Props<T>) {
  const [inputType, setInputType] = useState(type)
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
    <div className={styles.root}>
      <input
        ref={handleMount}
        className={cn(
          styles.field,
          error && error.message !== ''
            ? styles.errorStatus
            : styles.defaultStatus,
          type === 'password' ? styles.passwordType : styles.notPasswordType
        )}
        type={inputType}
        {...register}
        {...inputAttributes}
      />
      {error && error.message !== '' && (
        <span className={styles.error} title={error.message}>
          <IconExclamationTriangle className={styles.errorIcon} />
          {error.message}
        </span>
      )}
      {type === 'password' && (
        <TogglePasswordVisibility
          inputType={inputType}
          setInputType={setInputType}
          className={styles.togglePasswordVisibility}
        />
      )}
    </div>
  )
}

interface Props<T extends string> extends InputProps {
  register: UseFormRegisterReturn<T>
  error?: FieldError
}
