import SubjectDetails from '@/components/SubjectDetails'
import { GraphQLClient, gql } from 'graphql-request'
import { Fragment, useEffect } from 'react'
import SubjectDescription from '@/components/SubjectDescription'
import SubjectTopics from '@/components/SubjectTopics'
import SectionHeader from '@/components/SectionHeader'

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)

const QUERY = gql`
  query Topic($slug: String!) {
    topic(where: { slug: $slug }) {
      id
      title
      slug
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
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative mx-auto flex max-w-8xl justify-center'>
        <Sidebar />
        <div className='min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16'>Hello</div>
      </div>
    </div>
  )
}
