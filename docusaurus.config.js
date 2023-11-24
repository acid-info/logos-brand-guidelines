// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Logos',
  url: 'https://logos.co/',
  baseUrl: '/',

  customFields: {
    storybookUrl: process.env.STORYBOOK_URL,
  },

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Logos',
        customSiteConfig: true,
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
            docs: {
              default: {
                sidebar: {
                  hide: false,
                },
              },
            },
          },
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        og: {},
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 100,
        max: 1080,
        min: 400,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  themes: [
    [
      '@acid-info/logos-docusaurus-brand-guidelines-theme',
      /** @type {import('@acid-info/logos-docusaurus-brand-guidelines-theme').ThemeOptions} */
      ({
        customCss: [],
        lsdDocs: {
          storybookUrl: process.env.STORYBOOK_URL,
          componentsDirectory: 'docs/lsd/components',
          designTokensDirectory: 'docs/lsd/design-tokens',
          componentConfig: {
            Colors: {
              globalProps: ['themeColor'],
            },
            Typography: {
              globalProps: ['themeFont'],
            },
            Spacing: {
              globalProps: [],
            },
          },
          excludeComponents: [
            'BreadcrumbItem',
            'CardBody',
            'CardHeader',
            'CollapseHeader',
            'DropdownItem',
            'ModalBody',
            'ModalFooter',
            'TabItem',
            'TableItem',
            'TableRow',
            'Calendar',
            'TableBody',
            'TableHeader',
            'TooltipBase',
          ],
          staticDirectory: 'lsd',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        items: [
          {
            type: 'search',
          },
        ],
      },
      footer: {
        links: [
          {
            items: [
              {
                href: 'https://twitter.com/Codex_storage',
                label: 'Twitter',
              },
              {
                href: 'https://discord.gg/2NXGrsqmDq',
                label: 'Discord',
              },
              {
                href: '/',
                label: 'Docs',
              },
              {
                href: 'https://github.com/codex-storage',
                label: 'Github',
              },
            ],
          },
          {
            items: [
              {
                href: '/',
                label: 'Contact us',
              },
              {
                href: 'https://jobs.status.im/',
                label: 'Work with us',
              },
              {
                href: '/terms',
                label: 'Terms & conditions',
              },
            ],
          },
        ],
      },
    }),
}

module.exports = config
