import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Heading from 'components/atoms/heading'
import Date from 'components/atoms/date'
import Category from 'components/atoms/category'
import Paragraph from 'components/atoms/paragraph'
import Hashtag from 'components/atoms/hashtag'
import Aside from 'components/molecules/aside'
import { getAllSlugData, getPostData } from 'libs/create-client'
import { BackPost } from 'libs/back-post'
import { NextPost } from 'libs/next-post'
import styles from 'styles/pages/post.module.scss'
import { headData } from 'utils/post/head-data'
import { articleData } from 'utils/post/article-data'
import { asideData } from 'utils/post/aside-data'

type PostProps = {
  publishedAt: string,
  title: string,
  category: {
    name: string,
  },
  content: string,
  hashtag: [
    {
      id: string,
      name: string,
    },
  ],
  backPostData: [
    {
      id: string,
      slug: string,
      title: string,
      addLink: string,
      addClass: string,
    },
  ],
  nextPostData: [
    {
      id: string,
      slug: string,
      title: string,
      addLink: string,
      addClass: string,
    },
  ],
}

const Post: NextPage<PostProps> = (props: PostProps): JSX.Element => {
  const { publishedAt, title, category, content, hashtag, backPostData, nextPostData } = props
  const router = useRouter()

  if(router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{`${title} | ${headData.title}`}</title>
        <meta property="og:title" content={headData.title} />
        <meta name="description" content={headData.description} />
        <meta property="og:description" content={headData.description} />
      </Head>
      <article className={styles.post}>
        <div className={styles.post__inner}>
          <Heading level={articleData.level} title={title} />
          <Date publishedAt={publishedAt} />
          <Category content={category.name} />
          <Paragraph content={content} />
          {hashtag.map(({ id, name }) => (
            <Hashtag key={id} content={name} />
          ))}
        </div>
        {[...asideData, ...backPostData, ...nextPostData].map(({ id, slug, addLink, addClass }) => (
          <Aside key={id} slug={slug} addLink={addLink} addClass={addClass} />
        ))}
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async() => {
  const allSlugData: string[] = await getAllSlugData()

  return {
    paths: allSlugData.map(({ slug }: any) => `/blog/${slug}`),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const slug: string | string[] | undefined = context.params?.slug
  const post: {
    publishedAt: string,
    title: string,
    category: string,
    content: string,
    hashtag: string[],
  } = await getPostData(slug)

  const allSlugData: string[] = await getAllSlugData()
  const backPostData: string[] = BackPost(allSlugData, slug)
  const nextPostData: string[] = NextPost(allSlugData, slug)

  return {
    props: {
      publishedAt: post.publishedAt,
      title: post.title,
      category: post.category,
      content: post.content,
      hashtag: post.hashtag,
      backPostData: backPostData,
      nextPostData: nextPostData,
    },
  }
}

export default Post