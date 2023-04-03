import SubjectDetails from '@/components/SubjectDetails'
import { GraphQLClient, gql } from 'graphql-request'
import { Fragment, useEffect } from 'react'
import SubjectTopics from '@/components/SubjectTopics'
import Card from '@/components/card/Card'
import SectionHeader from '@/components/general/SectionHeader'
import MainSection from '@/components/MainSection'
import SectionBreadcrumbs from '@/components/general/SectionBreadcrumbs'

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
          slug
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
  const breadcrumbs = [
    { name: 'Fag', href: '/fag', current: false },
    { name: page.title, href: '/fag/' + page.slug, current: true },
  ]
  return (
    <Fragment>
      <SectionBreadcrumbs breadcrumbs={breadcrumbs} />
      <MainSection>
        <div className='flex flex-col space-y-6'>
          <div className='grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3'>
            <div className='lg:col-span-2 lg:col-start-1 gap-6 flex flex-col'>
              <Card title='Intro til faget' content={page.content.html} />
              <SubjectTopics topics={page.topics} currentPage={page.slug} />
            </div>
            <SubjectDetails page={page} />
          </div>
        </div>
      </MainSection>
    </Fragment>
  )
}
