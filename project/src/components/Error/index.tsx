import { ErrorMessage } from '@hookform/error-message'
import { FieldErrorsImpl } from 'react-hook-form'
import { Div } from '../../layout/themes/styles/form'

export function Error({
  errors,
  field,
}: {
  errors: Partial<FieldErrorsImpl>
  field: string
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
