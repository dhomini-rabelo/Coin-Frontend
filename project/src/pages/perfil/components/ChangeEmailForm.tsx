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
import { client } from '../../../core/settings'
import { useFeedback } from '../../../code/hooks/useFeedback'
import { showErrorMessages } from '../../../code/utils/errors'
import { InputForm } from '../../../layout/themes/components/forms/InputForm'
import { LabelInputForm } from '../../../layout/themes/components/forms/LabelInputForm'

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
        renderFeedback('success', 'Email alterado com sucesso', () => logout())
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
            <LabelInputForm name="email" value={email} />
            <InputForm
              type="email"
              name="new_email"
              label="Novo Email"
              placeholder="Digite seu novo email"
              errors={errors}
              register={register}
            />
            <InputForm
              type="email"
              name="confirm_new_email"
              label="Confirmar Email"
              placeholder="Confirme seu novo email"
              errors={errors}
              register={register}
            />
            <ButtonForm onFetch={isSubmitSuccessful}>Confirmar</ButtonForm>
          </form>
        </FormDiv.form>
      </SimplePopover>
    </>
  )
}
