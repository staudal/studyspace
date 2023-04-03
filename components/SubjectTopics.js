import { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SubjectTopics({ topics, currentPage }) {
  const router = useRouter()

  return (
    <div className='flow-root shadow rounded-lg'>
      <div className='overflow-x-auto rounded-lg'>
        <div className='inline-block min-w-full align-middle'>
          <table className='min-w-full'>
            <thead className='bg-white'>
              <tr className='divide-x'>
                <th scope='col' className='py-4 px-4 sm:px-6 text-center text-sm font-semibold text-gray-900'>
                  #
                </th>
                <th scope='col' colSpan={2} className='px-4 sm:px-6 py-4 text-left text-sm font-semibold text-gray-900'>
                  Underemne
                </th>
              </tr>
            </thead>
            <tbody className='bg-white'>
              {topics.map((topic) => (
                <Fragment key={topic.id}>
                  <tr className='border-t border-gray-200'>
                    <th colSpan={2} scope='colgroup' className='bg-gray-50 py-4 px-4 sm:px-6 text-left text-sm font-semibold text-gray-900'>
                      {topic.number}. {topic.title}
                    </th>
                    <th
                      colSpan={1}
                      scope='colgroup'
                      className='bg-indigo-600 py-4 px-4 sm:px-6 text-sm font-semibold text-white hover:bg-indigo-500 cursor-pointer'
                      onClick={() => router.push(currentPage + '/' + topic.slug)}
                    >
                      Start
                    </th>
                  </tr>
                  {topic.subtopics.map((subtopic) => (
                    <tr key={subtopic.id} className='border-gray-200 border-t divide-x'>
                      <td className='whitespace-nowrap py-4 px-4 sm:px-6 text-sm text-center font-medium text-gray-900'>{subtopic.number}</td>
                      <td className='whitespace-nowrap px-4 sm:px-6 py-4 text-sm text-gray-500'>{subtopic.title}</td>
                      <td
                        className='relative whitespace-nowrap px-4 sm:px-6 text-center text-sm font-medium cursor-pointer hover:bg-gray-100 text-gray-900'
                        onClick={() => router.push(currentPage + '/' + topic.slug + '#' + subtopic.slug)}
                      >
                        Gå til
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
