function SubjectDescription({ page }) {
  function createMarkup() {
    return { __html: page.description.html }
  }

  return (
    <section aria-labelledby='applicant-information-title'>
      <div className='bg-white shadow rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <h2 id='applicant-information-title' className='text-lg font-medium leading-6 text-gray-900'>
            Oversigt
          </h2>
        </div>
        <div className='border-t border-gray-200 px-4 py-5 sm:px-6'>
          <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
            <div className='sm:col-span-2'>
              <dd className='text-sm text-gray-900 flex flex-col space-y-4' dangerouslySetInnerHTML={createMarkup()}></dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default SubjectDescription
