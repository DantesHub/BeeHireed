import Link from "next/link";
import Layout from "../components/layout";
import PostList from "../components/postlist";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
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

export default function Home({ posts }) {
  useEffect(() => {
    console.log("calling");
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.6.8/js/uikit.min.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Layout>
        <PostList posts={posts} />
      </Layout>
    </>
  );
}
