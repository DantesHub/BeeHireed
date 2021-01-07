import Head from 'next/head'
import  Link from 'next/link'
import Layout from '../components/layout'
import PostList from '../components/postlist'

let client = require('contentful').createClient({
  space:  process.env.CONTENTFUL_SPACE_ID,
  accessToken:  process.env.CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'post'
  })

  return {
    props: {
      posts: data.items
    },
    revalidate: 30
  }
}

export default function Home({ posts }) {
  return (
    <>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;700&display=swap" rel="stylesheet"/>          <title>Beehired</title>
        </Head>
        <Layout>
          <PostList posts={posts} />
        </Layout>
    </>
  )
}
