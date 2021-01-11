import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Button } from "react-bootstrap";
export default function Layout({ children }) {
  return (
    <div className='margin-top-100'>
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
}
