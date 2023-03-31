import React from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import Card from '@/components/card/Card'
import SidebarCard from '@/components/card/SidebarCard'
import { Fragment } from 'react'

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
        content {
          html
        }
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
  return (
    <Fragment>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col space-y-6'>
        <div className='grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3'>
          <div className='lg:col-span-2 lg:col-start-1 space-y-6'>
            {topic.subtopics.map((subtopic) => (
              <Card title={subtopic.title} content={subtopic.content.html} />
            ))}
          </div>
          <SidebarCard />
        </div>
      </div>
    </Fragment>
  )
}
