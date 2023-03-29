import { Disclosure } from '@headlessui/react'
import DesktopMenu from './navbar/DesktopMenu'
import SearchField from './navbar/SearchField'
import HamburgerButton from './navbar/HamburgerButton'
import LoggedOutButton from './navbar/LoggedOutButton'
import LoggedInButton from './navbar/LoggedInButton'
import MobileMenu from './navbar/MobileMenu'
import { useSession } from 'next-auth/react'

export default function Example() {
  const { data: session } = useSession()

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <DesktopMenu />
              <SearchField />
              <HamburgerButton open={open} />
              {session ? <LoggedOutButton /> : <LoggedInButton />}
            </div>
          </div>
          <MobileMenu />
        </>
      )}
    </Disclosure>
  )
}
