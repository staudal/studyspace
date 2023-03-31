import React from 'react'
import CardHeader from './CardHeader'

export default function SidebarCard() {
  return (
    <section aria-labelledby='timeline-title' className='lg:col-span-1 lg:col-start-3 sm:h-screen sm:sticky sm:top-6'>
      <div className='bg-white px-4 py-5 shadow rounded-lg sm:px-6'>
        <CardHeader title='Sidebar' intro='' />
      </div>
    </section>
  )
}
