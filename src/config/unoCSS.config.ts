import { colors } from './unoCSS/colors'

export const unoCSSConfig: object = {
  preflight: true, // Normalize css

  shortcuts: [],
  rules: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      fhd: '1920px',
      '2k': '2560px',
    },
    fontFamily: {
      main: ['Montserrat', 'sans-serif'],
    },
    colors,
  },
}
