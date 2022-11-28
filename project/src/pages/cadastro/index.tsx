import { Div } from '../../layout/themes/styles/form'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonForm } from '../../layout/themes/styles/form/components/buttons'
import {
  RegisterUserSchema,
  RegisterUserSchemaType,
} from '../../code/schemas/user'
import { useForm } from 'react-hook-form'
import { Error } from '../../components/Error'
import { useFeedback } from '../../code/hooks/useFeedback'
import { client } from '../../core/settings'
import { showErrorMessages } from '../../code/utils/errors'

export function RegisterPage() {
  const navigateTo = useNavigate()
  const { FeedbackElement, renderFeedback } = useFeedback()
  const registerForm = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema),
  })
  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    register,
    setError,
    reset,
  } = registerForm

  function onValidSubmit(data: RegisterUserSchemaType) {
    client
      .post('register', data)
      .then((response) => {
        renderFeedback('success', 'Usuário cadastrado com sucesso', () => {
          navigateTo('/')
        })
      })
      .catch((error) => {
        showErrorMessages<RegisterUserSchemaType>(
          error.response.data,
          data,
          setError,
          reset,
        )
      })
  }

  return (
    <Div.container>
      <div className="logoContainer">
        <img src="/core/logo.svg" alt="logo" />
      </div>
      <Div.form>
        <form onSubmit={handleSubmit(onValidSubmit)}>
          <Div.fieldGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            <Error field="email" errors={errors} />
          </Div.fieldGroup>
          <Div.fieldGroup>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              {...register('password')}
            />
            <Error field="password" errors={errors} />
          </Div.fieldGroup>
          <Div.fieldGroup>
            <label htmlFor="confirm_password">Confirmar Senha</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register('confirm_password')}
            />
            <Error field="confirm_password" errors={errors} />
          </Div.fieldGroup>
          <ButtonForm onFetch={isSubmitSuccessful}>Cadastrar</ButtonForm>
          <Div.btnBottom>
            <Link to="/">Fazer login</Link>
          </Div.btnBottom>
        </form>
      </Div.form>
      {FeedbackElement}
    </Div.container>
  )
}
