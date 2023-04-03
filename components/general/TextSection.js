import React from 'react'

export default function TextSection({ id, title, content }) {
  function createMarkup() {
    return { __html: content }
  }
  return (
    <div id={id} className='py-10'>
      <h2>{title}</h2>
      <dd className='px-4 py-5 sm:px-6 text-sm text-gray-500 leading-6 flex flex-col space-y-4' dangerouslySetInnerHTML={createMarkup()}></dd>
    </div>
  )
}
