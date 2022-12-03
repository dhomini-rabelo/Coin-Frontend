import { Div } from './styles'
import { ChangeNotificationTimeForm } from './components/ChangeNotificationTimeForm'
import { ChangeEmailForm } from './components/ChangeEmailForm'
import { ChangePasswordForm } from './components/ChangePasswordForm'

export function AccountPage() {
  return (
    <Div.container>
      <ChangeEmailForm />

      <ChangeNotificationTimeForm />

      <ChangePasswordForm />
    </Div.container>
  )
}
