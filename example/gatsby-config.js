module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-remark-jsx',
      options: {
        components: ['Note']
      }
    }
  ],
};
