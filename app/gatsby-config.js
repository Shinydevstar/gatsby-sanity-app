
require('dotenv').config()

const { projectId, dataset } = {
  projectId: process.env.SANITY_PROJECT_ID || '57rreuq7',
  dataset: process.env.SANITY_DATASET || 'production',
}
/**
 * @type {import('gatsby').GatsbyConfig}
 */

 module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Sanity Homepage",
        short_name: "Gatsby",
        start_url: "/",
        icon: "src/assets/images/favicon.png",
      },
    },
  ],
}
