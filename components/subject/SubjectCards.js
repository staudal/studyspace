import SubjectCard from './SubjectCard'

export default function SubjectCards({ subjects }) {
  return (
    <ul role='list' className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {subjects.map((subject) => (
        <SubjectCard key={subject.id} subject={subject} />
      ))}
    </ul>
  )
}
