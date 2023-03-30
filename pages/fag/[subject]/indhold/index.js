import { useState } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { GraphQLClient, gql } from 'graphql-request'
import MainSection from '@/components/topic/MainSection'
import DesktopSidebar from '@/components/topic/DesktopSidebar'
import Breadcrumb from '@/components/topic/Breadcrumb'

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

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex h-full'>
        <main className='flex flex-1 overflow-hidden min-h-screen'>
          <div className='flex flex-1 flex-col overflow-y-auto xl:overflow-hidden'>
            {/* Breadcrumb */}
            <Breadcrumb pageTitle={pageTitle} />

            <div className='flex flex-1 xl:overflow-hidden'>
              <DesktopSidebar subNavigation={subNavigation} pageTitle={pageTitle} onClickHandler={onClickHandler} />
              <MainSection topic={activeTopic} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
