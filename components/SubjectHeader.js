import Link from 'next/link'

function SubjectHeader({ page }) {
  return (
    <div className='mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8'>
      <div className='flex items-center space-x-5'>
        <div className='flex-shrink-0'>
          <div className='relative'>
            <img className='h-16 w-16 rounded-full' src={page.subject.image.url} alt='' />
            <span className='absolute inset-0 rounded-full shadow-inner' aria-hidden='true' />
          </div>
        </div>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>{page.title}</h1>
          <p className='text-sm font-medium text-gray-500'>{page.subject.shortDescription}</p>
        </div>
      </div>
      <div className='justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3'>
        <Link href='/login'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          >
            Log ind
          </button>
        </Link>
        <Link href='/priser'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          >
            Køb medlemskab
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SubjectHeader
