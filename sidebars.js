// ref: https://docusaurus.io/docs/sidebar/multiple-sidebars#generating-pagination
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  main: [
    'index',
    {
      type: 'category',
      label: 'Philosophy',
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'philosophy/overview',
        },
        {
          type: 'doc',
          label: 'Principles',
          id: 'philosophy/principles',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-menu-divider"></div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Voice',
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'voice/index',
        },
      ],
    },
    {
      type: 'category',
      label: 'Visual Language',
      collapsible: true,
      items: [
        {
          type: 'doc',
          label: 'Overview',
          id: 'visual-language/index',
        },
        {
          type: 'doc',
          label: 'Logo',
          id: 'visual-language/logo',
        },
        {
          type: 'doc',
          label: 'Typography',
          id: 'visual-language/typography',
        },
        {
          type: 'doc',
          label: 'Color',
          id: 'visual-language/color',
        },
        {
          type: 'doc',
          label: 'Grid & Layout',
          id: 'visual-language/grid-and-layout',
        },
      ],
    },
    {
      type: 'html',
      value: '<div class="sidebar-menu-divider"></div>',
      defaultStyle: true,
    },
    {
      type: 'category',
      label: 'Resources & Tools',
      collapsible: true,
      items: [
        {
          type: 'category',
          label: 'LSD - UI Library',
          collapsible: true,
          items: [
            {
              type: 'doc',
              label: 'Overview',
              id: 'resources-and-tools/lsd/index',
            },
            {
              type: 'doc',
              label: 'Design tokens',
              id: 'resources-and-tools/lsd/design-tokens',
            },
          ],
        },
        'resources-and-tools/presentation-kits',
        'resources-and-tools/gallery',
      ],
    },
  ],
}

module.exports = sidebars
