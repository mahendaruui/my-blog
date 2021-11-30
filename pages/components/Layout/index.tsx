import { ReactNode } from 'react'
import Head from "next/head"
import Header from "../Header"
import Footer from "../Footer"
interface LayoutProps {
  children: ReactNode
  pageTitle: string
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props
  return (
    <div>
      <Head>
        <title> Mahendar Dwi Payana | {pageTitle} </title>
        <meta charSet="UTF-8" />
        <meta name="description" content="My Biografi website" />
        <meta name="author" content="Mahendar Dwi Payana" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet" />
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}
