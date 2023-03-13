import Caption from 'components/atoms/caption'
import Thead from 'components/atoms/thead'
import Tbody from 'components/atoms/tbody'

type TableProps = {
  content : string,
  theadData: {
    id: string,
    first: string,
    second: string,
  }[],
  tbodyData: {
    id: string,
    first: string,
    second: string,
  }[]
}

const Table = (props: TableProps): JSX.Element => {
  const { content, theadData, tbodyData } = props

  return (
    <table>
      <Caption content={content} />
      <thead>
        {theadData.map(({ id, first, second }) => (
          <Thead key={id} first={first} second={second} />
        ))}
      </thead>
      <tbody>
        {tbodyData.map(({ id, first, second }) => (
          <Tbody key={id} first={first} second={second} />
        ))}
      </tbody>
    </table>
  )
}

export default Table