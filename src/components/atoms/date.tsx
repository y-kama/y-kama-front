import DateFns from 'foundations/date-fns'
import styles from 'styles/components/atoms/date.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type DateProps = {
  publishedAt: string,
}

const Date = (props: DateProps): JSX.Element => {
  const { publishedAt } = props

  return (
    <p className={`${styles.date} ${fontFamily.className}`}>
      <DateFns publishedAt={publishedAt} />
    </p>
  )
}

export default Date