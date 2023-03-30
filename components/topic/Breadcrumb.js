import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

export default function Breadcrumb({ pageTitle }) {
  return (
    <nav aria-label='Breadcrumb' className='border-b border-slate-200 bg-white xl:hidden'>
      <div className='mx-auto flex max-w-3xl items-start px-4 py-3 sm:px-6 lg:px-8'>
        <a href='#' className='-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-slate-900'>
          <ChevronLeftIcon className='h-5 w-5 text-slate-400' aria-hidden='true' />
          <span>{pageTitle}</span>
        </a>
      </div>
    </nav>
  )
}
