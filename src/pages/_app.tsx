import type { AppProps } from 'next/app'
import DefaultTemplate from 'components/templates/default-template'
import IndexTemplate from 'components/templates/index-template'
import 'destyle.css'
import 'styles/globals.scss'

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    pageProps.template === 'index' ?
    (
      <IndexTemplate>
        <Component {...pageProps} />
      </IndexTemplate>
    )
    :
    (
      <DefaultTemplate>
        <Component {...pageProps} />
      </DefaultTemplate>
    )
  )
}

export default MyApp