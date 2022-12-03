import { Div } from '../../styles/form'
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
  placeholder: string
  errors: TFieldErrors
  register: UseFormRegister<SchemaType>
  type?: 'text' | 'email' | 'number'
}

export function InputForm<
  SchemaType extends FieldValues,
  TFieldErrors extends FieldErrors,
>({
  name,
  label,
  placeholder,
  register,
  type = 'text',
  errors,
}: Props<SchemaType, TFieldErrors>) {
  return (
    <Div.fieldGroup>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name as Path<SchemaType>)}
      />
      <Error
        field={name as FieldName<FieldValuesFromFieldErrors<TFieldErrors>>}
        errors={errors}
      />
    </Div.fieldGroup>
  )
}
