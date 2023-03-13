import Message from 'components/atoms/message'
import styles from 'styles/components/organisms/jumbotron.module.scss'

const Jumbotron = (): JSX.Element => {
  return (
    <div className={styles.jumbotron}>
      <div className={styles.jumbotron__inner}>
        <Message />
      </div>
    </div>
  )
}

export default Jumbotron