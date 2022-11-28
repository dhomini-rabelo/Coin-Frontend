import { CircleNotch } from 'phosphor-react'

export function Loading() {
  return (
    <div className="flex items-center justify-center overflow-hidden text-black">
      <CircleNotch weight="bold" className="animate-spin" size={20} />
    </div>
  )
}
