import { Funnel } from 'phosphor-react'
import { CircleIcon } from '../../../layout/components/Icons/circle'
import { SimplePopover } from '../../../layout/components/Popovers/SimplePopover'
import { ChildrenSelect } from '../../../layout/components/Select/simple'
import { Div as FormDiv } from '../../../layout/themes/styles/form'
import { ButtonForm } from '../../../layout/themes/styles/form/components/buttons'

export function FilterBillsForm() {
  return (
    <SimplePopover long={false} button={<Funnel size={32} color="#fafafa" />}>
      <FormDiv.form>
        <FormDiv.fieldGroup>
          <label htmlFor="">Contas</label>
          <FormDiv.select>
            <ChildrenSelect
              data={[
                <span key="0">Todas</span>,
                <span key="1">
                  <CircleIcon size={12} color="#FF6B6B" /> Despesas
                </span>,
                <span key="2">
                  <CircleIcon size={12} color="#5ED5A8" /> Ganhos
                </span>,
              ]}
              initialValue="Todas"
            />
          </FormDiv.select>
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <label htmlFor="value">Valor</label>
          <input
            type="number"
            step={0.01}
            name="value"
            id="value"
            placeholder="Digite o valor da conta"
          />
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <label htmlFor="title">Buscar</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Busque pelo título da conta"
          />
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <ButtonForm>Filtrar</ButtonForm>
      </FormDiv.form>
    </SimplePopover>
  )
}
