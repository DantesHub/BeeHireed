import React from "react"
import Head from "next/head"
import Link from "next/link"
import {Container, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
export default function Layout({ children }) {
  return (
   <div>
      <Head>
        <title>My Next.js Static Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>
          <Link href="/">
            <a>Next.JS + Contentful + Vercel = ❤️</a>
          </Link>
        </h1>
      </header>
      <Container>
      <main>{children}</main>
      </Container>
      <Button>Shibal</Button>
      </div>
      )
}