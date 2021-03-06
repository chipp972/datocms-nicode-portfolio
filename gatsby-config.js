/* eslint-disable fp/no-mutation, no-undef */
require('dotenv').config();

const name = 'Nicode';
const description = 'Développeur web freelance spécialisé en expérience client';

module.exports = {
  siteMetadata: {
    title: `${name} - Développeur web freelance`,
    description,
    siteUrl: 'https://nicode.fr'
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
        icon: 'static/img/favicon-512x512.png',
        icon_options: {
          purpose: 'any maskable'
        }
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100
      }
    },
    {
      resolve: 'gatsby-plugin-portal',
      options: { id: 'dialog' }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'fr'
      }
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
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
        apiToken: process.env.DATO_API_TOKEN
      }
    },
    'gatsby-plugin-netlify'
  ]
};
