import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Moment from "react-moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserEdit,
  faCoffee,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function PostList({ posts = [] }) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <article key={post.sys.id}>
          <header>
            <h1 className='margin-none page-title-large'>
              <Link href={"/articles/" + post.fields.slug}>
                <a className='theme-yellow text-weight-800'>
                  {post.fields.title}
                </a>
              </Link>
            </h1>
            <small className='display-flex padding-top-5px'>
              <FontAwesomeIcon
                icon={faCoffee}
                width='35'
                height='35'
                className='margin-right-5px margin-top-10px'
              />
              <p className='text-weight-600 margin-none'>
                Published:{" "}
                {/* <Moment
                  format='MMM DD, YYYY'
                  date={Date(post.fields.date).toString()}
                />{" "} */}
                |{" "}
                <FontAwesomeIcon
                  icon={faClock}
                  width='23'
                  height='23'
                  className='padding-bottom-3px'
                />{" "}
                {post.fields.timeToComplete} minutes |{" "}
                <FontAwesomeIcon
                  icon={faUserEdit}
                  width='25'
                  height='25'
                  className='padding-bottom-5px'
                />{" "}
                Author: {post.fields.author.fields.name}
              </p>
            </small>
          </header>
          <p>{post.fields.excerpt}</p>
          <p className='margin-none'>
            <Link href={"/articles/" + post.fields.slug}>
              <a className='text-weight-600'>Continue reading »</a>
            </Link>
          </p>
        </article>
      ))}
    </div>
  );
}
