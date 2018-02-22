import renderer from '@dumpster/hast-react-renderer'
const Template = ({ data: { hast }}) => {
  const ComponentsMap = {
    Note: ({ value }) => <span>{ value }</span>
  }
  const Document = renderer(hast, ComponentsMap)
  return <Document />
}
export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      hast
    }
  }
`
export default Template
