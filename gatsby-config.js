require('dotenv').config()

const name = 'Nicode';
const description = 'Développeur web freelance spécialisé en expérience client';

module.exports = {
  siteMetadata: {
    title: `${name} - Développeur web freelance`,
    description
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `${name} portfolio`,
        short_name: name,
        description,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#92CAB5',
        display: 'standalone',
        icon: 'static/img/favicon-512x512.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    'gatsby-plugin-anchor-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    'gatsby-plugin-netlify'
  ],
}
