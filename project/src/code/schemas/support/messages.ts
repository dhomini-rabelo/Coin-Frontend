/* eslint-disable */

export enum ErrorMessages {
  REQUIRED = 'Este campo é obrigatório'
}

export const DynamicErrors = {
  minLength: (minLengthValue: number) => `Este campo deve ter no mínimo ${minLengthValue} dígitos`,
  maxLength: (maxLengthValue: number) => `Este campo deve ter no máximo ${maxLengthValue} dígitos`
} as const