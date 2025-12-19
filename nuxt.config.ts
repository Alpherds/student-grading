export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],

  css: ['vuetify/styles','~/assets/auth.css','@mdi/font/css/materialdesignicons.css',],

  build: {
    transpile: ['vuetify']
  },

  runtimeConfig: {
    public: {
       supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY
    }
  },

  typescript: {
    strict: true,
    typeCheck: false
  }
})
