import styles from 'styles/components/atoms/tbody.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type TbodyProps = {
  first: string,
  second: string,
}

const Tbody = (props: TbodyProps): JSX.Element => {
  const { first, second } = props

  return (
    <>
      <tr className={styles.tbody__tr}>
        <th className={`${styles.tbody__tr__th} ${fontFamily.className}`}>{first}</th>
        <td className={`${styles.tbody__tr__td} ${fontFamily.className}`}>{second}</td>
      </tr>
    </>
  )
}

export default Tbody