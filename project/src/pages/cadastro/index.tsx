import { Div } from '../../themes/styles/form';
import Logo from '../../../assets/global/favicon.svg';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonForm } from '../../themes/styles/form/components/buttons';
import { RegisterUserSchema, RegisterUserSchemaType } from '../../code/schemas/user';
import { SubmitErrorHandler, useForm } from 'react-hook-form';

export function RegisterPage() {
  const registerForm = useForm<RegisterUserSchemaType>({
    resolver: zodResolver(RegisterUserSchema),
  })
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = registerForm

  function onValidSubmit(data: RegisterUserSchemaType) {
    console.log(data)
  }

  function onInValidSubmit() {
    console.log(errors)
  }

  return (
    <Div.container>
      <div className="logoContainer"><img src={Logo} alt="logo" /></div>
      <Div.form>
        <form onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}>
          <Div.fieldGroup>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite seu email" {...register('email')} />
            <Div.error></Div.error>
          </Div.fieldGroup>
          <Div.fieldGroup>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite sua senha" {...register('password')} />
            <Div.error></Div.error>
          </Div.fieldGroup>
          <Div.fieldGroup>
            <label htmlFor="confirm-password">Confirmar Senha</label>
            <input type="password" placeholder="Confirme sua senha" {...register('confirm_password')} />
            <Div.error></Div.error>
          </Div.fieldGroup>
          <ButtonForm>Cadastrar</ButtonForm>
          <Div.btnBottom>
            <Link to="/login">Fazer login</Link>
          </Div.btnBottom>
        </form>
      </Div.form>
    </Div.container>
  );
}
