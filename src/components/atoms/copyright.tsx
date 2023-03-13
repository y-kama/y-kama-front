import styles from 'styles/components/atoms/copyright.module.scss'
import { Noto_Serif_JP } from '@next/font/google'
import { copyrightData } from 'utils/site/copyright-data'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

const Copyright = (): JSX.Element => {
  return (
    <p className={`${styles.copyright} ${fontFamily.className}`}>
      <small>{copyrightData.content}</small>
    </p>
  )
}

export default Copyright