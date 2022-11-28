import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'


export function CloseButton() {
    return (
        <Popover.Button className="text-zinc-500 hover:text-zinc-200" title="botão para fechar popup">
            <X weight="bold" size={30} className="text-white mr-4 mt-4" />
        </Popover.Button>
    )
}