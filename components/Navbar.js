import { Disclosure } from '@headlessui/react'
import ProfileDropdown from './navbar/ProfileDropdown'
import DesktopMenu from './navbar/DesktopMenu'
import Logo from './navbar/Logo'
import HamburgerButton from './navbar/HamburgerButton'
import MobileMenu from './navbar/MobileMenu'
import { useSession } from 'next-auth/react'
import LoginButton from './navbar/LoginButton'
import { useRouter } from 'next/router'

const navigation = [
  { name: 'Oversigt', href: '/', current: true },
  { name: 'Priser', href: '/priser', current: false },
]

export default function Example() {
  const { data: session } = useSession()

  // change the current page to true
  navigation.forEach((item) => {
    if (item.href === useRouter().pathname) {
      item.current = true
    } else {
      item.current = false
    }
  })

  return (
    <Disclosure as='nav' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className='relative flex h-16 items-center justify-between'>
              <HamburgerButton open={open} />
              <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                <Logo />
                <DesktopMenu navigation={navigation} />
              </div>
              {session ? <ProfileDropdown /> : <LoginButton />}
            </div>
          </div>

          <MobileMenu navigation={navigation} />
        </>
      )}
    </Disclosure>
  )
}
