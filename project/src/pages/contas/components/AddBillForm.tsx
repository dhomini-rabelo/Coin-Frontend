import { SimplePopover } from '../../../layout/components/Popovers/SimplePopover'
import { Div as FormDiv } from '../../../layout/themes/styles/form'
import { ReactNode } from 'react'
import { ButtonForm } from '../../../layout/themes/styles/form/components/buttons'
import { SimpleSelect } from '../../../layout/components/Select/simple'

export function AddBillForm({ children }: { children: ReactNode }) {
  return (
    <SimplePopover button={children} long={true}>
      <FormDiv.form>
        <FormDiv.fieldGroup>
          <label htmlFor="">Modelo</label>
          <FormDiv.select>
            <SimpleSelect data={['Rápido', 'Agendado']} initialValue="Rápido" />
          </FormDiv.select>
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Digite o título da conta"
          />
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <label htmlFor="description">Descrição (opcional)</label>
          <textarea
            name="description"
            id="description"
            placeholder="Digite a descrição da conta"
            rows={2}
          ></textarea>
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
          <label htmlFor="">Tipo</label>
          <FormDiv.select>
            <SimpleSelect data={['Ganho', 'Despesa']} initialValue="Ganho" />
          </FormDiv.select>
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <label htmlFor="date">Data</label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="Digite a data de pagamento"
          />
          <FormDiv.error></FormDiv.error>
          <div className="flex items-center">
            <input
              id="checked-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="checked-checkbox"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 checkbox-label"
            >
              Ativar notificação
            </label>
          </div>
        </FormDiv.fieldGroup>
        <ButtonForm>Confirmar</ButtonForm>
      </FormDiv.form>
    </SimplePopover>
  )
}
