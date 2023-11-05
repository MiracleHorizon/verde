import type { FieldValues, Path, RegisterOptions } from 'react-hook-form'

import type { InputProps } from '@interfaces/InputProps'

type FieldName<T> = Path<T>

export interface ReactHookFormInput<T extends FieldValues> extends InputProps {
  fieldName: FieldName<T>
  registerOptions: RegisterOptions<T, FieldName<T>>
}
