// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-highcharts', '@pinia/nuxt'],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap'
        }
      ]
    }
  }
}


)
