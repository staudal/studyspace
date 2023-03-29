import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { CheckCircleIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const menuItems = [
  {
    name: 'Your Profile',
    href: '#',
    current: false,
  },
  {
    name: 'Settings',
    href: '#',
    current: false,
  },
  {
    name: 'Sign out',
    href: '#',
    current: false,
    onclick: () => {
      signOut()
    },
  },
]

function ProfileButton() {
  return (
    <div className='hidden lg:ml-4 lg:block'>
      <div className='flex items-center'>
        {/* Profile dropdown */}
        <Menu as='div' className='relative ml-4 flex-shrink-0'>
          <div>
            <Menu.Button className='inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
              <UserCircleIcon className='-mr-0.5 h-5 w-5' aria-hidden='true' />
              Min konto
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
              {menuItems.map((item) => (
                <Menu.Item key={item.name}>
                  <Link
                    onClick={item.onclick !== undefined ? item.onclick : null}
                    href={item.href}
                    className={classNames(item.current ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100')}
                  >
                    {item.name}
                  </Link>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}

export default ProfileButton
