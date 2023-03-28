import SubjectDetails from '@/components/SubjectDetails'
import { GraphQLClient, gql } from 'graphql-request'
import { Fragment, useEffect } from 'react'
import SubjectDescription from '@/components/SubjectDescription'
import SubjectTopics from '@/components/SubjectTopics'
import SectionHeader from '@/components/SectionHeader'

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)

const QUERY = gql`
  query Page($slug: String!) {
    page(where: { slug: $slug }) {
      id
      title
      slug
      level
      description {
        html
      }
      subject {
        id
        title
        shortDescription
        color {
          hex
        }
        image {
          url
        }
      }
      topics {
        id
        title
        intro {
          html
        }
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
    slug: params.slug,
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

export default function Slug({ page }) {
  return (
    <Fragment>
      <SectionHeader title={page.title} />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col space-y-6'>
        <div className='grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3'>
          <div className='space-y-6 lg:col-span-2 lg:col-start-1'>
            <SubjectDescription page={page} />
            <SubjectTopics topics={page.topics} />
          </div>
          <SubjectDetails page={page} />
        </div>
      </div>
    </Fragment>
  )
}
