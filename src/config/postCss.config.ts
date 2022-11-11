// import postcssScss from 'postcss-scss'

export const postCssConfig: object = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins: {
    autoprefixer: {},
    'postcss-nested': {},
  },
}
