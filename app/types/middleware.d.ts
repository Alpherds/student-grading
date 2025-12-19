import 'nuxt/schema'

declare module 'nuxt/schema' {
  interface PageMeta {
    middleware?: string | string[]
  }
}

export {}
