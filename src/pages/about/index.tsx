import Head from 'next/head'
import Heading from 'components/atoms/heading'
import Paragraph from 'components/atoms/paragraph'
import Table from 'components/molecules/table'
import Aside from 'components/molecules/aside'
import styles from 'styles/pages/about.module.scss'
import { headData } from 'utils/about/head-data'
import { pageData } from 'utils/about/page-data'
import { captionData } from 'utils/about/caption-data'
import { theadData } from 'utils/about/thead-data'
import { tbodyData } from 'utils/about/tbody-data'
import { asideData } from 'utils/about/aside-data'

const About = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta property="og:title" content={headData.title} />
        <meta name="description" content={headData.description} />
        <meta property="og:description" content={headData.description} />
      </Head>
      <div className={styles.about}>
        <div className={styles.about__inner}>
          <Heading level={pageData.level} title={pageData.title} />
          <Paragraph content={pageData.content} />
          <Table content={captionData.content} theadData={theadData} tbodyData={tbodyData} />
        </div>
        {asideData.map(({ id, slug, addLink, addClass }) => (
          <Aside key={id} slug={slug} addLink={addLink} addClass={addClass} />
        ))}
      </div>
    </>
  )
}

export default About