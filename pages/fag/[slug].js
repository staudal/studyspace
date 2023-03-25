import Navbar from '@/components/Navbar'
import SubjectDetails from '@/components/SubjectDetails'
import { GraphQLClient, gql } from 'graphql-request'
import { Fragment } from 'react'
import SubjectHeader from '@/components/SubjectHeader'
import SubjectDescription from '@/components/SubjectDescription'
import SubjectTopics from '@/components/SubjectTopics'

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
      <Navbar />
      <div className='min-h-full'>
        <main className='py-10'>
          <SubjectHeader page={page} />
          <div className='mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3'>
            <div className='space-y-6 lg:col-span-2 lg:col-start-1'>
              <SubjectDescription page={page} />
              <SubjectTopics topics={page.topics} />
            </div>
            <SubjectDetails page={page} />
          </div>
        </main>
      </div>
    </Fragment>
  )
}
