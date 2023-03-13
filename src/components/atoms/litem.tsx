import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import styles from 'styles/components/atoms/litem.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type LitemProps = {
  setNavIsOpen: Dispatch<SetStateAction<boolean>>,
  slug: string,
  link: string,
}

const Litem = (props: LitemProps): JSX.Element => {
  const { setNavIsOpen, slug, link } = props

  return (
    <>
      <li  onClick={() => setNavIsOpen(false)} className={`${styles.litem} ${fontFamily.className}`}>
        <Link href={slug}>{link}</Link>
      </li>
    </>
  )
}

export default Litem