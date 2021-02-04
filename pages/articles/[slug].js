import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import { Container } from "react-bootstrap";

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "post",
  });
  return {
    //define params.slug
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: {
      post: data.items[0],
    },
    revalidate: 30,
  };
}
export default function Article({ post }) {
  if (!post) return <div>404</div>;
  return (
    <Container className='margin-top-100'>
      <h1 className='theme-yellow text-weight-800 page-title-extra-large padding-bottom-5px text-center'>
        {post.fields.title}
      </h1>
      <br />
      <div>
        {documentToReactComponents(post.fields.content, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <Image
                src={"https:" + node.data.target.fields.file.url}
                width={node.data.target.fields.file.details.image.width}
                height={node.data.target.fields.file.details.image.height}
              />
            ),
          },
        })}
      </div>
    </Container>
  );
}
