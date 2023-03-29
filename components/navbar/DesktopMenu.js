import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DesktopMenu({ navigation }) {
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
              className={classNames(item.current ? 'bg-gray-100' : 'hover:bg-gray-100', 'px-3 py-2 rounded-md text-sm font-medium text-black')}
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
