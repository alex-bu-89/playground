module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site!',
    author: 'John Doe',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
};
