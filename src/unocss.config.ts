import {
  defineConfig,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  presets: [presetWind(), presetScrollbar()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
