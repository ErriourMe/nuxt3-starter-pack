import { PluginOptions } from 'vue-toastification/src/types'
import { POSITION } from 'vue-toastification/src/ts/constants'

export const toastConfig: PluginOptions = {
  transition: 'Vue-Toastification__fade',
  position: POSITION.TOP_RIGHT,
  icon: false,
  closeButton: false,
  // toastClassName: 'rt4',
  // bodyClassName: 'h-full',
  hideProgressBar: true,
}
