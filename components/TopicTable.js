const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

export default function TopicTable() {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <ul role='list' className='divide-y divide-gray-200'>
        <li className='py-4'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
              <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead className='bg-gray-50'>
                    <tr>
                      <th scope='col' colSpan={3} className='py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6'>
                        Levende organismers stofskifte og enzymers opbygning og funktion
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
                    <tr>
                      <td width={10} className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        1
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>Cellebiologi</td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                          Start
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width={10} className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        2
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>I dybden med biokemi</td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                          Start
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td width={10} className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        3
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>Kulhydraters opbygning og funktion</td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                          Start
                        </a>
                      </td>
                    </tr>
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
