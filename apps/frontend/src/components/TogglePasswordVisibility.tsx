import {
  type Dispatch,
  type HTMLInputTypeAttribute,
  type SetStateAction,
  useCallback
} from 'react'

import { ToggleVisibility } from '@ui/ToggleVisibility'
import type { ClassNameProps } from '@interfaces/ClassNameProps'

export function TogglePasswordVisibility({
  inputType,
  setInputType,
  className
}: Props) {
  const handleToggleVisibility = useCallback(() => {
    setInputType(inputType === 'password' ? 'text' : 'password')
  }, [inputType, setInputType])

  return (
    <ToggleVisibility
      isHidden={inputType === 'password'}
      titleVisible='Скрыть пароль'
      titleHidden='Показать пароль'
      onToggle={handleToggleVisibility}
      className={className}
    />
  )
}

interface Props extends ClassNameProps {
  inputType: HTMLInputTypeAttribute
  setInputType: Dispatch<SetStateAction<HTMLInputTypeAttribute>>
}
