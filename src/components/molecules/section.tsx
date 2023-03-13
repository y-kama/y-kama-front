import Heading from 'components/atoms/heading'
import Paragraph from 'components/atoms/paragraph'
import Jump from 'components/atoms/jump'

type SectionProps = {
  level: number,
  title: string,
  content: string,
  slug: string,
  link: string,
}

const Section = (props: SectionProps): JSX.Element => {
  const { level, title, content, slug, link } = props

  return (
    <>
      <section>
        <Heading level={level} title={title} />
        <Paragraph content={content} />
        <Jump slug={slug} link={link} />
      </section>
    </>
  )
}

export default Section