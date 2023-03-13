import styles from 'styles/components/atoms/caption.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type CaptionProps = {
  content: string,
}

const Caption = (props: CaptionProps): JSX.Element => {
  const { content } = props

  return (
    <caption className={`${styles.caption} ${fontFamily.className}`}>{content}</caption>
  )
}

export default Caption