import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - pautova',
    title: 'pautova',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/auth'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://localhost:3000/api'
  },

  // Content module configuration (https://go.nuxtjs.dev/content-config)
  content: {
    apiPrefix: 'api/content'
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss']
  },

  auth: {
    cookie: {
      options: {
        expires: 365
      }
    },
    resetOnError: true,
    redirect: {
      login:  '/admin/login',
      home:   '/admin',
      logout: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url:          '/auth/login',
            method:       'post',
            propertyName: 'token'
          },
          logout: false,
          user: {
            url:          '/auth/me',
            method:       'GET',
            propertyName: 'token'
          }
        },
        tokenRequired: true
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  serverMiddleware: {
    '/api': '~/api'
  }
}
