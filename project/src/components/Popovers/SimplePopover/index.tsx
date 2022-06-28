import { Popover } from '@headlessui/react'
import { ReactNode } from 'react'
import { CloseButton } from '../CloseButton'
import { Div } from './styles'


export function SimplePopover({button, children}: {button:ReactNode, children:ReactNode}) {
    return (
        <Popover>

        <Popover.Panel>
            <Div.container>
                <Div.box>
                    <Div.header>
                        <CloseButton></CloseButton>
                    </Div.header>
                    {children}
                </Div.box>
            </Div.container>
        </Popover.Panel>

        <Popover.Button>{button}</Popover.Button>

      </Popover>
    )
}