import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'


export function CloseButton() {
    return (
        <Popover.Button className="text-zinc-500 hover:text-zinc-200" title="botão para fechar popup">
            <X weight="bold" size={24} className="text-white mr-3 mt-3" />
        </Popover.Button>
    )
}