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
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-theme-blog",
      options: {
        basePath: "/blog",
        contentPath: "./content/blog",
        excerptLength: 150,
      },
    },
    "gatsby-plugin-theme-ui",
  ],
}
