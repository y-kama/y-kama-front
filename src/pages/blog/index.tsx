import { GetStaticProps } from 'next'
import Head from 'next/head'
import Heading from 'components/atoms/heading'
import Paragraph from 'components/atoms/paragraph'
import Article from 'components/molecules/article'
import Aside from 'components/molecules/aside'
import { getAllPostData } from 'libs/create-client'
import styles from 'styles/pages/blog.module.scss'
import { headData } from 'utils/blog/head-data'
import { pageData } from 'utils/blog/page-data'
import { articleData } from 'utils/blog/article-data'
import { asideData } from 'utils/blog/aside-data'

type BlogProps = {
  allPostData:{
    id: string,
    publishedAt: string,
    slug: string,
    title: string,
    category: {
      name: string,
    },
    content: string,
  }[],
}

const Blog = (props: BlogProps): JSX.Element => {
  const { allPostData } = props

  return (
    <>
      <Head>
        <title>{headData.title}</title>
        <meta property="og:title" content={headData.title} />
        <meta name="description" content={headData.description} />
        <meta property="og:description" content={headData.description} />
      </Head>
      <div className={styles.blog}>
        <div className={styles.blog__inner}>
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
    category: {
      name: string,
    },
    content: string,
  }[] = await getAllPostData(3)

  return {
    props: {
      allPostData: allPostData
    },
  }
}

export default Blog