import { SimplePopover } from '../../../layout/components/Popovers/SimplePopover'
import { SimpleBox } from '../../../layout/components/SimpleBox'
import { Div as FormDiv } from '../../../layout/themes/styles/form'
import { Envelope } from 'phosphor-react'
import { ButtonForm } from '../../../layout/themes/styles/form/components/buttons'

export function ChangeEmailForm() {
  return (
    <SimplePopover
      button={
        <SimpleBox
          icon={<Envelope size={40} color="#fff" />}
          title="Alterar email"
          description="Altere o endereço de email da sua conta"
        />
      }
    >
      <FormDiv.form>
        <FormDiv.fieldGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
          />
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <label htmlFor="new-email">Novo Email</label>
          <input
            type="email"
            name="new-email"
            id="new-email"
            placeholder="Digite seu novo email"
          />
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <FormDiv.fieldGroup>
          <label htmlFor="confirm-new-email">Confirmar Email</label>
          <input
            type="email"
            name="confirm-new-email"
            id="confirm-new-email"
            placeholder="Confirme seu novo email"
          />
          <FormDiv.error></FormDiv.error>
        </FormDiv.fieldGroup>
        <ButtonForm>Confirmar</ButtonForm>
      </FormDiv.form>
    </SimplePopover>
  )
}
