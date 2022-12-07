import { zodResolver } from '@hookform/resolvers/zod'
import { Funnel } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  billTypeChoices,
  billTypeChoicesType,
  paymentMethodChoices,
  paymentMethodChoicesType,
} from '../../../code/models/support/choices'
import {
  FilterBillSchema,
  FilterBillSchemaType,
} from '../../../code/schemas/bill/filter'
import { SimplePopover } from '../../../layout/components/Popovers/SimplePopover'
import { SelectField } from '../../../layout/themes/components/forms/SelectField'
import { Div as FormDiv } from '../../../layout/themes/styles/form'
import { ButtonForm } from '../../../layout/themes/styles/form/components/buttons'

export function FilterBillsForm({
  filterBills,
}: {
  filterBills: (
    billType: billTypeChoicesType | null,
    paymentMethod: paymentMethodChoicesType | null,
  ) => void
}) {
  const filterBillFormHook = useForm<FilterBillSchemaType>({
    resolver: zodResolver(FilterBillSchema),
  })
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = filterBillFormHook

  function onValidForm(data: FilterBillSchemaType) {
    filterBills(
      data.bill_type !== 'none' ? data.bill_type : null,
      data.payment_method !== 'none' ? data.payment_method : null,
    )
  }
  return (
    <SimplePopover long={false} button={<Funnel size={32} color="#fafafa" />}>
      <form onSubmit={handleSubmit(onValidForm)}>
        <FormDiv.form>
          <SelectField
            hasNullValue
            name="bill_type"
            label="Tipo"
            choices={billTypeChoices}
            errors={errors}
            register={register}
          />
          <SelectField
            hasNullValue
            name="payment_method"
            label="Meio de pagamento"
            choices={paymentMethodChoices}
            errors={errors}
            register={register}
          />
          <ButtonForm>Confirmar</ButtonForm>
        </FormDiv.form>
      </form>
    </SimplePopover>
  )
}
