import { Dispatch, SetStateAction } from 'react'
import styles from 'styles/components/atoms/button.module.scss'
import { Noto_Serif_JP } from '@next/font/google'

const fontFamily: any = Noto_Serif_JP({
  weight: '300',
  subsets: ['latin'],
})

type ButtonProps = {
  navIsOpen: boolean,
  setNavIsOpen: Dispatch<SetStateAction<boolean>>,
  content: string,
}

const Button = (props: ButtonProps): JSX.Element => {
  const { navIsOpen, setNavIsOpen, content } = props

  return (
    <button onClick={() => setNavIsOpen((prev) => !prev)} className={`${styles.button} ${navIsOpen ? styles.button_on : styles.button_off} ${fontFamily.className}`}>{content}</button>
  )
}

export default Button