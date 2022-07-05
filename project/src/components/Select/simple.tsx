import { ReactNode, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'

export function SimpleSelect({data, initialValue}: {data: Array<string>, initialValue: string}) {
    const [selectedPerson, setSelectedPerson] = useState(initialValue)
    let counter = -70
    return (
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className="block truncate">{selectedPerson}</Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options>
            {data.map((option, index) => {
              counter += 40
              return (
              <Listbox.Option style={{position: 'fixed', left: '0', top: `${counter}px`, display: 'block !important', backgroundColor:'#363636', width: '100%'}} key={index} value={option}>
                {option}
              </Listbox.Option>
            )})}
          </Listbox.Options>
        </Transition>
      </Listbox>
    )
}

export function ChildrenSelect({data, initialValue}: {data: Array<ReactNode>, initialValue: string}) {
    const [selectedPerson, setSelectedPerson] = useState(initialValue)
    let counter = -70
    return (
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className="block truncate">{selectedPerson}</Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options>
            {data.map((option, index) => {
              counter += 40
              return (
              <Listbox.Option style={{position: 'fixed', left: '0', top: `${counter}px`, display: 'block !important', backgroundColor:'#363636', width: '100%'}} key={index} value={option}>
                {option}
              </Listbox.Option>
            )})}
          </Listbox.Options>
        </Transition>
      </Listbox>
    )
}
  