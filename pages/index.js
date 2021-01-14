import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

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
  return (
    <div>
      <Head>
        <title>Next.js + Contentful</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <ul>
          {posts.map((post) => (
            <li key={post.sys.id}>
              <Link href={"/blog/" + post.fields.slug}>
                <a>{post.fields.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
