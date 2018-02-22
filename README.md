# Gatsby remark-jsx plugin
## Install
```sh
npm install gatsby-remark-jsx
```

## Configuration
```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-remark-jsx',
      options: {
        components: ['Note']
      }
    }
  ]
}
```

## How to query with graphql ?

```js
// src/templates/markdown-page.js 
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
```
