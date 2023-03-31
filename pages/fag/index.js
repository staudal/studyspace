import { Fragment } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import SectionHeader from '@/components/general/SectionHeader'
import SubjectCards from '@/components/subject/SubjectCards'
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
  return (
    <Fragment>
      <SectionHeader title='Oversigt over fag' />
      <MainSection>
        <SubjectCards subjects={subjects} />
      </MainSection>
    </Fragment>
  )
}
