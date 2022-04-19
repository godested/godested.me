import { GatsbyConfig } from 'gatsby';
import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const IS_DEV = process.env['NODE_ENV'] === 'development';

const gatsbyConfig: GatsbyConfig = {
  plugins: [
    'gatsby-plugin-provide-react',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'godested.me',
        short_name: 'godested.me',
        start_url: '/',
        icon: 'src/assets/images/favicon.svg',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          modules: {
            exportLocalsConvention: 'camelCaseOnly',
            localIdentName: IS_DEV
              ? '[local]__[path][name]'
              : '[sha1:hash:hex:5]',
          },
        },
        sassRuleTest: /\.scss$/,
        sassRuleModulesTest: /\.module\.scss$/,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve('./src/assets/images'),
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env['CLOUDINARY_CLOUD_NAME'],
        apiKey: process.env['CLOUDINARY_API_KEY'],
        apiSecret: process.env['CLOUDINARY_API_SECRET'],
        uploadFolder: 'gatsby-cloudinary',
      },
    },
    {
      resolve: 'gatsby-source-cloudinary',
      options: {
        cloudName: process.env['CLOUDINARY_CLOUD_NAME'],
        apiKey: process.env['CLOUDINARY_API_KEY'],
        apiSecret: process.env['CLOUDINARY_API_SECRET'],
        resourceType: 'image',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env['GOOGLE_ANALYTICS_TRACKING_ID'],
        enableWebVitalsTracking: true,
        respectDNT: true,
        anonymize: true,
        defer: false,
        head: false,
        pageTransitionDelay: 0,
      },
    },
  ],
};

export default gatsbyConfig;
