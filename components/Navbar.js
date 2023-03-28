import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import studyspaceLogo from '../public/studyspace-logo-pink.svg'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Fag', href: '/', current: true },
  { name: 'Priser', href: '/priser', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const router = useRouter()
  const { data: session, status } = useSession()

  return (
    <Disclosure as='nav' className='bg-gray-900'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                {/* Mobile menu button */}
                <div className='-ml-2 mr-2 flex items-center md:hidden'>
                  <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open ? <XMarkIcon className='block h-6 w-6' aria-hidden='true' /> : <Bars3Icon className='block h-6 w-6' aria-hidden='true' />}
                  </Disclosure.Button>
                </div>

                {/* Logo */}
                <div className='flex flex-shrink-0 items-center'>
                  <Image src={studyspaceLogo} width={30} />
                </div>

                {/* Desktop navigation */}
                <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(item.href === router.asPath ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right side */}
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  {session ? (
                    <button
                      className='relative inline-flex items-center gap-x-1.5 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                      onClick={signOut}
                    >
                      Sign out
                    </button>
                  ) : (
                    <>
                      <button
                        className='relative inline-flex items-center gap-x-1.5 rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                        onClick={signIn}
                      >
                        Sign in
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu open state */}
          <Disclosure.Panel className='md:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3 sm:px-3'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium')}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className='border-t border-gray-700 pt-4 pb-3'>
              <div className='flex items-center px-5 sm:px-6'>
                <div className='flex-shrink-0'>
                  <img className='h-10 w-10 rounded-full' src={user.imageUrl} alt='' />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-white'>{user.name}</div>
                  <div className='text-sm font-medium text-gray-400'>{user.email}</div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1 px-2 sm:px-3'>
                {userNavigation.map((item) => (
                  <Disclosure.Button key={item.name} as='a' href={item.href} className='block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white'>
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
