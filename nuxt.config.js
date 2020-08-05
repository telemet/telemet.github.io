import axios from 'axios'

export default {
  mode: 'spa',
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'טלאֱמֶת | %s',
    title: 'טלאֱמֶת',
    htmlAttrs: {
      lang: 'he',
      dir: 'rtl'
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#FF0528',
    height: '2px',
    throttle: 100,
    continuous: true
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{src: '~/plugins/vee-validate.js', mode: 'client'}],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // https://nuxtjs.org/blog/creating-blog-with-nuxt-content/#conclusion
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-139918597-1'
        //  For testing analytics in dev mode
        // debug: {
        //   enabled: true,
        //   sendHitTask: true
        // }
      }
    ]
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: true
    // purgeCSSInDev: true
    /*
     ** Nuxt.js modules
     */
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    [
      'vue-scrollto/nuxt',
      {
        duration: 666,
        offset: 0, // was -64
        easing: 'ease'
      }
    ]
  ],
  pwa: {
    manifest: {
      lang: 'he'
    },
    meta: {
      name: 'טלאֱמֶת',
      lang: 'he',
      ogHost: 'https://telemet.org',
      ogImage: 'https://telemet.org/images/telemet-poster.jpg'
    }
  },
  webfontloader: {
    google: {
      families: ['Assistant:400,700'] // Loads Lato font with weights 400 and 700
    }
  },
  generate: {fallback: '404.html'},
  components: true,
  content: {
    liveEdit: false,
    nestedProperties: ['author.name']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
