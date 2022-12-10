import { CircleNotch } from 'phosphor-react'

export function LoadingPage() {
  return (
    <div className="grow flex flex-col items-center justify-center text-pBlack-600">
      <div className="flex items-center text-white mt-8">
        <CircleNotch weight="bold" className="w-4 h-4 animate-spin inline" />
        <strong className="ml-1">Carregando...</strong>
      </div>
    </div>
  )
}
