export default function SectionHeader({ title }) {
  return (
    <div className='bg-gray-900'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center sm:py-10 py-8'>
        <h2 className='text-2xl font-bold text-white sm:text-3xl'>{title}</h2>
      </div>
    </div>
  )
}
