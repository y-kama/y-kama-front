import Heading from 'components/atoms/heading'
import Date from 'components/atoms/date'
import Category from 'components/atoms/category'
import Paragraph from 'components/atoms/paragraph'
import Jump from 'components/atoms/jump'

type ArticleProps = {
  level: number,
  title: string,
  publishedAt: string,
  categoryName: string,
  content: string,
  slug: string,
  link: string,
}

const Article = (props: ArticleProps): JSX.Element => {
  const { level, title, publishedAt, categoryName, content, slug, link } = props

  return (
    <>
      <article>
        <Heading level={level} title={title} />
        <Date publishedAt={publishedAt} />
        <Category content={categoryName} />
        <Paragraph content={content} slice={true} />
        <Jump slug={`/blog/${slug}`} link={link} />
      </article>
    </>
  )
}

export default Article