import React from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import Card from '@/components/card/Card'
import SidebarCard from '@/components/card/SidebarCard'
import { Fragment } from 'react'
import MainSection from '@/components/MainSection'
import SectionBreadcrumbs from '@/components/general/SectionBreadcrumbs'
import { useRouter } from 'next/router'
import Sidebar from '@/components/general/Sidebar'
import TextSection from '@/components/general/TextSection'

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)

const QUERY = gql`
  query Topic($slug: String!) {
    topic(where: { slug: $slug }) {
      title
      slug
      intro
      subtopics {
        id
        title
        slug
        content {
          html
        }
      }
      page {
        title
        slug
      }
    }
  }
`

export async function getStaticProps({ params }) {
  const { topic } = await graphcms.request(QUERY, {
    slug: params.topic,
  })

  return {
    props: {
      topic,
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

export default function Page({ topic }) {
  const router = useRouter()
  const currentURL = router.asPath
  const breadcrumbs = [
    { name: 'Fag', href: '/fag', current: false },
    { name: topic.page.title, href: '/fag/' + topic.page.slug, current: true },
    { name: topic.title, current: true, href: currentURL },
  ]
  return (
    <Fragment>
      <SectionBreadcrumbs breadcrumbs={breadcrumbs} />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col space-y-6'>
          <div className='grid grid-cols-1 lg:grid-flow-col-dense lg:grid-cols-4'>
            <Sidebar />
            <div className='lg:col-span-3 lg:col-start-2 space-y-6 bg-white px-6'>
              {topic.subtopics.map((subtopic) => (
                <TextSection id={subtopic.slug} title={subtopic.title} content={subtopic.content.html} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
