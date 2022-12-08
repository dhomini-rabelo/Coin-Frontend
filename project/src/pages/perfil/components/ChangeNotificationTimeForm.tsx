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
import { processFormErrorResponse } from '../../../code/utils/errors'
import { SelectField } from '../../../layout/themes/components/forms/SelectField'
import { notificationTimeChoices } from '../../../code/models/support/choices'
import { LabelInputForm } from '../../../layout/themes/components/forms/LabelInputForm'

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
        processFormErrorResponse<ChangeNotificationTimeSchemaType>(
          error,
          data,
          setError,
          reset,
          renderFeedback,
        )
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
            <LabelInputForm name="email" value={email} label="Email" />
            <SelectField
              name="notification_time"
              label="Horário"
              choices={notificationTimeChoices}
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
