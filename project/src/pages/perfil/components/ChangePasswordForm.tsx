import { zodResolver } from '@hookform/resolvers/zod'
import { LockSimple } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  changePasswordSchema,
  changePasswordSchemaType,
} from '../../../code/schemas/profile/changePassword'
import { SimplePopover } from '../../../layout/components/Popovers/SimplePopover'
import { SimpleBox } from '../../../layout/components/SimpleBox'
import { Div as FormDiv } from '../../../layout/themes/styles/form'
import { ButtonForm } from '../../../layout/themes/styles/form/components/buttons'
import { Error } from '../../../layout/components/Error'
import { client } from '../../../core/settings'
import { showErrorMessages } from '../../../code/utils/errors'
import { useFeedback } from '../../../code/hooks/useFeedback'
import { useContext } from 'react'
import { AuthContext } from '../../../code/contexts/Auth'

export function ChangePasswordForm() {
  const { FeedbackElement, renderFeedback } = useFeedback()
  const {
    actions: { logout },
  } = useContext(AuthContext)
  const changePasswordFormHook = useForm<changePasswordSchemaType>({
    resolver: zodResolver(changePasswordSchema),
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    register,
    setError,
    reset,
  } = changePasswordFormHook

  function onValidSubmit(data: changePasswordSchemaType) {
    client
      .put('change-password', {
        current_password: data.current_password,
        password: data.new_password,
      })
      .then((response) => {
        renderFeedback('success', 'Senha alterada com sucesso', () => logout())
      })
      .catch((error) => {
        if (error.response.status === 400) {
          showErrorMessages<changePasswordSchemaType>(
            error.response.data,
            data,
            setError,
            reset,
            { password: 'new_password' },
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
            icon={<LockSimple size={40} color="#fff" />}
            title="Alterar senha"
            description="Altere a senha da sua conta"
          />
        }
      >
        <FormDiv.form>
          <form
            onSubmit={handleSubmit(onValidSubmit, (data) => console.log(data))}
          >
            <FormDiv.fieldGroup>
              <label htmlFor="current_password">Senha atual</label>
              <input
                type="password"
                placeholder="Digite sua senha atual"
                {...register('current_password')}
              />
              <Error field="current_password" errors={errors} />
            </FormDiv.fieldGroup>
            <FormDiv.fieldGroup>
              <label htmlFor="new_password">Nova Senha</label>
              <input
                type="password"
                placeholder="Digite sua nova senha"
                {...register('new_password')}
              />
              <Error field="new_password" errors={errors} />
            </FormDiv.fieldGroup>
            <FormDiv.fieldGroup>
              <label htmlFor="confirm-new_password">Confirmar Senha</label>
              <input
                type="password"
                placeholder="Confirme sua nova senha"
                {...register('confirm_new_password')}
              />
              <Error field="confirm_new_password" errors={errors} />
            </FormDiv.fieldGroup>
            <ButtonForm onFetch={isSubmitSuccessful}>Confirmar</ButtonForm>
          </form>
        </FormDiv.form>
      </SimplePopover>
    </>
  )
}
