import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const navigation = [
  { name: 'Oversigt', href: '/', current: false },
  { name: 'Priser', href: '/priser', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function DesktopMenu() {
  const router = useRouter()

  navigation.forEach((item) => {
    if (router.pathname === item.href) {
      item.current = true
    } else {
      item.current = false
    }
  })

  return (
    <div className='flex items-center px-2 lg:px-0'>
      <div className='flex-shrink-0'>
        <img className='block h-8 w-auto lg:hidden' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' alt='Your Company' />
        <img className='hidden h-8 w-auto lg:block' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500' alt='Your Company' />
      </div>
      <div className='hidden lg:ml-6 lg:block'>
        <div className='flex space-x-4'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium')}
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
