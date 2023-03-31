import React from 'react'

export default function CardHeaderWithoutIntro({ title }) {
  return (
    <div className='border-b border-gray-200 px-4 py-5 sm:px-6'>
      <h3 className='text-base font-semibold leading-6 text-gray-900'>{title}</h3>
    </div>
  )
}
