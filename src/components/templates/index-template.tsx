import { ReactNode } from 'react'
import Head from 'next/head'
import Header from 'components/organisms/header'
import Jumbotron from 'components/organisms/jumbotron'
import Main from 'components/organisms/main'
import Footer from 'components/organisms/footer'

type TemplateProps = {
  children?: ReactNode,
}

const Template = (props: TemplateProps): JSX.Element => {
  const { children } = props

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Jumbotron />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Template