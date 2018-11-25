module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "Eka's Daily",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A little girl from Ponorogo with a huge dream about life and family est. 1992."
      },
      {
        name: "og:title",
        content: "Eka's Daily",
      },
      {
        name: "og:image",
        content: "/logo.png"
      },
      {
        name: "og:url",
        content: process.env.siteUrl
      },
      {
        name: "og:description",
        content: "A little girl from Ponorogo with a huge dream about life and family est. 1992."
      },
      {
        name: "og:site_name",
        content: "Eka's Daily"
      },
      {
        name: "twitter:image:alt",
        content: "Eka's Daily Thumbnail"
      },
      {
        name: "twitter:card",
        content: "summary_large_image"
      },
      // {
      //   name: "fb:app_id",
      //   content: "your_app_id"
      // },
      // {
      //   name: "twitter:site",
      //   content: "@dannyhrnt"
      // },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },

  css: [
    { src: 'bulma/bulma.sass', lang: 'sass' },
    { src: 'bulma-utilities/sass/bulma-utilities.sass', lang: 'sass' },
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    "~assets/css/style.css",
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  plugins: [
    { src: '~plugins/google-analytics.js', ssr: false }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true,
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    },
  },

  env: {
    siteUrl: "https://istrinya.denyherianto.com",
    baseUrl: "https://eka-dash.denyherianto.com",
    title: "Eka's Daily"
  },

  server: {
    port: 8117, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
}
