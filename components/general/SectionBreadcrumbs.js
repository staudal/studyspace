import { HomeIcon } from '@heroicons/react/20/solid'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]

export default function SectionBreadcrumbs({ breadcrumbs }) {
  return (
    <nav className='border-b border-gray-200 bg-white' aria-label='Breadcrumb'>
      <ol role='list' className='hidden lg:flex b mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8'>
        <li className='flex'>
          <div className='flex items-center'>
            <Link href='/' className='text-gray-400 hover:text-gray-500'>
              <HomeIcon className='h-5 w-5 flex-shrink-0' aria-hidden='true' />
              <span className='sr-only'>Home</span>
            </Link>
          </div>
        </li>
        {breadcrumbs.map((page) => (
          <li key={page.name} className='flex'>
            <div className='flex items-center'>
              <svg className='h-full w-6 flex-shrink-0 text-gray-200' viewBox='0 0 24 44' preserveAspectRatio='none' fill='currentColor' aria-hidden='true'>
                <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
              </svg>
              <Link href={page.href} className='ml-4 text-sm font-medium text-gray-500 hover:text-gray-700' aria-current={page.current ? 'page' : undefined}>
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>

      <div className='lg:hidden b mx-auto flex w-full max-w-screen-xl space-x-4 px-4 sm:px-6 lg:px-8 h-11'>
        <li className='flex'>
          <div className='flex items-center'>
            <Link href='/'>
              <button type='button' className='rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                Tilbage
              </button>
            </Link>
          </div>
        </li>
      </div>
    </nav>
  )
}
