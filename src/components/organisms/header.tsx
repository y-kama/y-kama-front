import { useState } from 'react'
import Logo from 'components/atoms/logo'
import Button from 'components/atoms/button'
import Nav from 'components/molecules/nav'
import styles from 'styles/components/organisms/header.module.scss'
import { buttonData } from 'utils/site/button-data'

const Header = (): JSX.Element => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Logo />
        <Button navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} content={buttonData.content} />
        <Nav navIsOpen={navIsOpen} setNavIsOpen={setNavIsOpen} />
      </div>
    </header>
  )
}

export default Header