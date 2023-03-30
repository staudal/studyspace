import React from 'react'

function createMarkup(item) {
  return { __html: item.topic.intro.html }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DesktopSidebar({ subNavigation, pageTitle, onClickHandler }) {
  return (
    <nav aria-label='Sections' className='hidden w-96 flex-shrink-0 border-r border-l border-slate-200 bg-white xl:flex xl:flex-col'>
      <div className='flex h-16 flex-shrink-0 items-center border-b border-slate-200 px-6'>
        <p className='text-lg font-medium text-slate-900'>{pageTitle}</p>
      </div>
      <div className='min-h-0 flex-1 overflow-y-auto'>
        {subNavigation.map((item) => (
          <div
            key={item.topic.id}
            className={classNames(item.topic.current ? 'bg-blue-50 bg-opacity-50' : 'hover:bg-blue-50 hover:bg-opacity-50', 'border-slate-200 flex border-b p-6 cursor-pointer group')}
            aria-current={item.topic.current ? 'page' : undefined}
            onClick={() => onClickHandler(item)}
          >
            <div className='ml-3 text-sm'>
              <p className='font-medium text-slate-900 line-clamp-1'>
                {item.topic.number}. {item.topic.title}
              </p>
              <dd className='mt-1 text-slate-500 line-clamp-2' dangerouslySetInnerHTML={createMarkup(item)}></dd>
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}
