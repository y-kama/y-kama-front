import { Noto_Serif_JP } from '@next/font/google'
import styles from 'styles/components/atoms/hashtag.module.scss'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type HashtagProps = {
  content: string,
}

const Hashtag = (props: HashtagProps): JSX.Element => {
  const { content } = props

  return (
    <>
      <p className={`${styles.hashtag} ${fontFamily.className}`}>{content}</p>
    </>
  )
}

export default Hashtag