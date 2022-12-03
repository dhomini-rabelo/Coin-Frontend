import { ErrorOption, FieldValues } from 'react-hook-form'
import { AxiosError } from 'axios'

export function showErrorMessages<SchemaType extends FieldValues>(
  apiFormErrors: { [field: string]: string[] },
  fieldsData: SchemaType,
  setError: (fieldName: keyof SchemaType, errorOptions: ErrorOption) => void,
  reset: (data: SchemaType) => void,
  adapterFields: { [fieldName: string]: string } = {},
) {
  reset(fieldsData)
  Object.entries(apiFormErrors).forEach(
    ([fieldNameArray, fieldErrorsArray]) => {
      const fieldErrors = fieldErrorsArray as string[]
      const adaptedFieldName = (
        fieldNameArray in adapterFields
          ? adapterFields[fieldNameArray]
          : fieldNameArray
      ) as keyof SchemaType
      if (adaptedFieldName in fieldsData) {
        setError(adaptedFieldName!, { type: 'custom', message: fieldErrors[0] })
      } else {
        throw new Error(`Invalid error key => ${fieldNameArray} `)
      }
    },
  )
}

export function processFormErrorResponse<SchemaType extends FieldValues>(
  error: AxiosError,
  fieldsData: SchemaType,
  setError: (fieldName: keyof SchemaType, errorOptions: ErrorOption) => void,
  reset: (data: SchemaType) => void,
  renderFeedback: (
    type: 'error' | 'success',
    message: string,
    onClose?: () => void,
  ) => void | null,
) {
  if (error.response!.status === 400) {
    showErrorMessages<SchemaType>(
      error.response!.data,
      fieldsData,
      setError,
      reset,
    )
  } else {
    reset(fieldsData)
    if (renderFeedback) {
      renderFeedback('error', 'Server Error')
    }
  }
}
