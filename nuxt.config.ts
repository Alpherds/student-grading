export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],

  css: ['vuetify/styles','~/assets/auth.css','@mdi/font/css/materialdesignicons.css',],

  build: {
    transpile: ['vuetify']
  },

  runtimeConfig: {
    public: {
      supabaseUrl: '' as string,
      supabaseAnonKey: '' as string
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  }
})
