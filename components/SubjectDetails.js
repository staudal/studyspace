import { ArrowLongLeftIcon, CheckIcon, HandThumbUpIcon, HomeIcon, MagnifyingGlassIcon, PaperClipIcon, QuestionMarkCircleIcon, UserIcon } from '@heroicons/react/20/solid'
import Navbar from '@/components/general/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]
const breadcrumbs = [
  { name: 'Jobs', href: '#', current: false },
  { name: 'Front End Developer', href: '#', current: false },
  { name: 'Applicants', href: '#', current: true },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const attachments = [
  { name: 'resume_front_end_developer.pdf', href: '#' },
  { name: 'coverletter_front_end_developer.pdf', href: '#' },
]
const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
  advanced: { icon: HandThumbUpIcon, bgColorClass: 'bg-blue-500' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
}
const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: 'Applied to',
    target: 'Front End Developer',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    date: 'Sep 22',
    datetime: '2020-09-22',
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    date: 'Sep 28',
    datetime: '2020-09-28',
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    date: 'Sep 30',
    datetime: '2020-09-30',
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
]
const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
]

const stats = [
  { name: 'Total Subscribers', stat: '71,897' },
  { name: 'Avg. Open Rate', stat: '58.16%' },
  { name: 'Avg. Click Rate', stat: '24.57%' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function SubjectDetails({ page }) {
  const router = useRouter()

  const currentURL = router.asPath

  return (
    <section aria-labelledby='timeline-title' className='lg:col-span-1 lg:col-start-3 sm:h-screen sm:sticky sm:top-6'>
      <div className='bg-white px-4 py-5 shadow rounded-lg sm:px-6'>
        <h2 id='timeline-title' className='text-lg font-medium text-gray-900'>
          Detaljer
        </h2>

        <div className='mt-6 flow-root'>
          <ul role='list' className='-mb-8'>
            {timeline.map((item, itemIdx) => (
              <li key={item.id}>
                <div className='relative pb-8'>
                  {itemIdx !== timeline.length - 1 ? <span className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200' aria-hidden='true' /> : null}
                  <div className='relative flex space-x-3'>
                    <div>
                      <span className={classNames(item.type.bgColorClass, 'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white')}>
                        <item.type.icon className='h-5 w-5 text-white' aria-hidden='true' />
                      </span>
                    </div>
                    <div className='flex min-w-0 flex-1 justify-between space-x-4 pt-1.5'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          {item.content}{' '}
                          <a href='#' className='font-medium text-gray-900'>
                            {item.target}
                          </a>
                        </p>
                      </div>
                      <div className='whitespace-nowrap text-right text-sm text-gray-500'>
                        <time dateTime={item.datetime}>{item.date}</time>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className='justify-stretch mt-6 flex flex-col'>
          <Link href='#'>
            <button
              type='button'
              className='w-full inline-flex items-center justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Begynd
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SubjectDetails
