import { GetStaticProps } from 'next'
import Head from 'next/head'
import Heading from 'components/atoms/heading'
import Paragraph from 'components/atoms/paragraph'
import Section from 'components/molecules/section'
import styles from 'styles/pages/index.module.scss'
import { headData } from 'utils/index/head-data'
import { pageData } from 'utils/index/page-data'
import { sectionData } from 'utils/index/section-data'

const Index = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta property="og:title" content={headData.title} />
        <meta name="description" content={headData.description} />
        <meta property="og:description" content={headData.description} />
      </Head>
      <div className={styles.index}>
        <div className={styles.index__inner}>
          <Heading level={pageData.level} title={pageData.title} />
          <Paragraph content={pageData.content} />
          {sectionData.map((sectionData) => (
            <Section key={sectionData.id} level={sectionData.level} title={sectionData.title} content={sectionData.content} slug={sectionData.slug} link={sectionData.link} />
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    template: 'index',
  },
})

export default Index