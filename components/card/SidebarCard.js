import React from 'react'
import CardHeader from './CardHeader'
import Link from 'next/link'
import classNames from 'classnames'

export default function SidebarCard({ subtopics }) {
  return (
    <section aria-labelledby='timeline-title' className='lg:col-span-1 lg:col-start-3 sm:h-screen sm:sticky sm:top-6'>
      <nav className='space-y-1' aria-label='Sidebar'>
        {subtopics.map((item) => (
          <Link
            key={item.id}
            href='#'
            className={classNames(item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'flex items-center rounded-md px-3 py-2 text-sm font-medium')}
            aria-current={item.current ? 'page' : undefined}
          >
            <span className='truncate'>{item.title}</span>
          </Link>
        ))}
      </nav>
    </section>
  )
}
