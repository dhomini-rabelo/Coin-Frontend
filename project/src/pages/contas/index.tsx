import { Funnel, Plus } from 'phosphor-react';
import { BillBoxList } from '../../components/BillBoxList';
import { SimpleButton } from '../../components/Buttons/simple';
import { SimplePopover } from '../../components/Popovers/SimplePopover';
import { AccountPagesModel } from '../../themes/pages/account';
import {Div, H1, Button} from './styles';
import {Div as FormDiv} from '../../themes/styles/form';
import { ButtonForm } from '../../themes/styles/form/components/buttons';
import { ReactNode } from 'react';
import { SimpleSelect } from '../../components/Select/simple';


function AddBillFormPopover({button}: {button: ReactNode}) {
  return (
    <SimplePopover button={button}>
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
          <input type="text" name="title" id="title" placeholder="Digite o título da conta" />
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <label htmlFor="description">Descrição (opcional)</label>
          <textarea name="description" id="description" placeholder="Digite a descrição da conta" rows={3}></textarea>
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <label htmlFor="value">Valor</label>
          <input type="number" step={0.01} name="value" id="value" placeholder="Digite o valor da conta" />
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
          <input type="text" name="date" id="date" placeholder="Digite a data de pagamento" />
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <div className="checkbox-group">
            <input type="checkbox" name="notification" id="notification" />
            <span>Ativar notificação</span>
          </div>
        </FormDiv.fieldGroup>
        <ButtonForm>Confirmar</ButtonForm>
      </FormDiv.form>
    </SimplePopover>
  )
}


export function BillPage() {
  return (
    <AccountPagesModel>
      <Div.container>
        <Div.title>
          <H1.title>Contas</H1.title>
          <Div.funel>
            <Funnel size={32} color='#fafafa' />
            <AddBillFormPopover button={<SimpleButton id="addBill">Adicionar</SimpleButton>} />
          </Div.funel>
        </Div.title>
        <BillBoxList />
      </Div.container>
      <AddBillFormPopover button={<Button.addBill><Plus size={28} /></Button.addBill>} />

    </AccountPagesModel>
  );
}
