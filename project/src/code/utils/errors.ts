import { ErrorOption } from 'react-hook-form'

export function showErrorMessages<SchemaType>(
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
