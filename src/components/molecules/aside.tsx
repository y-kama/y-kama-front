import Jump from 'components/atoms/jump'

type AsideProps = {
  slug: string,
  addClass: string,
  addLink: string,
}

const Aside = (props: AsideProps): JSX.Element => {
  const { slug, addClass, addLink } = props

  return (
    <>
      {slug && (
        <aside className={addClass}>
          <Jump slug={slug} link={addLink} />
        </aside>
      )}
    </>
  )
}

export default Aside