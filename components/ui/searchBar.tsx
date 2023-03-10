import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Combobox, Transition, Dialog } from '@headlessui/react'
import { BeakerIcon, CheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { type } from 'os'

const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
]

const SearchBar = ({ isOpen = false, setIsOpen }: { isOpen: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
    type person = {
        id: number;
        name: string;
    }

    const [selected, setSelected] = useState(people[0])
    const [query, setQuery] = useState('')
    // const [isOpen, setIsOpen] = useState(true);





    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    return (
        <div className='flex  items-center '>
            <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
                <Dialog

                    onClose={setIsOpen}
                    className="fixed inset-0 p-4 pt-[10vh] overflow-y-auto z-20 w- px-32"
                >
                    <Dialog.Overlay className="fixed inset-0 backdrop-blur-[1px]  bg-gray-500/75" />



                    <Combobox nullable={true} value={selected} onChange={(event) => {
                        setIsOpen(false)
                        setSelected(event)
                    }}>
                        <div className="relative mt-1 " >
                            <div className=" w-full cursor-default overflow-hidden rounded-lg bg-mattblack text-left shadow-md border border-mattblack hover:border-black p-1 sm:text-sm">


                                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                                    <MagnifyingGlassIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </Combobox.Button>


                                <Combobox.Input

                                    placeholder='Search'
                                    className="w-full border-none py-2 bg-mattblack pl-3 pr-10 text-sm leading-5 text-white focus:outline-none"
                                    displayValue={(person: person) => ''}
                                    onChange={(event) => {
                                        // setIsOpen(false)
                                        setQuery(event.target.value)
                                    }}
                                />

                            </div>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-3000"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                enterFrom='opacity-0'
                                enterTo='opacity-100'
                                afterLeave={() => setQuery('')}
                            >
                                <Combobox.Options hold={false} className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {filteredPeople.length === 0 && query !== '' ? (
                                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                            Nothing found.
                                        </div>
                                    ) : (
                                        filteredPeople.map((person) => (
                                            <Combobox.Option
                                                key={person.id}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                                                    }`
                                                }
                                                value={person}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span
                                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                                }`}
                                                        >
                                                            {person.name}
                                                        </span>
                                                        {selected ? (
                                                            <span
                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                                    }`}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Combobox.Option>
                                        ))
                                    )}
                                </Combobox.Options>
                            </Transition>
                        </div>
                    </Combobox>



                </Dialog>
            </Transition.Root>
        </div>
    )

}

export default SearchBar;