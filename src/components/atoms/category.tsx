import styles from 'styles/components/atoms/category.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type CategoryProps = {
  content: string,
}

const Category = (props: CategoryProps): JSX.Element => {
  const { content } = props

  return (
    <p className={`${styles.category} ${fontFamily.className}`}>{content}</p>
  )
}

export default Category