import { GetStaticProps } from 'next'
import Head from 'next/head'
import Heading from 'components/atoms/heading'
import Paragraph from 'components/atoms/paragraph'
import Article from 'components/molecules/article'
import Aside from 'components/molecules/aside'
import { getAllPostData } from 'libs/create-client'
import styles from 'styles/pages/list.module.scss'
import { headData } from 'utils/list/head-data'
import { pageData } from 'utils/list/page-data'
import { articleData } from 'utils/list/article-data'
import { asideData } from 'utils/list/aside-data'

type ListProps = {
  allPostData: {
    id: string,
    publishedAt: string,
    slug: string,
    title: string,
    content: string,
    category: {
      name: string,
    },
  }[],
}

const List = (props: ListProps): JSX.Element => {
  const { allPostData } = props

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta property="og:title" content={headData.title} />
        <meta name="description" content={headData.description} />
        <meta property="og:description" content={headData.description} />
      </Head>
      <div className={styles.list}>
        <div className={styles.list__inner}>
          <Heading level={pageData.level} title={pageData.title} />
          <Paragraph content={pageData.content} />
          {allPostData.map(({ id, publishedAt, slug, title, category, content }) => (
            <Article key={id} level={articleData.level} publishedAt={publishedAt} slug={slug} title={title} link={articleData.link} categoryName={category.name} content={content} />
          ))}
        </div>
        {asideData.map(({ id, slug, addLink, addClass }) => (
          <Aside key={id} slug={slug} addLink={addLink} addClass={addClass} />
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostData: {
    id: string,
    publishedAt: string,
    slug: string,
    title: string,
    content: string,
    category: {
      name: string,
    },
  }[] = await getAllPostData()

  return {
    props: {
      allPostData: allPostData,
    },
  }
}

export default List