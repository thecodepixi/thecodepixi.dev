/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `TheCodePixi`,
    description: `TheCodePixi Blog and Developer Portfolio`,
    author: `Emily Harber`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/thecodepixi`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/thecodepixi`,
      },
      {
        name: `LinkedIn`,
        url: `https://linkedin.com/in/emily-harber`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["playfair display:300,400,700", "nanum gothic:300,400,700"],
        display: "swap",
      },
    },
  ],
}
