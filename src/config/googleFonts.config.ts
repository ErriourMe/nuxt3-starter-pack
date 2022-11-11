// import { ModuleOptions } from '@nuxtjs/google-fonts/dist/types'
// TODO: Fix types

/**
 * Nuxt Google fonts configuration
 * https://google-fonts.nuxtjs.org/options
 */
export const googleFontsConfig: object = {
  download: true,
  base64: false,
  inject: true,
  display: 'swap',
  preload: true,
  prefetch: true,
  preconnect: true,
  families: {
    Montserrat: [300, 400],
  },
}
