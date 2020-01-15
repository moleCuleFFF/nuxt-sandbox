export default {
  mode: 'universal',
  /*
    ** Headers of the page
    */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
    ** Customize the progress-bar color
    */
  loading: { color: '#fff' },
  /*
    ** Global CSS
    */
  css: [
    '@/assets/scss/app.scss'
  ],
  /*
    ** Plugins to load before mounting the App
    */
  plugins: [
    '~/plugins/axios/cms'
  ],
  /*
    ** Nuxt.js dev-modules
    */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxt/typescript-build'
  ],
  /*
    ** Nuxt.js modules
    */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      detectBrowserLanguage: false,
      strategy: 'prefix_and_default',
      defaultLocale: 'en',
      alwaysRedirect: true,
      lazy: true,
      langDir: 'lang/',
      parsePages: true,
      locales: [
        {
          code: 'fr',
          file: 'fr-FR.ts',
          name: 'Français'
        },
        {
          code: 'de',
          file: 'de-DE.ts',
          name: 'Deutsch'

        },
        // the default locale needs to be last for the strategies: prefix_except_default and prefix_and_default
        {
          code: 'en',
          file: 'en-GB.ts',
          name: 'English'
        }
      ],
    }]
  ],
  /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
  axios: {},
  /*
    ** Build configuration
    */
  build: {
    /*
        ** You can extend webpack config here
        */
    extend (config, ctx) {
    }
  }
}
