import { useState } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { GraphQLClient, gql } from 'graphql-request'
import MainSection from '@/components/topic/MainSection'

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)
const QUERY = gql`
  query MyQuery($slug: String!) {
    topics(where: { page: { slug: $slug } }) {
      id
      title
      intro {
        html
      }
      page {
        title
        slug
      }
      number
      slug
    }
  }
`
export async function getStaticProps({ params }) {
  const { topics } = await graphcms.request(QUERY, {
    slug: params.subject,
  })

  return {
    props: {
      topics,
    },
    revalidate: 10,
  }
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page({ topics }) {
  const [activeTopic, setActiveTopic] = useState({})

  const subNavigation = []

  let pageTitle = 'Indhold'

  // setting the page title
  topics.map((topic) => {
    pageTitle = topic.page.title
  })

  // add topics to subNavigation
  topics.map((topic) => {
    subNavigation.push({ topic, current: false })
  })

  function onClickHandler(item) {
    setActiveTopic(item.topic)
    // change the current topic to true
    subNavigation.map((topic) => {
      topic.topic.current = false
      if (topic.topic.id === item.topic.id) {
        topic.topic.current = true
      }
    })
  }

  function createMarkup(item) {
    return { __html: item.topic.intro.html }
  }

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex h-full'>
        <main className='flex flex-1 overflow-hidden min-h-screen'>
          <div className='flex flex-1 flex-col overflow-y-auto xl:overflow-hidden'>
            {/* Breadcrumb */}
            <nav aria-label='Breadcrumb' className='border-b border-slate-200 bg-white xl:hidden'>
              <div className='mx-auto flex max-w-3xl items-start px-4 py-3 sm:px-6 lg:px-8'>
                <a href='#' className='-ml-1 inline-flex items-center space-x-3 text-sm font-medium text-slate-900'>
                  <ChevronLeftIcon className='h-5 w-5 text-slate-400' aria-hidden='true' />
                  <span>{pageTitle}</span>
                </a>
              </div>
            </nav>

            <div className='flex flex-1 xl:overflow-hidden'>
              {/* Secondary sidebar */}
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

              {/* Main content */}

              <MainSection topic={activeTopic} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
