export default {
  mode: 'universal',
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
    cssPath: '~/assets/css/tailwind.css'
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
      // name: 'telemet',
      lang: 'he',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description
      },
      // Open Graph / Facebook
      {property: 'og:type', content: 'website'},
      {hid: 'og:url', property: 'og:url', content: 'https://telemet.org'},
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'טלאֱמֶת'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: process.env.npm_package_description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://telemet.org/images/telemet-poster-fb.jpg'
      },
      // Twitter
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://telemet.org'
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'טלאֱמֶת'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: process.env.npm_package_description
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://telemet.org/images/telemet-poster-fb.jpg'
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png'
      },
      {rel: 'manifest', href: '/site.webmanifest'},
      {
        rel: 'mask-icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/safari-pinned-tab.svg',
        color: '#ff0528'
      },
      {name: 'apple-mobile-web-app-title', content: 'telemet'},
      {name: 'application-name', content: 'telemet'},
      {name: 'msapplication-TileColor', content: '#ff0528'},
      {name: 'theme-color', content: '#ffffff'}
    ]
  },
  webfontloader: {
    google: {
      families: ['Assistant:400,700'] // Loads Lato font with weights 400 and 700
    }
  },
  generate: {fallback: '404.html'},
  components: true,
  content: {
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
