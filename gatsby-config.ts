import { GatsbyConfig, PluginRef } from 'gatsby';
import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const IS_DEV = process.env['NODE_ENV'] === 'development';
const IS_PROD = process.env['NODE_ENV'] === 'production';

const commonPlugins: readonly PluginRef[] = [
  'gatsby-plugin-cname',
  'gatsby-plugin-provide-react',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-image',
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
      name: 'cvFiles',
      path: path.resolve('data', 'cv'),
    },
  },
  {
    resolve: 'gatsby-transformer-yaml',
    options: {
      typeName: 'Yaml',
    },
  },
  'gatsby-transformer-inline-svg',
  'gatsby-plugin-sharp',
  'gatsby-transformer-sharp',
];

const prodPlugins: readonly PluginRef[] = [
  'gatsby-plugin-preact',
  {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      trackingIds: [process.env['GOOGLE_ANALYTICS_TRACKING_ID']],
      pluginConfig: {
        head: false,
      },
    },
  },
];

const gatsbyConfig: GatsbyConfig = {
  siteMetadata: {
    siteUrl: 'https://godested.me',
  },
  plugins: [...commonPlugins, ...(IS_PROD ? prodPlugins : [])],
};

export default gatsbyConfig;
