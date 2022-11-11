import { $fetch } from 'ohmyfetch'
import { ItokenObject } from '~/interfaces/ItokenObject'

export const $apiFetch = $fetch.create({
  retry: 1,
  keepalive: true,
  onRequest({ options }) {
    // { request, options }
    const token = useCookie<ItokenObject>('token').value
    if (token?.access_token) {
      options.headers = { Authorization: 'Bearer ' + token.access_token }
    }
  },
  async onResponse({ response }) {
    await console.log('pl', response)
    if (response.status === 401) {
      console.log(response)
    }

    if (response.status === 403) {
      console.log(response)
      // const config = useRuntimeConfig()
      // const store = useMainStore()
      // store.logout('/login')
      // const check = new Promise((resolve, reject) => {
      //   try {
      //     apiFetch(`${config.DOMAIN}/api/refresh`, {
      //       method: 'POST',
      //       body: {
      //         refreshToken: useCookie<tokenObject>('token').value.refresh_token,
      //       },
      //     }).then((res) => {
      //       const token = res
      //       useCookie<tokenObject>('token').value = token
      //       options.retry = 1
      //       resolve(true)
      //     })
      //   } catch (err) {
      //     reject()
      //   }
      // })
      // return apiFetch(request, options)
    }
  },
})
