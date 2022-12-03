import {
  ErrorMessage,
  FieldValuesFromFieldErrors,
} from '@hookform/error-message'
import { FieldErrors, FieldName } from 'react-hook-form'
import { Div } from '../../themes/styles/form'

export function Error<TFieldErrors extends FieldErrors>({
  errors,
  field,
}: {
  errors: TFieldErrors
  field: FieldName<FieldValuesFromFieldErrors<TFieldErrors>>
}) {
  return (
    <span className="min-h-[20px] block">
      <ErrorMessage
        errors={errors}
        name={field}
        render={({ message }) => (
          <Div.error>
            <img src="/forms/error.svg" alt="error-icon" />
            <span>{message}</span>
          </Div.error>
        )}
      />
    </span>
  )
}
