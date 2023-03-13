import HtmlReactParser from 'foundations/html-react-parser'
import styles from 'styles/components/atoms/heading.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type HeadingProps = {
  level: number,
  title: string,
}

const Heading = (props: HeadingProps): JSX.Element => {
  const { level, title } = props

  return (
    <HtmlReactParser html={`<h${level} className="${styles.heading} ${fontFamily.className}">${title}</h${level}>`} />
  )
}

export default Heading