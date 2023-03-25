export default function TopicTable({ topic }) {
  const subtopics = topic.subtopics

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <ul role='list' className='divide-y divide-gray-200'>
        <li className='py-4'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <div className='overflow-hidden rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th scope='col' colSpan={3} className='py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6'>
                        {topic.number}. {topic.title}
                      </th>
                    </tr>
                  </thead>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th scope='col' className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'>
                        #
                      </th>
                      <th scope='col' className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>
                        Underemne
                      </th>
                      <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-6'>
                        <span className='sr-only'>Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {subtopics.map((subtopic) => (
                      <tr>
                        <td width={10} className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {subtopic.number}
                        </td>
                        <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{subtopic.title}</td>
                        <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                          <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                            Start
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}
