import { Watch } from 'phosphor-react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../code/contexts/Auth'
import {
  ChangeNotificationTimeSchema,
  ChangeNotificationTimeSchemaType,
} from '../../../code/schemas/profile/ChangeNotificationTime'
import { useFeedback } from '../../../code/hooks/useFeedback'
import { SimplePopover } from '../../../layout/components/Popovers/SimplePopover'
import { SimpleBox } from '../../../layout/components/SimpleBox'
import { Div as FormDiv } from '../../../layout/themes/styles/form'
import { ButtonForm } from '../../../layout/themes/styles/form/components/buttons'
import { zodResolver } from '@hookform/resolvers/zod'
import { client } from '../../../core/settings'
import { showErrorMessages } from '../../../code/utils/errors'
import { Error } from '../../../layout/components/Error'

export function ChangeNotificationTimeForm() {
  const { FeedbackElement, renderFeedback } = useFeedback()
  const {
    auth: { email, notificationTime },
    actions: { setNotificationTime },
  } = useContext(AuthContext)
  const ChangeNotificationTimeFormHook =
    useForm<ChangeNotificationTimeSchemaType>({
      resolver: zodResolver(ChangeNotificationTimeSchema),
      defaultValues: {
        notification_time: notificationTime,
      },
    })
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    register,
    setError,
    reset,
  } = ChangeNotificationTimeFormHook

  function onValidSubmit(data: ChangeNotificationTimeSchemaType) {
    client
      .put('change-notification-time', data)
      .then((response) => {
        reset(data)
        renderFeedback('success', 'Horário alterado com sucesso')
        setNotificationTime(response.data.notification_time)
      })
      .catch((error) => {
        if (error.response.status === 400) {
          showErrorMessages<ChangeNotificationTimeSchemaType>(
            error.response.data,
            data,
            setError,
            reset,
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
            icon={<Watch size={40} color="#fff" />}
            title="Alterar envio"
            description="Altere o horário do envio de alertas por email"
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
                value={email}
                disabled
              />
              <FormDiv.error></FormDiv.error>
            </FormDiv.fieldGroup>
            <FormDiv.fieldGroup>
              <label htmlFor="notification_time">Horário</label>
              <select {...register('notification_time')}>
                <option value="8">8h</option>
                <option value="12">12h</option>
                <option value="16">16h</option>
                <option value="20">20h</option>
              </select>
              <Error field="notification_time" errors={errors} />
            </FormDiv.fieldGroup>
            <ButtonForm onFetch={isSubmitSuccessful}>Confirmar</ButtonForm>
          </form>
        </FormDiv.form>
      </SimplePopover>
    </>
  )
}
