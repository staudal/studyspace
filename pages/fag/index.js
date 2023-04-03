import { Fragment } from 'react'
import { GraphQLClient, gql } from 'graphql-request'
import SectionHeader from '@/components/general/SectionHeader'
import SubjectCards from '@/components/subject/SubjectCards'
import MainSection from '@/components/MainSection'
import SectionBreadcrumbs from '@/components/general/SectionBreadcrumbs'

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
  const breadcrumbs = [{ name: 'Fag', href: '/fag', current: true }]

  return (
    <Fragment>
      <SectionBreadcrumbs breadcrumbs={breadcrumbs} />
      <MainSection>
        <SubjectCards subjects={subjects} />
      </MainSection>
    </Fragment>
  )
}
