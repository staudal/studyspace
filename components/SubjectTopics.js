import { Fragment } from 'react'

const locations = [
  {
    name: 'Edinburgh',
    people: [
      { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
      { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    ],
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SubjectTopics({ topics }) {
  return (
    <div className='mt-8 flow-root shadow rounded-lg'>
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
                    <th colSpan={3} scope='colgroup' className='bg-gray-50 py-4 px-4 sm:px-6 text-left text-sm font-semibold text-gray-900'>
                      {topic.number}. {topic.title}
                    </th>
                  </tr>
                  {topic.subtopics.map((subtopic) => (
                    <tr key={subtopic.id} className='border-gray-200 border-t divide-x'>
                      <td className='whitespace-nowrap py-4 px-4 sm:px-6 text-sm text-center font-medium text-gray-900'>{subtopic.number}</td>
                      <td className='whitespace-nowrap px-4 sm:px-6 py-4 text-sm text-gray-500'>{subtopic.title}</td>
                      <td className='relative whitespace-nowrap py-4 px-4 sm:px-6 text-center text-sm font-medium'>
                        <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                          Lær
                        </a>
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
