import { Div } from '../../themes/styles/form'
import { Link, useNavigate } from 'react-router-dom'
import { ButtonForm } from '../../themes/styles/form/components/buttons'
import { useFeedback } from '../../code/hooks/useFeedback'
import { useForm } from 'react-hook-form'
import { LoginSchema, LoginSchemaType } from '../../code/schemas/login'
import { zodResolver } from '@hookform/resolvers/zod'

export function LoginPage() {
  // const navigateTo = useNavigate()
  // const { FeedbackElement, renderFeedback } = useFeedback()
  // const registerForm = useForm<LoginSchemaType>({
  //   resolver: zodResolver(LoginSchema),
  // })
  // const {
  //   handleSubmit,
  //   formState: { errors, isSubmitSuccessful },
  //   register,
  //   setError,
  //   reset,
  // } = registerForm
  return (
    <Div.container>
      <div className="logoContainer">
        <img src="/core/logo.svg" alt="logo" />
      </div>
      <Div.form>
        <Div.fieldGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
          />
          <Div.error>
            <img src="/forms/error.svg" alt="error-icon" />
            <span>Este campo é obrigatório</span>
          </Div.error>
        </Div.fieldGroup>
        <Div.fieldGroup>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
          <Div.forgot>
            <Div.error>
              <img src="/forms/error.svg" alt="error-icon" />
              <span>Este campo é obrigatório</span>
            </Div.error>
            <a href="#">Esqueceu a senha?</a>
          </Div.forgot>
        </Div.fieldGroup>
        <ButtonForm>Entrar</ButtonForm>
        <Div.btnBottom>
          <Link to="/cadastro">Criar uma conta</Link>
        </Div.btnBottom>
      </Div.form>
    </Div.container>
  )
}
