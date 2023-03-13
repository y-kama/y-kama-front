import { Dispatch, SetStateAction } from 'react'
import LItem from 'components/atoms/litem'
import styles from 'styles/components/molecules/nav.module.scss'
import { litemData } from 'utils/site/litem-data'

type NavProps = {
  navIsOpen: boolean,
  setNavIsOpen: Dispatch<SetStateAction<boolean>>,
}

const Nav = (props: NavProps): JSX.Element => {
  const { navIsOpen, setNavIsOpen } = props

  return (
    <nav className={navIsOpen ? styles.nav_open : styles.nav_close}>
      <ul>
        {litemData.map(({ id, slug, link }) => (
          <LItem setNavIsOpen={setNavIsOpen} key={id} slug={slug} link={link} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav