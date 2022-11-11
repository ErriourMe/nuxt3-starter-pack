import { langConfig } from './config/lang.config'
import { unoCSSConfig } from './config/unoCSS.config'
import { headConfig } from './config/head.config'
import { runtimeConfig } from './config/_runtime.config'
import { googleFontsConfig } from './config/googleFonts.config'
import { tooltipConfig } from './config/tooltip.config'
import { imageConfig } from './config/image.config'
import { postCssConfig } from './config/postCss.config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  runtimeConfig,

  app: {
    head: headConfig,
  },

  css: ['~/assets/postcss/vendor.css', '~/assets/postcss/global.css'],

  plugins: [],

  build: {
    transpile: ['@headlessui/vue'],
  },

  postcss: postCssConfig,

  buildModules: [
    ['@unocss/nuxt', unoCSSConfig],
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    ['@nuxtjs/i18n', langConfig],
    ['@vueuse/nuxt', { ssrHandlers: true }],
    ['@nuxt/image-edge', imageConfig],
    'nuxt-icon',
    ['@nuxtjs/google-fonts', googleFontsConfig],
    ['floating-vue/nuxt', tooltipConfig],
  ],

  modules: [],

  experimental: {
    reactivityTransform: true,
  },

  components: true,
})
