// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-09-25',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  css: [
    '~/styles/main.scss'
  ],

  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt'
  ],

  build: {
    transpile: ['pinia-plugin-persistedstate']
  },

  alias: {
    pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
  }
})
