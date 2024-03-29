import { Div } from '../../layout/themes/styles/form'
import { Link, useNavigate } from 'react-router-dom'
import { ButtonForm } from '../../layout/themes/styles/form/components/buttons'
import { useFeedback } from '../../code/hooks/useFeedback'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginSchemaType } from '../../code/schemas/auth/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { client } from '../../core/settings'
import { useContext } from 'react'
import { AuthContext } from '../../code/contexts/Auth'
import { showErrorMessages } from '../../code/utils/errors'
import { InputForm } from '../../layout/themes/components/forms/InputForm'

export function LoginPage() {
  const {
    actions: { login },
  } = useContext(AuthContext)
  const navigateTo = useNavigate()
  const { FeedbackElement, renderFeedback } = useFeedback()
  const LoginForm = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    register,
    setError,
    reset,
  } = LoginForm

  function onValidSubmit(data: LoginSchemaType) {
    client
      .post('get-token', {
        username: data.email,
        password: data.password,
      })
      .then((response) => {
        login(
          data.email,
          response.data.user.notification_time,
          response.data.tokens.access,
          response.data.tokens.refresh,
        )
        navigateTo('/renda')
      })
      .catch((error) => {
        if (error.response.status === 400) {
          renderFeedback('error', 'Dados inválidos')
          showErrorMessages<LoginSchemaType>(
            error.response.data,
            data,
            setError,
            reset,
          )
        } else if (error.response.status === 401) {
          reset(data)
          renderFeedback('error', 'Credenciais incorretas')
        } else {
          renderFeedback('error', 'Server Error')
        }
      })
  }

  return (
    <Div.container>
      {FeedbackElement}
      <div className="logoContainer">
        <img src="/core/logo.svg" alt="logo" />
      </div>
      <Div.form>
        <form onSubmit={handleSubmit(onValidSubmit)}>
          <InputForm
            type="email"
            name="email"
            label="Email"
            placeholder="Digite seu email"
            errors={errors}
            register={register}
          />
          <InputForm
            type="password"
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            errors={errors}
            register={register}
          />
          <ButtonForm onFetch={isSubmitSuccessful}>Entrar</ButtonForm>
          <Div.btnBottom>
            <Link to="/cadastro">Criar uma conta</Link>
          </Div.btnBottom>
        </form>
      </Div.form>
    </Div.container>
  )
}
