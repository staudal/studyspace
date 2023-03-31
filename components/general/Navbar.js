import { Disclosure } from '@headlessui/react'
import NavbarLogo from '../navbar/NavbarLogo'
import NavbarDesktopMenu from '../navbar/NavbarDesktopMenu'
import NavbarProfileDropdown from '../navbar/NavbarProfileDropdown'
import NavbarHamburgerButton from '../navbar/NavbarHamburgerButton'
import NavbarMobileMenu from '../navbar/NavbarMobileMenu'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Forside', href: '/', current: true },
  { name: 'Fag', href: '/fag', current: false },
  { name: 'Priser', href: '/priser', current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

export default function Navbar() {
  return (
    <>
      <div className='min-h-full'>
        <Disclosure as='nav' className='bg-indigo-600'>
          {({ open }) => (
            <>
              <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                  <div className='flex items-center'>
                    <NavbarLogo />
                    <NavbarDesktopMenu navigation={navigation} />
                  </div>
                  <NavbarProfileDropdown user={user} userNavigation={userNavigation} />
                  <NavbarHamburgerButton open={open} />
                </div>
              </div>

              <NavbarMobileMenu user={user} userNavigation={userNavigation} navigation={navigation} />
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
