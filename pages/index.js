import Navbar from '@/components/Navbar'
import { Fragment } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import SubjectCard from '@/components/SubjectCard'
import SectionHeader from '@/components/SectionHeader'
import MainSection from '@/components/MainSection'

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)

const QUERY = gql`
  {
    subjects(first: 100) {
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
    revalidate: 12,
  }
}

export default function Home({ subjects }) {
  // sort subjects by title
  function compare(a, b) {
    if (a.title < b.title) {
      return -1
    }
    if (a.title > b.title) {
      return 1
    }
    return 0
  }

  subjects.sort(compare)

  return (
    <Fragment>
      <SectionHeader title='Oversigt over fag' />
      <MainSection>
        <ul role='list' className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </ul>
      </MainSection>
    </Fragment>
  )
}
