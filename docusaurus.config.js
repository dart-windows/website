// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dart | Windows',
  tagline: 'A suite of packages to support Windows development with the Dart programming language.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://win32.pub',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dart-windows', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/dart-windows/website/tree/main/',
        },
        googleTagManager: {
          containerId: 'G-193HRKRE3S',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   // The application ID provided by Algolia
      //   appId: 'HX017D1R57',

      //   // Public API key: it is safe to commit it
      //   apiKey: '8d7bf2c1447cea6d0acbdcc9615e1b08',

      //   indexName: 'win32',

      //   // Optional: see doc section below
      //   contextualSearch: true,

      //   // Optional: Specify domains where the navigation should occur through
      //   // window.location instead on history.push. Useful when our Algolia
      //   // config crawls multiple documentation sites and we want to navigate
      //   // with window.location.href to them.
      //   externalUrlRegex: 'external\\.com|domain\\.com',

      //   // Optional: Replace parts of the item URLs from Algolia. Useful when
      //   // using the same search index for multiple deployments using a
      //   // different baseUrl. You can use regexp or string in the `from` param.
      //   // For example: localhost:3000 vs myCompany.com/docs
      //   replaceSearchResultPathname: {
      //     from: '/docs/', // or as RegExp: /\/docs\//
      //     to: '/',
      //   },

      //   // Optional: Algolia search parameters
      //   searchParameters: {},

      //   // Optional: path for search page that enabled by default (`false` to
      //   // disable it)
      //   searchPagePath: 'search',

      //   //... other Algolia params
      // },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      image: 'img/dart-on-windows-card.png',
      navbar: {
        title: 'Dart | Windows',
        logo: {
          alt: 'Dart | Windows Logo',
          src: 'img/dart-windows-logo.png',
        },
        items: [
          {
            label: 'Documentation',
            to: '/docs/intro',
          },
          {
            href: 'https://github.com/dart-windows',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussions',
                href: 'https://github.com/orgs/dart-windows/discussions',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dart-windows',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} the Dart | Windows project team. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['dart'],
      },
    }),
};

module.exports = config;
