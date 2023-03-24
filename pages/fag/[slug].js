import Navbar from '@/components/Navbar'
import SubjectDetails from '@/components/SubjectDetails'
import { GraphQLClient, gql } from 'graphql-request'
import { Fragment } from 'react'

const graphcms = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT)

const QUERY = gql`
  query Page($slug: String!) {
    page(where: { slug: $slug }) {
      id
      title
      slug
      level
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
      <SubjectDetails imageURL={page.subject.image.url} title={page.title} />
    </Fragment>
  )
}
