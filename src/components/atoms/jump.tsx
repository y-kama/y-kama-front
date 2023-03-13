import Link from 'next/link'
import styles from 'styles/components/atoms/jump.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type JumpProps = {
  slug: string,
  link: string,
}

const Jump = (props: JumpProps): JSX.Element => {
  const { slug, link } = props

  return (
    <p className={`${styles.jump} ${fontFamily.className}`}>
      <Link href={slug}>{link}</Link>
    </p>
  )
}

export default Jump