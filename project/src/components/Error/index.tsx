import { Div } from '../../themes/styles/form';


export function Error({ message }: { message: string }) {
  return (
    <Div.error><img src="/forms/error.svg" alt="error-icon" /><span>{message}</span></Div.error>
  )
}