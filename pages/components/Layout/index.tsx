import { ReactNode } from "react";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title> Mahend`s Blog | {pageTitle} </title>
        <meta charSet="UTF-8" />
        <meta name="description" content="My Biografi website" />
        <meta name="author" content="Mahendar Dwi Payana" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
