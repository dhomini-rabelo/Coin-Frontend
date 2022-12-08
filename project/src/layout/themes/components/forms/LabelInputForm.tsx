import { Div } from '../../styles/form'

export function LabelInputForm({
  name,
  value,
  label,
}: {
  name: string
  value: any
  label: string
}) {
  return (
    <Div.fieldGroup>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} id={name} value={value} disabled />
      <Div.error></Div.error>
    </Div.fieldGroup>
  )
}
