'use client'

import {
  type DefaultValues,
  type FieldError,
  type FieldValues,
  useForm
} from 'react-hook-form'
import cn from 'classnames'

import { Button } from '@ui/Button'
import { AuthFormInput } from './AuthFormInput'
import { ButtonDemoAuth } from '../ButtonDemoAuth'
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
    formState: { errors, isValid, isValidating },
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
    <>
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
      </form>
      <section className={styles.buttonsSection}>
        <Button
          variant='primary'
          title='Отправить'
          className={cn(styles.button, styles.buttonSubmit)}
          isDisabled={!isValid || isValidating}
          onClick={handleSubmit(onSubmit)}
        />
        <ButtonDemoAuth className={styles.button} />
      </section>
    </>
  )
}

/* eslint no-unused-vars: 0 */
interface Props<T extends FieldValues, Err extends Error> {
  inputs: ReactHookFormInput<T>[]
  defaultValues: DefaultValues<T>
  onSubmit: (payload: T) => void
  submitError: Err | null
}
