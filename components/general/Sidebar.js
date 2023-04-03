import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true, count: '5' },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false, count: '19' },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false, count: '20+' },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

export default function Sidebar() {
  return (
    <section aria-labelledby='timeline-title' className='lg:col-span-1 lg:col-start-1 sm:h-screen sm:sticky sm:top-6 py-10 border-r border-gray-200'>
      <nav className='space-y-1' aria-label='Sidebar'>
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'flex items-center rounded-md px-3 py-2 text-sm font-medium')}
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon className={classNames(item.current ? 'text-gray-500' : 'text-gray-400', '-ml-1 mr-3 h-6 w-6 flex-shrink-0')} aria-hidden='true' />
            <span className='truncate'>{item.name}</span>
          </a>
        ))}
      </nav>
    </section>
  )
}
