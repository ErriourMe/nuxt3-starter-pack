import Toast from 'vue-toastification'
import { toastConfig } from '../config/toast.config'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, toastConfig)
})
