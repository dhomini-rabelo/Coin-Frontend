import { Popover } from '@headlessui/react'
import { ReactNode } from 'react'
import { CloseButton } from '../CloseButton'
import { Div } from './styles'

export function SimplePopover({
  button,
  children,
  long = false,
  popoverClass = 'flex w-full',
}: {
  button: ReactNode | string
  children: ReactNode
  long?: boolean
  popoverClass?: string
}) {
  return (
    <Popover className={popoverClass}>
      <Popover.Panel>
        <Div.container>
          <Div.box long={long}>
            <Div.header>
              <CloseButton></CloseButton>
            </Div.header>
            {long ? (
              <div className="long-form">{children}</div>
            ) : (
              <div>{children}</div>
            )}
          </Div.box>
        </Div.container>
      </Popover.Panel>

      <Popover.Button className="flex-1 max-w-[100%]">{button}</Popover.Button>
    </Popover>
  )
}
