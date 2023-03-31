import SubjectDetails from '@/components/SubjectDetails'
import { GraphQLClient, gql } from 'graphql-request'
import { Fragment, useEffect } from 'react'
import SubjectTopics from '@/components/SubjectTopics'
import Card from '@/components/card/Card'
import SectionHeader from '@/components/SectionHeader'

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)

const QUERY = gql`
  query Page($slug: String!) {
    page(where: { slug: $slug }) {
      title
      slug
      intro
      content {
        html
      }
      topics {
        id
        title
        slug
        intro
        number
        subtopics {
          id
          title
          number
        }
      }
    }
  }
`

export async function getStaticProps({ params }) {
  const { page } = await graphcms.request(QUERY, {
    slug: params.subject,
  })
  return {
    props: {
      page,
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

export default function Page({ page }) {
  return (
    <Fragment>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col space-y-6'>
        <div className='grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3'>
          <div className='lg:col-span-2 lg:col-start-1'>
            <Card title={page.title} intro={page.intro} content={page.content.html} />
            <SubjectTopics topics={page.topics} />
          </div>
          <SubjectDetails page={page} />
        </div>
      </div>
    </Fragment>
  )
}
