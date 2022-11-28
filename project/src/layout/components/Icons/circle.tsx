import { Circle } from 'phosphor-react'

export function CircleIcon({ size, color }: { size: number; color: string }) {
  return (
    <Circle
      size={size}
      className="inline"
      style={{ backgroundColor: color, color, borderRadius: '50%' }}
    />
  )
}
