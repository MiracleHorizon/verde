'use client'

import {
  type DefaultValues,
  type FieldError,
  type FieldValues,
  useForm
} from 'react-hook-form'

import { Button } from '@ui/Button'
import { AuthFormInput } from './AuthFormInput'
import { getSubmitErrorDisplayMessage } from './getSubmitErrorDisplayMessage'
import type { ReactHookFormInput } from '@interfaces/ReactHookFormInput'
import styles from './AuthForm.module.scss'

export function AuthForm<T extends FieldValues, Err extends Error>({
  inputs,
  defaultValues,
  onSubmit,
  submitError
}: Props<T, Err>) {
  const {
    handleSubmit,
    formState: { errors },
    register
  } = useForm({
    defaultValues,
    reValidateMode: 'onChange'
  })

  const submitErrorMessage = getSubmitErrorDisplayMessage(submitError)

  if (inputs.length === 0) {
    return null
  }

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      {inputs.map(({ fieldName, registerOptions, ...inputAttributes }) => (
        <AuthFormInput
          key={fieldName}
          register={register(fieldName, registerOptions)}
          error={errors[fieldName] as FieldError}
          {...inputAttributes}
        />
      ))}
      {submitErrorMessage && (
        <span className={styles.submitError}>{submitErrorMessage}</span>
      )}
      <Button
        type='submit'
        variant='primary'
        title='Отправить'
        className={styles.submit}
      />
    </form>
  )
}

/* eslint no-unused-vars: 0 */
interface Props<T extends FieldValues, Err extends Error> {
  inputs: ReactHookFormInput<T>[]
  defaultValues: DefaultValues<T>
  onSubmit: (payload: T) => void
  submitError: Err | null
}
