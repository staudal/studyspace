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
    <Fragment>
      <SectionHeader title={topic.title} />
    </Fragment>
  )
}
