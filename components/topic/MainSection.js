function MainSection({ topic }) {
  return (
    <div className='flex-1 xl:overflow-y-auto'>
      <div className='mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12'>
        <h1 className='text-3xl font-bold tracking-tight text-slate-900'>{topic.title}</h1>
      </div>
    </div>
  )
}

export default MainSection
