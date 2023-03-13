import parse, { Element } from 'html-react-parser';

type HtmlReactParserProps = {
  html: string,
}

const HtmlReactParser = (props: HtmlReactParserProps): JSX.Element => {
  const { html } = props
  const react: string | JSX.Element | JSX.Element[] = parse(
    html,
    {
      replace: domNode => {
        if(domNode instanceof Element && domNode.attribs.class === 'remove') {
          return (
            <></>
          )
        }
      }
    },
  )

  return (
    <>
      {react}
    </>
  )
}

export default HtmlReactParser