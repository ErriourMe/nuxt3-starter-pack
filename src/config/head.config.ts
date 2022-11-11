import { AppHeadMetaObject } from '@nuxt/schema'

export const headConfig: AppHeadMetaObject = {
  titleTemplate: '%s - [Your Project]',
  title: '[Default title]',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: '[Your Project] description',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'apple-mobile-web-app-title',
      content: '[Your Project]',
    },
    {
      name: 'application-name',
      content: '[Your Project]',
    },
    // {
    //   name: 'msapplication-TileColor',
    //   content: '#ffffff',
    // },
    // {
    //   name: 'msapplication-TileImage',
    //   content: '/static/icons/mstile-144x144.png',
    // },
    // {
    //   name: 'msapplication-config',
    //   content: '/static/icons/browserconfig.xml',
    // },
    // {
    //   name: 'theme-color',
    //   content: '#ffffff',
    // },
  ],
  link: [
    // {
    //   rel: 'apple-touch-icon',
    //   sizes: '180x180',
    //   href: '/static/icons/apple-touch-icon.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '32x32',
    //   href: '/static/icons/favicon-32x32.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '194x194',
    //   href: '/static/icons/favicon-194x194.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '192x192',
    //   href: '/static/icons/android-chrome-192x192.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '16x16',
    //   href: '/static/icons/favicon-16x16.png',
    // },
    // {
    //   rel: 'manifest',
    //   href: '/static/icons/site.webmanifest',
    // },
    // {
    //   rel: 'mask-icon',
    //   href: '/static/icons/safari-pinned-tab.svg',
    //   color: '#00d67c',
    // },
    // {
    //   rel: 'shortcut icon',
    //   href: '/static/icons/favicon.ico',
    // },
  ],
  script: [],
}
