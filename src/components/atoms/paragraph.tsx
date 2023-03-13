import styles from 'styles/components/atoms/paragraph.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type ParagraphProps = {
  content: string,
  slice?: boolean,
}

const Paragraph = (props: ParagraphProps): JSX.Element => {
  const { content, slice } = props
  const startPos: number = 0
  const endPos: number = 30
  const addChar: string = '…'

  return (
    <p className={`${styles.paragraph} ${fontFamily.className}`}>{slice && content.length > endPos ? content.slice(startPos, endPos).concat(addChar) : content}</p>
  )
}

export default Paragraph