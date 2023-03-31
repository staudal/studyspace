import { Disclosure } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'

export default function NavbarHamburgerButton({ open }) {
  return (
    <div className='-mr-2 flex md:hidden'>
      {/* Mobile menu button */}
      <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-indigo-200 hover:bg-indigo-500 hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600'>
        <span className='sr-only'>Open main menu</span>
        {open ? <XMarkIcon className='block h-6 w-6' aria-hidden='true' /> : <Bars3Icon className='block h-6 w-6' aria-hidden='true' />}
      </Disclosure.Button>
    </div>
  )
}
