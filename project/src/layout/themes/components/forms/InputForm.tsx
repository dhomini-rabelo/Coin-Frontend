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

type InputTypes = 'text' | 'email' | 'decimal' | 'password' | 'int'

interface Props<
  SchemaType extends FieldValues,
  TFieldErrors extends FieldErrors,
> {
  name: Path<SchemaType> | FieldName<FieldValuesFromFieldErrors<TFieldErrors>>
  label: string
  placeholder: string
  errors: TFieldErrors
  register: UseFormRegister<SchemaType>
  type?: InputTypes
  disabled?: boolean
}

export function InputForm<
  SchemaType extends FieldValues,
  TFieldErrors extends FieldErrors,
>({
  name,
  label,
  placeholder,
  register,
  errors,
  type = 'text',
  disabled = false,
}: Props<SchemaType, TFieldErrors>) {
  function getInputConfig(type: InputTypes) {
    switch (type) {
      case 'decimal':
        return {
          inputType: 'number',
          registerConfig: { valueAsNumber: true },
          inputAttributes: {
            step: '0.01',
          },
        }
      case 'int':
        return {
          inputType: 'number',
          registerConfig: { valueAsNumber: true },
          inputAttributes: {
            step: '1',
          },
        }
      default:
        return {
          inputType: type,
          registerConfig: {},
          inputAttributes: {},
        }
    }
  }

  const { inputType, registerConfig, inputAttributes } = getInputConfig(type)

  return (
    <Div.fieldGroup>
      <label htmlFor={name}>{label}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name as Path<SchemaType>, registerConfig)}
        {...inputAttributes}
      />
      <Error
        field={name as FieldName<FieldValuesFromFieldErrors<TFieldErrors>>}
        errors={errors}
      />
    </Div.fieldGroup>
  )
}
