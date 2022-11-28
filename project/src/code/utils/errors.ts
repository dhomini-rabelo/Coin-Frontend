import { ErrorOption } from 'react-hook-form'

export function showErrorMessages<SchemaType>(
  apiFormErrors: { [field: string]: string[] },
  fieldsData: SchemaType,
  setError: (fieldName: keyof SchemaType, errorOptions: ErrorOption) => void,
  reset: (data: SchemaType) => void,
) {
  reset(fieldsData)
  Object.entries(apiFormErrors).forEach(
    ([fieldNameArray, fieldErrorsArray]) => {
      const fieldErrors = fieldErrorsArray as string[]
      if (fieldNameArray in fieldsData) {
        const fieldName = fieldNameArray as keyof SchemaType
        setError(fieldName!, { type: 'custom', message: fieldErrors[0] })
      } else {
        throw new Error(`Invalid error key => ${fieldNameArray} `)
      }
    },
  )
}
