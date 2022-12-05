import { SimplePopover } from '../../../layout/components/Popovers/SimplePopover'
import { Div as FormDiv } from '../../../layout/themes/styles/form'
import { ReactNode, useEffect } from 'react'
import { ButtonForm } from '../../../layout/themes/styles/form/components/buttons'
import { useForm } from 'react-hook-form'
import {
  RegisterBillSchema,
  RegisterBillSchemaType,
} from '../../../code/schemas/bill/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { SelectField } from '../../../layout/themes/components/forms/SelectField'
import { InputForm } from '../../../layout/themes/components/forms/InputForm'
import { useFeedback } from '../../../code/hooks/useFeedback'
import { client } from '../../../core/settings'
import { processFormErrorResponse } from '../../../code/utils/errors'

export function AddBillForm({ children }: { children: ReactNode }) {
  const { FeedbackElement, renderFeedback } = useFeedback()
  const registerBillFormHook = useForm<RegisterBillSchemaType>({
    resolver: zodResolver(RegisterBillSchema),
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    register,
    setError,
    reset,
    watch,
    setValue,
    getValues,
  } = registerBillFormHook

  const currentBillType = watch('bill_type')

  const isScheduled = ['scheduled_expense', 'scheduled_income'].includes(
    currentBillType,
  )

  const displayExtraFieldsClass = isScheduled ? '' : 'hidden'

  useEffect(() => {
    if (!isScheduled) {
      const registerFormState = getValues()
      reset({
        ...registerFormState,
        day: registerFormState.day || 1,
        partials: registerFormState.partials || 1,
        value: registerFormState.value || 1,
      })
    }
  }, [isScheduled, setValue, getValues, reset])

  function onValidSubmit(data: RegisterBillSchemaType) {
    const isScheduled = ['scheduled_expense', 'scheduled_income'].includes(
      data.bill_type,
    )
    client
      .post(
        'bills',
        isScheduled ? data : { ...data, day: null, partials: null },
      )
      .then((response) => {
        reset(data)
        renderFeedback('success', 'Conta adicionada')
      })
      .catch((error) => {
        processFormErrorResponse<RegisterBillSchemaType>(
          error,
          data,
          setError,
          reset,
          renderFeedback,
        )
      })
  }

  return (
    <>
      {FeedbackElement}

      <SimplePopover button={children} long={true}>
        <form
          onSubmit={handleSubmit(onValidSubmit, (formErrors) =>
            console.log('ERROS:', formErrors),
          )}
        >
          <FormDiv.form className="grid grid-cols-2 gap-x-4">
            <div className="col-span-1">
              <InputForm
                name="title"
                label="Título"
                placeholder="Digite o título da conta"
                errors={errors}
                register={register}
              />
            </div>
            <div className="col-span-1">
              <SelectField
                name="bill_type"
                label="Tipo"
                choices={{
                  income: 'Ganho',
                  scheduled_income: 'Ganho agendado',
                  expense: 'Despesa',
                  scheduled_expense: 'Despesa agendada',
                }}
                errors={errors}
                register={register}
              />
            </div>
            <div className="col-span-1">
              <InputForm
                name="description"
                label="Descrição (opcional)"
                placeholder="Digite a descrição da conta"
                errors={errors}
                register={register}
              />
            </div>
            <div className="col-span-1">
              <SelectField
                name="payment_method"
                label="Meio de pagamento"
                choices={{
                  card: 'Cartão',
                  money: 'Dinheiro',
                  pix: 'PIX',
                  billet: 'Boleto',
                }}
                errors={errors}
                register={register}
              />
            </div>
            <div className={`col-span-1 ${displayExtraFieldsClass}`}>
              <InputForm
                type="int"
                name="partials"
                label="Parcelas"
                placeholder="Digite a quantidade de parcelas do pagamento"
                errors={errors}
                register={register}
              />
            </div>
            <div className={`col-span-1 ${displayExtraFieldsClass}`}>
              <InputForm
                type="int"
                name="day"
                label="Dia"
                placeholder="Digite o dia de pagamento"
                errors={errors}
                register={register}
              />
            </div>
            <div className="col-span-1">
              <InputForm
                type="decimal"
                name="value"
                label="Valor"
                placeholder="Digite o valor da conta"
                errors={errors}
                register={register}
              />
            </div>
            <div className="col-span-1">
              <ButtonForm onFetch={isSubmitSuccessful}>Confirmar</ButtonForm>
            </div>
          </FormDiv.form>
        </form>
      </SimplePopover>
    </>
  )
}
