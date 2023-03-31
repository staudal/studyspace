import React from 'react'

export default function CardBody({ content }) {
  function createMarkup() {
    return { __html: content }
  }
  return <dd className='px-4 py-5 sm:px-6 text-sm text-gray-500 leading-6 flex flex-col space-y-4' dangerouslySetInnerHTML={createMarkup()}></dd>
}
