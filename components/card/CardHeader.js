import React from 'react'

export default function CardHeader({ title, intro }) {
  return (
    <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
      <h3 className='text-base font-semibold leading-6 text-gray-900'>{title}</h3>
      <p className='mt-1 text-sm text-gray-500'>{intro}</p>
    </div>
  )
}
