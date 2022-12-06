import { Funnel, Plus } from 'phosphor-react'
import { BillBoxList } from '../../layout/components/BillBoxList'
import { SimpleButton } from '../../layout/components/Buttons/simple'
import { SimplePopover } from '../../layout/components/Popovers/SimplePopover'
import { Div, H1, Span } from './styles'
import { Div as FormDiv } from '../../layout/themes/styles/form'
import { ButtonForm } from '../../layout/themes/styles/form/components/buttons'
import { ChildrenSelect } from '../../layout/components/Select/simple'
import { CircleIcon } from '../../layout/components/Icons/circle'
import { AddBillForm } from './components/AddBillForm'
import { useEffect, useState } from 'react'
import { BillModel } from '../../code/models/bill'
import { client } from '../../core/settings'

export function BillPage() {
  const [bills, setBills] = useState<BillModel[]>([])

  useEffect(() => {
    client.get('bills').then((response) => setBills(response.data))
  }, [])

  return (
    <>
      <Div.container>
        <Div.title>
          <H1.title>Contas</H1.title>
          <Div.funel>
            <SimplePopover
              long={false}
              button={<Funnel size={32} color="#fafafa" />}
            >
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
            <AddBillForm>
              <SimpleButton id="addBill">Adicionar</SimpleButton>
            </AddBillForm>
          </Div.funel>
        </Div.title>
        <BillBoxList bills={bills} />
      </Div.container>

      <AddBillForm>
        <Span.addBill>
          <Plus size={28} />
        </Span.addBill>
      </AddBillForm>
    </>
  )
}
