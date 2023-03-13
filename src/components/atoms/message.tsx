import styles from 'styles/components/atoms/message.module.scss'
import { Noto_Serif_JP } from '@next/font/google'
import { messageData } from 'utils/site/message-data'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

const Message = (): JSX.Element => {
  return (
    <p className={`${styles.message} ${fontFamily.className}`}>{messageData.content}</p>
  )
}

export default Message