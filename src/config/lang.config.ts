import en from '../locales/en'
import ru from '../locales/ru'

export const langConfig: Object = {
  baseUrl: 'https://domain.com',
  defaultLocale: 'en',
  dynamicRouteParams: true,
  locales: [
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
    },
    {
      code: 'ru',
      name: 'Русский',
      iso: 'ru-RU',
    },
  ],
  vueI18n: {
    fallbackLocale: 'en',
    locale: 'en',
    legacy: false,
    messages: { en, ru },
  },
}
