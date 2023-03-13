import styles from 'styles/components/atoms/thead.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type TheadProps = {
  first: string,
  second: string,
}

const Thead = (props: TheadProps): JSX.Element => {
  const { first, second } = props

  return (
    <>
      <tr className={styles.thead__tr}>
        <th className={`${styles.thead__tr__th} ${fontFamily.className}`}>{first}</th>
        <th className={`${styles.thead__tr__th} ${fontFamily.className}`}>{second}</th>
      </tr>
    </>
  )
}

export default Thead