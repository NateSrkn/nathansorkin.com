const clientConfig = require('./client-config')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Nathan Sorkin`,
    description: `Nathan Sorkin's portfolio website. Designed and developed by Nathan Sorkin.`,
    author: `Nathan Sorkin`,
    email: `hello@nathansorkin.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nathan-sorkin-portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116226810-1"
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        ...clientConfig.sanity,
        token: `${process.env.REACT_APP_TOKEN}`,
        overlayDrafts: true,
        watchMode: true
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
