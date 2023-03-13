import styles from 'styles/components/atoms/logo.module.scss'
import { Noto_Serif_JP } from '@next/font/google'
import { logoData } from 'utils/site/logo-data'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

const Logo = (): JSX.Element => {
  return (
    <h1 className={`${styles.logo} ${fontFamily.className}`}>{logoData.title}</h1>
  )
}

export default Logo