import TopicTable from './TopicTable'

function SubjectTopics({ topics }) {
  return (
    <section aria-labelledby='notes-title'>
      <div className='bg-white shadow sm:overflow-hidden sm:rounded-lg'>
        <div className='divide-y divide-gray-200'>
          <div className='px-4 py-5 sm:px-6'>
            <h2 id='notes-title' className='text-lg font-medium text-gray-900'>
              Pensum
            </h2>
          </div>
          <div className='py-5'>
            {topics.map((topic) => (
              <TopicTable key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubjectTopics
