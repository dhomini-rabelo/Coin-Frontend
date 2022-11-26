import { Div } from '../../themes/styles/form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { ButtonForm } from '../../themes/styles/form/components/buttons';
import { RegisterUserSchema, RegisterUserSchemaType } from '../../code/schemas/user';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Error } from '../../components/Error';

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
      <div className="logoContainer"><img src="/core/logo.svg" alt="logo" /></div>
      <Div.form>
        <form onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}>
          <Div.fieldGroup>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite seu email" {...register('email')} />
            <Error field="email" errors={errors} />
          </Div.fieldGroup>
          <Div.fieldGroup>
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite sua senha" {...register('password')} />
            <Error field="password" errors={errors} />
          </Div.fieldGroup>
          <Div.fieldGroup>
            <label htmlFor="confirm_password">Confirmar Senha</label>
            <input type="password" placeholder="Confirme sua senha" {...register('confirm_password')} />
            <Error field="confirm_password" errors={errors} />
          </Div.fieldGroup>
          <ButtonForm active={true}>Cadastrar</ButtonForm>
          <Div.btnBottom>
            <Link to="/login">Fazer login</Link>
          </Div.btnBottom>
        </form>
      </Div.form>
    </Div.container>
  );
}
