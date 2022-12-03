import { Div } from '../../styles/form'

export function LabelInputForm({ name, value }: { name: string; value: any }) {
  return (
    <Div.fieldGroup>
      <label htmlFor={name}>Email</label>
      <input type="text" name={name} id={name} value={value} disabled />
      <Div.error></Div.error>
    </Div.fieldGroup>
  )
}
