import { defineNuxtRouteMiddleware } from '#app'
import { useAuthStore } from '~/stores/useAuthStore'

export default defineNuxtRouteMiddleware(() => {
  const auth = useAuthStore()

  if (auth.user) {
    return navigateTo('/dashboard')
  }
})
