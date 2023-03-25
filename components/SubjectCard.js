import Link from 'next/link'

function SubjectCard({ subject }) {
  // sort pages by level
  let pages = subject.pages

  function compare(a, b) {
    if (a.level < b.level) {
      return -1
    }
    if (a.level > b.level) {
      return 1
    }
    return 0
  }

  pages.sort(compare)

  return (
    <li className='col-span-1 divide-y divide-gray-200 rounded-lg shadow' style={{ background: subject.color.hex }}>
      <div className='flex w-full items-center justify-between space-x-6 p-6 rounded-t-lg'>
        <div className='flex-1 truncate'>
          <div className='flex items-center space-x-3'>
            <h3 className='truncate text-base font-medium text-gray-900'>{subject.title}</h3>
          </div>
          <p className='mt-1 truncate text-sm text-gray-500'>{subject.shortDescription}</p>
        </div>
        <img className='h-10 w-10 flex-shrink-0 rounded-lg bg-gray-300' src={subject.image.url} alt='' />
      </div>
      <div className='-mt-px flex divide-x divide-gray-200 bg-gray-50 rounded-b-lg'>
        {pages.map((page) => (
          <div key={page.id} className='w-0 flex-1 flex hover:bg-gray-100 first:hover:rounded-bl-lg last:hover:rounded-br-lg'>
            <Link
              href={'/fag/' + page.slug}
              className='relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900'
            >
              Niveau {page.level}
            </Link>
          </div>
        ))}
      </div>
    </li>
  )
}

export default SubjectCard
