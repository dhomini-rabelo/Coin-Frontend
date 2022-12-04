/* eslint-disable */

export enum ErrorMessages {
  REQUIRED = 'Este campo é obrigatório',
  INVALID_VALUE = 'Valor inválido',
  INVALID_EMAIL = 'Email inválido',
}

export const DynamicErrors = {
  minLength: (minLengthValue: number) => `Este campo deve ter no mínimo ${minLengthValue} dígitos`,
  maxLength: (maxLengthValue: number) => `Este campo deve ter no máximo ${maxLengthValue} dígitos`,
  minValue: (minValueNumber: number) => `Este campo deve ser no mínimo ${minValueNumber}`,
  maxValue: (maxValueNumber: number) => `Este campo deve ser no máximo ${maxValueNumber}`,
} as const