import Head from 'next/head'
import Heading from 'components/atoms/heading'
import Paragraph from 'components/atoms/paragraph'
import Table from 'components/molecules/table'
import Aside from 'components/molecules/aside'
import styles from 'styles/pages/skill.module.scss'
import { headData } from 'utils/skill/head-data'
import { pageData } from 'utils/skill/page-data'
import { captionData } from 'utils/skill/caption-data'
import { theadData } from 'utils/skill/thead-data'
import { tbodyData } from 'utils/skill/tbody-data'
import { asideData } from 'utils/skill/aside-data'

const Skill = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta property="og:title" content={headData.title} />
        <meta name="description" content={headData.description} />
        <meta property="og:description" content={headData.description} />
      </Head>
      <div className={styles.skill}>
        <div className={styles.skill__inner}>
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

export default Skill