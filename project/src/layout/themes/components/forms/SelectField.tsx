import { Div as FormDiv } from '../../styles/form'
import { Error } from '../../../components/Error'
import {
  FieldErrors,
  FieldName,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form'
import { FieldValuesFromFieldErrors } from '@hookform/error-message'

interface Props<
  SchemaType extends FieldValues,
  TFieldErrors extends FieldErrors,
> {
  name: Path<SchemaType> | FieldName<FieldValuesFromFieldErrors<TFieldErrors>>
  label: string
  choices: { [value: string]: string }
  errors: TFieldErrors
  register: UseFormRegister<SchemaType>
  hasNullValue?: boolean
}

export function SelectField<
  SchemaType extends FieldValues,
  TFieldErrors extends FieldErrors,
>({
  name,
  label,
  choices,
  register,
  errors,
  hasNullValue = false,
}: Props<SchemaType, TFieldErrors>) {
  return (
    <FormDiv.fieldGroup>
      <label htmlFor={name}>{label}</label>
      <select {...register(name as Path<SchemaType>)}>
        {hasNullValue && <option value="none">Selecionar</option>}
        {Object.entries(choices).map(([value, display]) => (
          <option value={value} key={value}>
            {display}
          </option>
        ))}
      </select>
      <Error
        field={name as FieldName<FieldValuesFromFieldErrors<TFieldErrors>>}
        errors={errors}
      />
    </FormDiv.fieldGroup>
  )
}
