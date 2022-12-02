import { SimplePopover } from '../../../layout/components/Popovers/SimplePopover'
import { SimpleBox } from '../../../layout/components/SimpleBox'
import { Div as FormDiv } from '../../../layout/themes/styles/form'
import { Envelope } from 'phosphor-react'
import { ButtonForm } from '../../../layout/themes/styles/form/components/buttons'
import { AuthContext } from '../../../code/contexts/Auth'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {
  ChangeEmailSchema,
  ChangeEmailSchemaType,
} from '../../../code/schemas/profile/changeEmail'
import { zodResolver } from '@hookform/resolvers/zod'
import { Error } from '../../../layout/components/Error'
import { client } from '../../../core/settings'
import { useFeedback } from '../../../code/hooks/useFeedback'
import { showErrorMessages } from '../../../code/utils/errors'

export function ChangeEmailForm() {
  const { FeedbackElement, renderFeedback } = useFeedback()
  const {
    auth: { email },
    actions: { logout },
  } = useContext(AuthContext)
  const changeEmailFormHook = useForm<ChangeEmailSchemaType>({
    resolver: zodResolver(ChangeEmailSchema),
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    register,
    setError,
    reset,
  } = changeEmailFormHook

  function onValidSubmit(data: ChangeEmailSchemaType) {
    client
      .put('change-email', {
        email: data.new_email,
      })
      .then((response) => {
        renderFeedback('success', 'Email alterado com sucesso', () => {
          logout()
        })
      })
      .catch((error) => {
        if (error.response.status === 400) {
          showErrorMessages<ChangeEmailSchemaType>(
            error.response.data,
            data,
            setError,
            reset,
            { email: 'new_email' },
          )
        } else if (error.response.status === 401) {
          reset(data)
          renderFeedback('error', 'Credenciais incorretas')
        } else {
          reset(data)
          renderFeedback('error', 'Server Error')
        }
      })
  }

  return (
    <>
      {FeedbackElement}
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
          <form onSubmit={handleSubmit(onValidSubmit)}>
            <FormDiv.fieldGroup>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                disabled
                value={email}
              />
              <FormDiv.error></FormDiv.error>
            </FormDiv.fieldGroup>
            <FormDiv.fieldGroup>
              <label htmlFor="new-email">Novo Email</label>
              <input
                type="email"
                placeholder="Digite seu novo email"
                {...register('new_email')}
              />
              <Error field="new_email" errors={errors} />
            </FormDiv.fieldGroup>
            <FormDiv.fieldGroup>
              <label htmlFor="confirm-new-email">Confirmar Email</label>
              <input
                type="email"
                placeholder="Confirme seu novo email"
                {...register('confirm_new_email')}
              />
              <Error field="confirm_new_email" errors={errors} />
            </FormDiv.fieldGroup>
            <ButtonForm onFetch={isSubmitSuccessful}>Confirmar</ButtonForm>
          </form>
        </FormDiv.form>
      </SimplePopover>
    </>
  )
}
