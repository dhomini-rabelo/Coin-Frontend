import {Div} from './styles';
import {Div as FormDiv} from '../../themes/styles/form';
import { AccountPagesModel } from '../../themes/pages/account/index'
import { SimpleBox } from '../../components/SimpleBox';
import { Popover } from '@headlessui/react'
import { Envelope, LockSimple, Watch } from 'phosphor-react';
import { SimplePopover } from '../../components/Popovers/SimplePopover';
import { ButtonForm } from '../../themes/styles/form/components/buttons';
import { SimpleSelect } from '../../components/Select/simple';




export function AccountPage() {
  return (
    <AccountPagesModel>
      <Div.container>


    <SimplePopover 
      button={<SimpleBox icon={<Envelope size={40} color="#fff" />} title='Alterar email' description='Altere o endereço de email da sua conta' />}
    >
          <FormDiv.form>
            <FormDiv.fieldGroup>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" placeholder="Digite seu email" />
              <FormDiv.error></FormDiv.error>
            </FormDiv.fieldGroup>
            <FormDiv.fieldGroup>
              <label htmlFor="new-email">Novo Email</label>
              <input type="email" name="new-email" id="new-email" placeholder="Digite seu novo email" />
              <FormDiv.error></FormDiv.error>
            </FormDiv.fieldGroup>
            <FormDiv.fieldGroup>
              <label htmlFor="confirm-new-email">Confirmar Email</label>
              <input type="email" name="confirm-new-email" id="confirm-new-email" placeholder="Confirme seu novo email" />
              <FormDiv.error></FormDiv.error>
            </FormDiv.fieldGroup>
            <ButtonForm>Confirmar</ButtonForm>
          </FormDiv.form>
    </SimplePopover>
    
    <SimplePopover 
      button={<SimpleBox icon={<Watch size={40} color="#fff" />} title='Alterar envio' description='Altere o horário do envio de alertas por email' />}
    >
          <FormDiv.form>
            <FormDiv.fieldGroup>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" disabled value="test@test.test" />
              <FormDiv.error></FormDiv.error>
            </FormDiv.fieldGroup>
            <FormDiv.fieldGroup>
              <label htmlFor="">Horário</label>
              <FormDiv.select>
                <SimpleSelect data={['8:00', '12:00', '16:00', '20:00']} initialValue="16:00" />
              </FormDiv.select>
            </FormDiv.fieldGroup>
            <ButtonForm>Confirmar</ButtonForm>
          </FormDiv.form>
      </SimplePopover>

      <SimplePopover 
          button={<SimpleBox icon={<LockSimple size={40} color="#fff" />} title='Alterar senha' description='Altere a senha da sua conta' />}
        >
              <FormDiv.form>
                <FormDiv.fieldGroup>
                  <label htmlFor="password">Senha</label>
                  <input type="password" name="password" id="password" placeholder="Digite sua senha" />
                  <FormDiv.error></FormDiv.error>
                </FormDiv.fieldGroup>
                <FormDiv.fieldGroup>
                  <label htmlFor="new-password">Nova Senha</label>
                  <input type="password" name="new-password" id="new-password" placeholder="Digite sua nova senha" />
                  <FormDiv.error></FormDiv.error>
                </FormDiv.fieldGroup>
                <FormDiv.fieldGroup>
                  <label htmlFor="confirm-new-password">Confirmar Senha</label>
                  <input type="password" name="confirm-new-password" id="confirm-new-password" placeholder="Digite sua nova senha" />
                  <FormDiv.error></FormDiv.error>
                </FormDiv.fieldGroup>
                <ButtonForm>Confirmar</ButtonForm>
              </FormDiv.form>
      </SimplePopover>

      </Div.container>
    </AccountPagesModel>
  );
}