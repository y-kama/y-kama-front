import Copyright from 'components/atoms/copyright'
import styles from 'styles/components/organisms/footer.module.scss'

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer