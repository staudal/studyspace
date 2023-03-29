import { BookmarkIcon, BookOpenIcon, CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

function SubjectDetails({ page }) {
  const topicsCount = page.topics.length
  let subTopicsCount = 0
  page.topics.forEach((topic) => {
    subTopicsCount += topic.subtopics.length
  })

  return (
    <section aria-labelledby='timeline-title' className='lg:col-span-1 lg:col-start-3 sm:h-screen sm:sticky sm:top-6'>
      <div className='bg-white shadow rounded-lg'>
        <div className='px-4 py-5 sm:px-6 border-b border-gray-200'>
          <h3 className='text-base font-semibold leading-6 text-gray-900'>Applicant Information</h3>
          <p className='mt-1 max-w-2xl text-sm text-gray-500'>Personal details and application.</p>
        </div>
        <div className='px-4 py-5 sm:px-6'>
          <ul role='list' className='grid grid-cols-1 gap-5 sm:gap-6 '>
            <li className='col-span-1 flex shadow-sm rounded-md'>
              <div className='flex-shrink-0 flex items-center justify-center w-16 bg-yellow-300 text-white text-sm font-medium rounded-l-md'>
                <BookOpenIcon className='h-6 w-6' aria-hidden='true' />
              </div>
              <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
                <div className='flex-1 px-4 py-2 text-sm truncate'>
                  <a href='#' className='text-gray-900 font-medium hover:text-gray-600'>
                    Antal emner
                  </a>
                  <p className='text-gray-500'>{topicsCount} emner</p>
                </div>
              </div>
            </li>
            <li className='col-span-1 flex shadow-sm rounded-md'>
              <div className='flex-shrink-0 flex items-center justify-center w-16 bg-blue-300 text-white text-sm font-medium rounded-l-md'>
                <BookmarkIcon className='h-6 w-6' aria-hidden='true' />
              </div>
              <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
                <div className='flex-1 px-4 py-2 text-sm truncate'>
                  <a href='#' className='text-gray-900 font-medium hover:text-gray-600'>
                    Antal underemner
                  </a>
                  <p className='text-gray-500'>{subTopicsCount} underemner</p>
                </div>
              </div>
            </li>
          </ul>

          <div className='justify-stretch mt-6 flex flex-col'>
            <Link href='#'>
              <button
                type='button'
                className='w-full inline-flex items-center justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                Begynd
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubjectDetails
