import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Desktopmenu({ navigation }) {
  return (
    <div className='hidden sm:ml-6 sm:block'>
      <div className='flex space-x-4'>
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium')}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Desktopmenu
