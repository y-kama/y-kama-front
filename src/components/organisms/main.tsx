import { ReactNode } from 'react'
import styles from 'styles/components/organisms/main.module.scss'

type MainProps = {
  children?: ReactNode,
}

const Main = (props: MainProps): JSX.Element => {
  const { children } = props

  return (
    <main className={styles.main}>{children}</main>
  )
}

export default Main