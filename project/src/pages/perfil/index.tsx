import { Div } from './styles'
import { Div as FormDiv } from '../../layout/themes/styles/form'
import { SimpleBox } from '../../layout/components/SimpleBox'
import { LockSimple } from 'phosphor-react'
import { SimplePopover } from '../../layout/components/Popovers/SimplePopover'
import { ButtonForm } from '../../layout/themes/styles/form/components/buttons'
import { ChangeNotificationTimeForm } from './components/ChangeNotificationTimeForm'
import { ChangeEmailForm } from './components/ChangeEmailForm'

export function AccountPage() {
  return (
    <Div.container>
      <ChangeEmailForm />

      <ChangeNotificationTimeForm />

      <SimplePopover
        button={
          <SimpleBox
            icon={<LockSimple size={40} color="#fff" />}
            title="Alterar senha"
            description="Altere a senha da sua conta"
          />
        }
      >
        <FormDiv.form>
          <FormDiv.fieldGroup>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
            />
            <FormDiv.error></FormDiv.error>
          </FormDiv.fieldGroup>
          <FormDiv.fieldGroup>
            <label htmlFor="new-password">Nova Senha</label>
            <input
              type="password"
              name="new-password"
              id="new-password"
              placeholder="Digite sua nova senha"
            />
            <FormDiv.error></FormDiv.error>
          </FormDiv.fieldGroup>
          <FormDiv.fieldGroup>
            <label htmlFor="confirm-new-password">Confirmar Senha</label>
            <input
              type="password"
              name="confirm-new-password"
              id="confirm-new-password"
              placeholder="Digite sua nova senha"
            />
            <FormDiv.error></FormDiv.error>
          </FormDiv.fieldGroup>
          <ButtonForm>Confirmar</ButtonForm>
        </FormDiv.form>
      </SimplePopover>
    </Div.container>
  )
}
