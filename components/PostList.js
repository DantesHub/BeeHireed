import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
export default function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post) => (
        <article key={post.sys.id}>
          <header>
            <h1>
              <Link href={`/post/${post.fields.slug}`}>
                <a>{post.fields.title}</a>
              </Link>
            </h1>
            <small>
              <p>Published: {Date(post.fields.date).toString()}</p>
            </small>
          </header>
          <p>{post.fields.excerpt}</p>
          <p>
            <Link href={`/post/${post.fields.slug}`}>
              <a>Continue reading »</a>
            </Link>
          </p>
        </article>
      ))}
    </div>
  );
}
