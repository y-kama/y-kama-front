import { parseISO, format } from 'date-fns'
import ja from 'date-fns/locale/ja'

type DateFnsProps = {
  publishedAt: string,
}

const DateFns = (props: DateFnsProps): JSX.Element => {
  const { publishedAt } = props

  return (
    <time dateTime={format(parseISO(publishedAt), 'yyyy/MM/dd', {locale: ja})}>{format(parseISO(publishedAt), 'yyyy/MM/dd', {locale: ja})}</time>
  )
}

export default DateFns