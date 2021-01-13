import React from "react";
import Layout from "../components/layout";
import PostList from "../components/postlist";
import { useEffect } from "react";

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "post",
  });

  return {
    props: {
      posts: data.items,
    },
    revalidate: 30,
  };
}
const blog = ({ posts }) => {
  return (
    <>
      <Layout>
        <h1 className='text-black text-center text-weight-800 page-title-extra-large'>
          The Beehired Blog. <hr className='small' />
        </h1>
        <PostList posts={posts} />
      </Layout>
    </>
  );
};

export default blog;
