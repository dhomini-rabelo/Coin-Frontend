import { Div } from '../../layout/themes/styles/form'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { ButtonForm } from '../../layout/themes/styles/form/components/buttons'
import {
  RegisterUserSchema,
  RegisterUserSchemaType,
} from '../../code/schemas/auth/register'
import { useForm } from 'react-hook-form'
import { useFeedback } from '../../code/hooks/useFeedback'
import { client } from '../../core/settings'
import { showErrorMessages } from '../../code/utils/errors'
import { InputForm } from '../../layout/themes/components/forms/InputForm'

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
      .post('register', data, {
        headers: {
          Authorization: '',
        },
      })
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
          <InputForm
            type="password"
            name="confirm_password"
            label="Confirmar Senha"
            placeholder="Confirme sua senha"
            errors={errors}
            register={register}
          />
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
