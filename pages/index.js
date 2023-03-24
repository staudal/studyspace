import Navbar from '@/components/Navbar'
import { Fragment } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import SubjectCard from '@/components/SubjectCard'
import Link from 'next/link'

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)

const QUERY = gql`
  {
    subjects {
      id
      title
      shortDescription
      color {
        hex
      }
      image {
        url
      }
      pages {
        id
        level
        slug
      }
    }
  }
`

export async function getStaticProps() {
  const { subjects } = await graphcms.request(QUERY)
  return {
    props: {
      subjects,
    },
  }
}

export default function Home({ subjects }) {
  return (
    <Fragment>
      <Navbar />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12'>
        <ul role='list' className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </ul>
      </div>
    </Fragment>
  )
}
